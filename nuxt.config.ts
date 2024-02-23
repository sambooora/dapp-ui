// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  ui: {
    global: true,
    icons: ['heroicons'],
  },
  imports: {
    dirs: ['composables', 'stores', 'utils'],
    presets: [
      {
        from: 'zod',
        imports: [
          'z',
          {
            name: 'z',
            as: 'zType',
            type: true,
          },
        ],
      },
      {
        from: '#ui/types',
        imports: ['FormSubmitEvent'],
        type: true,
      },
    ],
  },
  runtimeConfig: {
    public: {
      app: {
        name: 'DApp',
        description: 'App for new starter Dapp',
        twitterHandle: '@sambooora',
        appVersion: process.env.APP_VER || '0.0.0',
      },
    },  },
})
