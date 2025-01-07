import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Por favor, introduce ambos campos.");
        }

        const { email, password } = credentials;

        // Verificar si el usuario existe
        const user = await prisma.users.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("El usuario no está registrado.");
        }

        // Verificar la contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Contraseña incorrecta.");
        }

        // Retornar datos del usuario
        return {
          id: user.id,
          email: user.email,
          name: user.email,
          image: user.picture,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        const { email, image } = user;

        if (!email) {
          return false;
        }

        const existUser = await prisma.users.findUnique({
          where: { email },
        });

        if (existUser) {
          await prisma.users.update({
            where: { email },
            data: {
              last_login: new Date(),
              updated_at: new Date(),
            },
          });
        } else {
          await prisma.users.create({
            data: {
              id: uuidv4(),
              email,
              picture: image ?? "",
              provider: account?.provider ?? null,
              country: null,
              last_login: new Date(),
              created_at: new Date(),
              updated_at: new Date(),
              password: "",
            },
          });
        }
      }
      return true;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl; // Redirigir al inicio después de iniciar sesión
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
