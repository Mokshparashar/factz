import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://jsbackend-k2xi.onrender.com",
    },
    port: 5173,
  },
  plugins: [react()],
});
