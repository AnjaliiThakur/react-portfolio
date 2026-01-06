import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-portfolio/", // <-- required for GitHub Pages
  plugins: [react()],
});
