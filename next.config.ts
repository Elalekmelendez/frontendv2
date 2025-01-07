import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['lh3.googleusercontent.com'], // Agrega este dominio aquí
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readymadeui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
