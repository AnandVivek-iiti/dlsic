import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // vite.config.js
proxy: {
  '/api': 'http://localhost:3000'
}
,
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }

})
