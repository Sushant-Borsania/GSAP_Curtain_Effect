/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif JP", "serif"],
        Open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
