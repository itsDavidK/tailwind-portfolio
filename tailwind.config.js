/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        gray: "#525252",
        darkPurple: "#3c0778",
        lavender: "#db9ffb",
        lightGray: "#ededed",
        specialBlack: "#0c0b0d",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-purple":
        "linear-gradient(90deg, rgba(219,159,251,1) 0%, rgba(177,124,221,1) 51%, rgba(115,8,237,1) 100%)",
      }),
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        opensand: ["Open Sans", "sans-seriff"]
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
