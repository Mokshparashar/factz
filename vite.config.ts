import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/adarsh": "https://jsbackend-k2xi.onrender.com",
    },
  },
  plugins: [react()],
});
