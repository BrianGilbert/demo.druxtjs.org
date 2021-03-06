import components from './components'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'demo.druxtjs.org',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', { id: 'UA-172677199-2' }],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'druxt'
  ],

  // Druxt Configuration
  druxt: {
    baseUrl: process.env.BASE_URL,
    breadcrumb: {
      component: 'b-breadcrumb',
      home: false,
    },
    menu: {
      jsonApiMenuItems: true,
    }
  },

  // Proxy Configuration
  proxy: {
    '/sites/default/files': process.env.BASE_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
