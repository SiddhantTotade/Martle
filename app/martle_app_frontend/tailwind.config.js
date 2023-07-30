/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Playfair Display", "serif"],
      para: ["Poppins", "sans - serif"],
      carouselTitle: ["Alegreya, serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "40px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    width: {
      HeaderSwiper: "90%",
      RandomCards: "90%",
      Wedding: "40%",
      NavBar: "100%",
      Image: "100%",
      SpecialFrom: "80%",
      Card: "280px",
      RandomCard: "30%",
      CutLine: "45px",
      ProductDetail: "50%",
    },
    screens: {
      md: { max: "1368px" },
      sm: { max: "500px" },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
