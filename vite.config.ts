import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',   // ✅ required for Docker dev mode
    port: 5173
  },

  preview: {
    host: '0.0.0.0',   // ✅ required if using vite preview in container thi is good
    port: 4173
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
