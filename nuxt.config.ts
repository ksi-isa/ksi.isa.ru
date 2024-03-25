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
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "nuxt-icon",
  ],
})
