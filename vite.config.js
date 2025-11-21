import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'game'),
  base: '/space/', // GitHub Pages repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
