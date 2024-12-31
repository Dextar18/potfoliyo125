/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F8F9FA",
        secondary: "#D2042D",
        tertiary: "black",
        "black-100": "#D2042D",
        "black-200": "#090325",
        "white-100": "#F8F9FA",
      },
      boxShadow: {
        card: "-10px 35px 120px -15px #D2042D",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
      },
      extend: {
        colors: {
          cherryRed: "#D2042D", // Cherry Red
          offWhite: "#F8F9FA", // Off-White
        },
        boxShadow: {
          card: "0px 35px 120px -15px #D2042D", // Example with Cherry Red
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.svg')",
        },
        
      },
    },
  },
  plugins: [],
};
