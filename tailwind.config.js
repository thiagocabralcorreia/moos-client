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
        primary: "#1A1A1A",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        germania: ["Germania One", "sans-serif"],
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
