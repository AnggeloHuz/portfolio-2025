import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-2025', // Ejemplo: '/portafolio-curso/'
  plugins: [react(), tailwindcss(),],
})
