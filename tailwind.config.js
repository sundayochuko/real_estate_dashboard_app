module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 1024px) { ... }

        lg: "1180px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        // red: "#EE3337",
        prefixGray: {
          light: "#f2f3f9",
          dark: "#202020",
        },
        prefixblue: {
          dark: "#2d1dc4",
        },
        // orange: {
        //   dark: "#EE3337",
        //   light: "#F78B33",
        // },
      },

      fontFamily: {
        orbitron: ["Orbitron"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
