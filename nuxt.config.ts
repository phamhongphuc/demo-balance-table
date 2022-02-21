import { defineNuxtConfig } from 'nuxt3';
import inject from '@rollup/plugin-inject';
import Inspect from 'vite-plugin-inspect';

export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    } as any,
  },
  vite: {
    optimizeDeps: {
      include: ['buffer'],
    },
    define: {
      global: {},
      'process.env.NODE_DEBUG': JSON.stringify(''),
    },
    plugins: [
      inject({
        Buffer: ['buffer', 'Buffer'],
      }),
      Inspect(),
    ],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
