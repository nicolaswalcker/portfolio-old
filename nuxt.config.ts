// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_global.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_reset.scss";
          @import "@/assets/scss/_breakpoints.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=switzer@600,800,900,100,700,400,200,300,500&display=swap',
        },
      ],
    },
  },
});
