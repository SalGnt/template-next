import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  darkMode: false, // or 'media' or 'class'
  extract: {
    include: ["**/*.{css,js,jsx,ts,tsx}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
});
