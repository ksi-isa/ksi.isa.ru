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
        { charset: "utf-8" },
        {
          name: "description",
          content: "Сайт Кафедры Системных Исследований",
        },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],

      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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