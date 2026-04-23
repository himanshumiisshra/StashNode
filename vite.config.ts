import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Warning: If your video files are massive, you might need to adjust the chunk size warning limit
    chunkSizeWarningLimit: 1600,
  }
});