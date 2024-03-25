export default defineNuxtConfig({
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
