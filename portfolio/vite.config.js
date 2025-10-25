import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
  ],
   server: {
        fs: {
          // Set to false to allow serving files from outside the project root
          // Or specify allowed directories if strict is true
          // allow: ['../']
          strict: false,
        },
      },
})
