import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray, // reativa paleta clássica
        brand: {
          light: "#fce7f3",
          DEFAULT: "#ec4899", // rosa
          dark: "#db2777",
        },
        action: {
          DEFAULT: "#facc15", // amarelo
          dark: "#eab308",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
