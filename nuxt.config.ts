export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "КСИ ФИЦ",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        {
          name: "description",
          content: "Сайт Кафедры Системных Исследований",
        },
      ],
    },
  },
  vue: {
    propsDestructure: true,
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
})
