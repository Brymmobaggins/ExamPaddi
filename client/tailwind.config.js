/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "black-haze": {
        50: "#f5f6f7",
        100: "#edeff1",
        200: "#d8dcdf",
        300: "#b5bec4",
        400: "#8d9aa3",
      },
    },
    extend: {
      fontFamily: {
        sans: "Open Sans, monospace",
      },
    },
  },
  plugins: [],
};
