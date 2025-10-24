/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#FAFBFC",
        heroStart: "#E0EAFE",
        heroEnd: "#F9E5FF",
      },
      fontFamily: {
        sans: ["Poppins", "UI-Sans-Serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
