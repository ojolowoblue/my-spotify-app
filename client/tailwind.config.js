/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primeDark: "#121212",
        dark: "#000000",
        white: "#FFFFFF",
        grey: "#B3B3B3",
        prime: "#57B65F",
      },
      spacing: {
        6: "24px",
      },
      height: {
        page: "calc(100vh - 72px)",
      },
      minHeight: {
        page: "calc(100vh - 72px)",
      },
      screens: {
        smDesktop: { max: "1024px" },
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
      fontSize: {
        sm: "1.2rem",
        base: "1.6rem",
        xl: "2rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
