import { defineConfig } from "windicss/helpers";

const colors = require("windicss/colors");
const typography = require("windicss/plugin/typography");

export default defineConfig({
  extract: {
    include: ["**/*.{js,ts,jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
});
