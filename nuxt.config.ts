// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_breakpoints.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_global.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_reset.scss";
          @import "@/assets/scss/_transitions.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=switzer@600,800,900,100,700,400,200,300,500&display=swap',
          prefetch: 'true',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/public/favicon.ico',
        },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
});
