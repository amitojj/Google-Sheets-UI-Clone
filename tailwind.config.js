/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bgc: "var(--bgc)",
        texc: "var(--texc)",
        "bgc-h": "var(--bgc-h)",
        "bgc-b": "var(--bgc-b)",
        "bgc-bh": "var(--bgc-bh)",
        "bgc-m":"var(--bgc-m)",
        "bgc-mh": "var(--bgc-mh)",
        "bgc-mb": "var(--bgc-mb)",
        "bgc-mbh": "var(--bgc-mbh)",
        "show-check": "var(--show-check)",
        "show-check-f": "var(--show-check-f)",
        "bgc-t":"var(--bgc-t)",
        "bgc-tb":"var(--bgc-tb)",
        "texc-s":"var(--texc-s)",
      },
     
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

