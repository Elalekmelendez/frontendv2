import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const { email, image } = user;
      const provider = account?.provider ?? "";

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
            provider,
            country: null,
            last_login: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
            password: "",
          },
        });
      }

      console.log("signIn", user);

      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
const prisma = new PrismaClient();
