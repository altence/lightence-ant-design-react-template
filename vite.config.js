// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr({
      include: '**/*.svg'
    })
  ],
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 10000,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
