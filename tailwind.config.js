/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: {
        50: "#E5E6EB",
        100: "#CECFD9",
        200: "#9A9DB2",
        300: "#6A6E8B",
        400: "#424557",
        500: "#1D1E26",
        600: "#16171D",
        700: "#121217",
        800: "#0B0B0E",
        900: "#070709",
      },
      primary: {
        50: "#F7F5FF",
        100: "#EAE5FF",
        200: "#D5CCFF",
        300: "#BFB3FF",
        400: "#AA99FF",
        500: "#9580FF",
        600: "#5533FF",
        700: "#2600E6",
        800: "#1A0099",
        900: "#0D004D",
      },
      secondary: {
        50: "#FFF5FA",
        100: "#FFEBF5",
        200: "#FFD6EB",
        300: "#FFBDDE",
        400: "#FFA3D1",
        500: "#FF80BF",
        600: "#FF5CAD",
        700: "#FF1A8C",
        800: "#DB006E",
        900: "#9E004F",
      },
    },
  },
  plugins: [],
};
