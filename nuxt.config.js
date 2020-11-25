export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dirosa-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Style resources
  styleResources: {
    scss: [
      '~/assets/scss/main.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/vee-validate.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  server: {
    port: 6700
  },

  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    ADMINISTRATION_AREA_API: process.env.ADMINISTRATION_AREA_API,
    COURSE_AVAILABLE_TIME: process.env.COURSE_AVAILABLE_TIME,
    PARTICIPANT_REGISTRATION_URL: process.env.PARTICIPANT_REGISTRATION_URL,
    JOIN_URL: process.env.JOIN_URL,
    PROVINCE_URL: process.env.PROVINCE_URL,
    CITY_URL: process.env.CITY_URL,
    DISTRICT_URL: process.env.DISTRICT_URL,
    SUBDISTRICT_URL: process.env.SUBDISTRICT_URL,
  }
}
