import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/website_version_04/',
  plugins: [
    tailwindcss(),
  ],
})