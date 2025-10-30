import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages нужен base path с названием репозитория
  base: process.env.NODE_ENV === 'production' ? '/tms_bot/' : '/',
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    // Генерировать source maps для отладки
    sourcemap: false,
    // Оптимизация (используем встроенный esbuild вместо terser)
    minify: 'esbuild',
  }
})

