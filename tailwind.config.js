/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fromTextColor: "rgba(205, 33, 33, 1)",
        toTextColor: "rgba(99, 32, 207, 1)",
      },
    },
  },
  plugins: [],
};
