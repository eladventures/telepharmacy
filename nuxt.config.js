// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  nitro: {
    preset: 'firebase',
  },
  srcDir: './src',
});
