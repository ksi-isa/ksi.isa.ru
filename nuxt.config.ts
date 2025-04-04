export default defineNuxtConfig({
  telemetry: false,

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
          content:
            process.env.npm_package_description ||
            "Сайт Кафедры Системных Исследований",
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
        //   content: "https://ksi.papertext.ru/icon.png",
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
    },
  },

  // devtools: { enabled: true },

  typescript:
    process.env.NODE_ENV == "development"
      ? {
          typeCheck: true,
          strict: true,
        }
      : {},

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxt/icon",
  ],

  site: {
    url: "https://ksi.isa.ru",
  },

  compatibilityDate: "2025-04-04",
})
