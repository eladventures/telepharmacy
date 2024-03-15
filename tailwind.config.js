/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#843bd7",
      },
      fontFamily: {
        primary: ["Inter"],
      },
    },
  },
  daisyui: {
    themes: [
      "light", // Retain only 'light' or your custom theme that does not use dark mode
      // Removed 'dark' and other themes to prevent them from being used
    ],
    darkTheme: false, // Explicitly disable the dark theme
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/container-queries",
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
