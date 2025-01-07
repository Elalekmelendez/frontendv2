"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/common";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Custom404 from "./404/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define rutas excluidas para Header, Footer y rutas a mostrar 404
  const excludeHeaderPaths = ["/login", "/register", ];
  const excludeFooterPaths = ["/chat", '/login', '/register'];
  const error404Paths = ["/subscriptions", "/admin"]; // Rutas que deben mostrar 404
  const normalizedPathname = pathname?.toLowerCase() || "";

  // Si la ruta coincide con las rutas de error 404
  if (error404Paths.includes(pathname)) {
    return (
      <html lang="es">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Custom404 />
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {!excludeHeaderPaths.includes(normalizedPathname) && <Header />}
          {children}
          {!excludeFooterPaths.includes(normalizedPathname) && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
