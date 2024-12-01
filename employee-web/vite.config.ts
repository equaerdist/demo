import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      "/api": "http://185.185.69.84:8888",
    },
  },
});
