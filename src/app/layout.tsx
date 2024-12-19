"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/common";
import { usePathname } from "next/navigation";

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

  const excludeFooterPaths = ['/chat']; // Agrega las rutas donde no quieras mostrar el Footer

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
        {!excludeFooterPaths.includes(pathname) && <Footer />}

      </body>
    </html>
  );
}
