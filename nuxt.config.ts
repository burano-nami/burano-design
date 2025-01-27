export default defineNuxtConfig({
  ssr: false,

  nitro: {
    output: {
      publicDir: 'dist'
    }
  },

  // pages: false,

  app: {
    head: {
      title    : 'Burano Design',
      htmlAttrs: {
        lang: 'ja',
      },
      charset: 'utf-8',
      meta   : [
        { name: 'apple-mobile-web-app-title', content: 'Burano Design' },
        { name: 'description', content: 'ちいさな一歩を形にした、わたしのポートフォリオサイト'},//直す
        { name: 'application-name', content: 'Burano Design' },
        { name: 'theme-color', content: '#F09F43' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:site_name', content: 'Burano Design' },
        { property: 'og:description', content: 'ちいさな一歩を形にした、わたしのポートフォリオサイト' },//直す
        { property: 'og:url', content: 'https://・・・・・・.jp/' }, //URL決まったら設定
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Burano Design' },
        { property: 'og:image', content: 'https://・・・・・・/ogp.png' },//直す
        { property: 'twitter:card', content: 'https://・・・・・・・jp/ogp.png' },//直す
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        },        
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:wght@100..900&family=Noto+Sans+JP:wght@700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' },
        {
          rel  : 'apple-touch-icon',
          href : '/icon.png',
          sizes: '180x180',
        },
      ],
    },
  },

  css: [
    '@acab/reset.css',
    '~/assets/scss/base.scss',
  ],

  compatibilityDate: '2025-01-07',
})