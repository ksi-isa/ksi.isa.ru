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
        // {
        //   property: "og:title",
        //   content: "Сайт Кафедры Системных Исследований",
        // },
        // {
        //   property: "og:type",
        //   content: "website",
        // },
        // {
        //   property: "og:url",
        //   content: "https://ksi.papertext.ru/",
        // },
        // {
        //   property: "og:image",
        //   content: "https://ksi.papertext.ru/logo.png",
        // },
        {
          name: "yandex-verification",
          content: "7598be5433b72ed6",
        },
        {
          name: "google-site-verification",
          content: "MWKREPQ4UtbBUjWBE4xyi8DAHP7hgYBC_CbObRGfsaI",
        },
      ],

      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  vue: {
    propsDestructure: true,
  },
  devtools: { enabled: true },
  typescript:
    process.env.NODE_ENV == "development"
      ? {
          typeCheck: true,
          strict: true,
        }
      : {},
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "nuxt-icon",
  ],
  site: {
    url: "https://ksi.isa.ru",
  },
})
