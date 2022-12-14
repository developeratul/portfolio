/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        background: {
          50: "#E5E6EB",
          100: "#CECFD9",
          200: "#9A9DB2",
          300: "#6A6E8B",
          400: "#282A36",
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
          100: "#FFE5F2",
          200: "#FFCCE6",
          300: "#FFB3D9",
          400: "#FF99CC",
          500: "#FF80BF",
          600: "#FF3399",
          700: "#E60073",
          800: "#99004D",
          900: "#4D0026",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
