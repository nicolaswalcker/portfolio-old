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
          @import "@/assets/fonts/switzer/_switzer.scss";
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
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: './public/favicon.ico',
        },
      ],
      meta: [
        {
          name: 'keywords',
          content:
            'nuxt, vue, typescript, nicolas, walcker, nicolas walcker, web, sites, desenvolvimento, frontend, portfólio, nicolaswalcker',
        },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
});
