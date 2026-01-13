/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        todo: {
          yellow: "#EFD67F",
          blue: "#5A95B6",
          dark: "#1E1E1E",
        },
      },
      fontFamily: {
        indie: ["Indie Flower", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
