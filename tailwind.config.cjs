/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 26,
      "2xl": 32,
    },
    colors: {
      "gray-x-light": "#879DAC",
      "gray-light": "#F5F5F5",
      "gray-mid": "#B7C8D5",
      "gray-strong": "#4B4B4B",
      purple: "#514984",
      "purple-light": "#D4DDFA",
      red: "#E8534A",
      violet: "#33002F",
      white: "#FFFFFF",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "1rem",
    },
    extend: {
      fontFamily: {
        sans: "Manrope, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
