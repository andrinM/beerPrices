import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/logos': 'http://backend:5000', // docker service name instead of localhost
      '/api': 'http://backend:5000'
    },
    host: true, // This exposes the server to your local network/Docker
    port: 5173,
    watch: {
      usePolling: true, // This is the "magic" that makes Windows saves work
    },
  },
})