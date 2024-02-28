/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fba125",
        secondary: "#ffb454",
        dark: "#2e2e2e",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        xm: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "44px",
      },
    },
  },
  plugins: [],
});
