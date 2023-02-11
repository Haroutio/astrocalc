/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  important: true,
  theme: ["dark"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
  },
};
