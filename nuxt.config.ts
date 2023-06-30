// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    '~/views'
  ],
  css:[
    '~/node_modules/bootstrap/scss/bootstrap.scss'
  ]
})
