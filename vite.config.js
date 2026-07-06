import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LudoShenn15.github.io/',
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
