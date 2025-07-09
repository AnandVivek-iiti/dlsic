import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react(), tailwindcss()],
   
  server: {
    port: 5173,
    historyApiFallback: true,
    proxy: {
      '/api': {
         target: 'https://dlsic-production.up.railway.app',
        build: { outDir: 'dist' },
         base: '/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
