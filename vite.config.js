import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
  ],
  optimizeDeps: {
    exclude: ["@esbuild-plugins/node-globals-polyfill"],
  },
});
