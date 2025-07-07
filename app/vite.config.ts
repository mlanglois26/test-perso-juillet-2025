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



// /// <reference types="node" />
// /// <reference types="vite/client" />

// import { defineConfig } from 'vite';
// import dotenv from 'dotenv';
// dotenv.config({ path: '.env.example' });

// export default defineConfig({
//   root: '.', // pour partir de index.html
//   css: {
//     postcss: './postcss.config.js',
//   },
//   server: {
//     port: parseInt(import.meta.env.VITE_PORT), // les ref en haut pour pas avoir d erreur typescript
//     host: true, // pour Docker
//     watch: {
//       usePolling: true,
//     },
//   },
// });
