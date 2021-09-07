module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        primary: {
          strongCyan: "hsl(172, 67%, 45%)",
        },
        neutral: {
          veryDarkCyan: "hsl(183, 100%, 15%)",
          darkGrayishCyan: "hsl(186, 14%, 43%)",
          darkGrayishCyan2: "hsl(184, 14%, 56%)",
          lightGrayishCyan: "hsl(185, 41%, 84%)",
          lightGrayishCyan2: "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },

      // fonts
      fontFamily: {
        spaceMono: ["Space Mono, monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
