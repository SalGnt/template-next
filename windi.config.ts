import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: false,
  darkMode: false, // or 'media' or 'class'
  extract: {
    include: ["**/*.{css,js,jsx,ts,tsx}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
});
