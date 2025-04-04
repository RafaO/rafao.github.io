import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  base: '/project/',
  plugins: [
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
    NodeGlobalsPolyfillPlugin({
      buffer: true,
      process: true
    }),
    react(),
    mdx(),
  ],
  optimizeDeps: {
    include: ['buffer'],
    exclude: ['lucide-react', '@mdx-js/react'],
  },
  define: {
    'process.env': {},
    'global': {},
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  }
});