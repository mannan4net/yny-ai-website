import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import sitemap from "vite-plugin-sitemap";

const dynamicRoutes = [
  "/",
  "/products",
  "/products/paai",
  "/products/sdlc-factory",
  "/products/legalpa",
  "/products/aiuniverse",
  "/products/global-tutor",
  "/about",
  "/services",
  "/insights",
  "/contact"
];

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://www.yny-ai.com",
      dynamicRoutes,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});