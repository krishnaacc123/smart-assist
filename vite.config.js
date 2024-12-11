import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default is 'dist', but you can change this
    lib: {
      entry: './src/main.jsx',
      name: 'main',
      fileName: 'chatbot',
    },
  },
});
