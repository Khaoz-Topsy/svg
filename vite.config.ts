import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      // { find: '@/', replacement: fileURLToPath(new URL('./src/', import.meta.url)) },
    ],
  },
});
