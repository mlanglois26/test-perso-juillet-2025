// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     host: true
//   }
// });

// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // racine = dossier courant (où est index.html)
  server: {
    port: 5173,
    host: true, // nécessaire pour Docker
  },
});
