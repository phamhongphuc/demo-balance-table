import { defineNuxtConfig } from 'nuxt3';
import inject from '@rollup/plugin-inject';

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
    ],
    resolve: {
      alias: {
        http: 'http-browserify',
        https: 'https-browserify',
        stream: 'stream-browserify',
        util: 'util',
        zlib: 'browserify-zlib',
      },
    },
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
