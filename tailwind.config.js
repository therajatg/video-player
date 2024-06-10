/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fromTextColor: "rgba(205, 33, 33, 1)",
        toTextColor: "rgba(99, 32, 207, 1)",
      },
      fontFamily: {
        BebasNeueRegular: ["BebasNeue-Regular"],
        DanfoRegular: ["Danfo-Regular"],
        DMSerifTextItalic: ["DMSerifText-Italic"],
        DMSerifTextRegular: ["DMSerifText-Regular"],
        GwendolynBold: ["Gwendolyn-Bold"],
        GwendolynRegular: ["Gwendolyn-Regular"],
        Jacquard12Regular: ["Jacquard12-Regular"],
        JosefinSansBold: ["JosefinSans-Bold"],
      },
    },
  },
  plugins: [],
};
