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
    extend: {
      fontFamily: {
        sans: "Open Sans, monospace",
      },
    },
  },
  plugins: [],
};
