import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/blogs': 'http://localhost:8080',
      '/api': 'http://localhost:8080'
    },
  },
  /*
   * GitHub Pages serves this as a project site under /Portfolio/, Vercel serves
   * it at the domain root. Vercel sets VERCEL=1 during the build; the gh-pages
   * deploy builds locally, where it is unset.
   */
  base: process.env.VERCEL ? "/" : "/Portfolio/"
})
