import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',

  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        terms: resolve(process.cwd(), 'terms/index.html'),
        privacyWebsite: resolve(process.cwd(), 'privacy-website/index.html'),
        privacyUsers: resolve(process.cwd(), 'privacy-users/index.html'),
      },
    },
  },
})