module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        mobile: "375px",
      },
      colors: {
        neutral: {
          slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
          slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
        },
        primary: {
          veryDarkBlue: "hsl(233, 47%, 7%)",
          darkDesaturatedBlue: "hsl(244, 38%, 16%)",
          softViolet: "hsl(277, 64%, 61%)",
        },
      },
    },
  },
  plugins: [],
};
