import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita el modo oscuro con la clase "dark"
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D343E", // Gris oscuro corporativo (Texto principal)
          light: "#435D69",   // Gris claro (Texto secundario)
          dark: "#E8E8E8",    // Gris claro en modo oscuro
        },
        accent: {
          DEFAULT: "#7DC3D7", // Celeste corporativo
          hover: "#9EB4BE",   // Gris azulado (Hover)
        },
        background: {
          light: "#FFFFFF",   // Fondo principal claro
          dark: "#000000",    // Fondo principal oscuro
        },
        neutral: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      borderRadius: {
        lg: "0.5rem", // Bordes redondeados estándar
        xl: "0.75rem", // Bordes redondeados para componentes destacados
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"], // Fuente principal
      },
      boxShadow: {
        "custom-light": "0 2px 8px rgba(0, 0, 0, 0.1)", // Sombra ligera
        "custom-dark": "0 2px 8px rgba(0, 0, 0, 0.25)", // Sombra en modo oscuro
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Estilos mejorados para formularios
  ],
} satisfies Config;
