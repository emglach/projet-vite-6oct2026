import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/projet-vite-6oct2026/",
  plugins: [react()],
});
