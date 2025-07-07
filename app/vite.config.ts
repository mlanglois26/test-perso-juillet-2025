import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(env.VITE_PORT),
      host: true,
      watch: {
        usePolling: true,
      },
    },
    root: '.',
    css: {
      postcss: './postcss.config.js',
    },
  };
});
