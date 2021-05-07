import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        // content of manifest
      },
      workbox: {
        // workbox options for generateSW
      }
    }),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'Project Webcirque',
        injectScript: '<script src="./inject.js"></script>',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
