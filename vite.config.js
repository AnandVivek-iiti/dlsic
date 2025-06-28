import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,  // optional, default port
    proxy: {
      '/api/signup': {
        target: 'http://localhost:5000',  // your backend server
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
