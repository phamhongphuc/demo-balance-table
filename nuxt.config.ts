import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  ssr: false,
  vite: false,
});
