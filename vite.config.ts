import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// GitHub Pages project sites are served from /<repo-name>/, so asset URLs
// must be prefixed. The workflow sets VITE_BASE at build time so the same
// config works for any repo name without editing.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5181,
    open: true,
  },
});
