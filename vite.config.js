import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.jsx'
      }
    }
  },
  base:'/portfolio-React/'
})
