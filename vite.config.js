import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'game'),
  base: '/space/', // GitHub Pages repo name
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src')
    }
  },
  server: {
    fs: {
      allow: [resolve(__dirname, 'game'), resolve(__dirname, 'src')]
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
