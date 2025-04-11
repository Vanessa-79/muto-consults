/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1ff",
          100: "#cce3ff",
          200: "#99c7ff",
          300: "#66aaff",
          400: "#338eff",
          500: "#0072ff",
          600: "#005bcc",
          700: "#004499",
          800: "#002d66",
          900: "#001733",
          950: "#000e1a",
        },
        secondary: {
          50: "#fff8f0",
          100: "#fff1e0",
          200: "#ffe3c2",
          300: "#ffd5a3",
          400: "#ffc785",
          500: "#ffb966",
          600: "#cc9452",
          700: "#996f3d",
          800: "#664a29",
          900: "#332514",
          950: "#19130a",
        },
        navy: {
          500: "#0a192f",
          600: "#081426",
          700: "#060f1d",
          800: "#040a14",
          900: "#02050a",
        },
        orange: {
          400: "#ff9f43",
          500: "#ff8c1a",
          600: "#cc7015",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
