import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/summarize-application/', // 👈 This is the key fix
  plugins: [react()],
})
