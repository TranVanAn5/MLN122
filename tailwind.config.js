/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "Arial", "sans-serif"],
      },
      colors: {
        midnight: "#05051a",
        electric: "#6d28d9",
        cyanlight: "#62e8ff",
        gold: "#ffb800",
      },
    },
  },
  plugins: [],
};
