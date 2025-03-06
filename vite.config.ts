import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('lucide-react') || id.includes('swiper')) return 'ui-vendor';
            if (id.includes('axios') || id.includes('jose')) return 'utils-vendor';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});