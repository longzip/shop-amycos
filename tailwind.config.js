/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#6b7076",
        primary: "#f4866e",
        secondary: "#181d4e",
        footer: "#fff9f5",
        strongGray: "#898989",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"),
  ],
};
