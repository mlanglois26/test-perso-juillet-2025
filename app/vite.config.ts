import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // pour partir de index.html
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 5173,
    host: true, // pour Docker
    watch: {
      usePolling: true,
    },
  },
});
