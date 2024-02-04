/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        rob: "Roboto, sans-serif",
      },
      gridTemplateColumns: {
        26: "repeat(26 , 100px)",
      },
      gridTemplateRows: {
        100: "repeat(100 , 25px)",
      },
    },
  },
  plugins: [],
};

