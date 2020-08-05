import colors from 'vuetify/es5/util/colors'
import minifyTheme from 'minify-css-string'

export default {
  mode: 'universal',
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'zh-cmn-Hans'
    },
    title: "归云的个人网站",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {hid: 'keywords', name: 'description', content: "归云的博客,孟源运的博客,vue,java,linux,博客,blog"},
      {hid: 'description', content: "孟源运的个人博客,主要作用于平时归纳总结来使用"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#fff'},
  css: [],
  plugins: [
    '@/plugins/highlight',
    '@/plugins/vuetify-theme-cache.js',
    {src: '~plugins/ga.js', mode: 'client'},
    { src: '~plugins/baidu.js', ssr: false }
  ],
  components: false,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  env: {
    baseUrl: 'https://api.guiyunweb.com:8866'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  axios: {},

  content: {},
  vuetify: {
    theme: {
      dark: true,
      options: {
        minifyTheme,
        themeCache: {
          get: key => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value),
        }
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    extractCSS: true,
    optimizeCSS: true,
    publicPath: 'https://cdn.guiun.com:10080'
  }
}
