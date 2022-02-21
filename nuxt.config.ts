import { defineNuxtConfig } from 'nuxt3';

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
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
