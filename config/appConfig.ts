const name = 'OwnStore'

const appConfig = {
  isDev: process.env.OWN_STORE_WEB_ENV?.includes('local'),
  env: process.env.OWN_STORE_WEB_ENV,
  global: {
    app: {
      name: name,
      emailAddress: 'ownstoreonlinee@gmail.com',
    },
    domain: process.env.OWN_STORE_WEB_DOMAIN,
    baseUrl: process.env.OWN_STORE_WEB_BASE_URL,
    twitterProfile: 'https://twitter.com/ownStore_',
  },
  demo: {
    website: 'https://own-store-demo.vercel.app/',
    api: 'https://your-store-api.herokuapp.com/documentation',
    cms: 'https://own-store-demo-cms.vercel.app/',
    doc: 'https://own-store-doc.vercel.app/',
  },
  github: {
    org: 'https://github.com/OwnStoreOrg',
    website: 'https://github.com/OwnStoreOrg/ownstore-website',
    api: 'https://github.com/OwnStoreOrg/ownstore-api',
    cms: 'https://github.com/OwnStoreOrg/ownstore-cms',
    doc: 'https://github.com/OwnStoreOrg/ownstore-doc',
  },
  author: {
    portfolio: 'https://faiyaztakkar.dev',
  },
  seo: {
    facebook: {
      pageId: process.env.OWN_STORE_WEB_SEO_FACEBOOK_PAGE_ID,
    },
    twitter: {
      username: process.env.OWN_STORE_WEB_SEO_TWITTER_USERNAME,
    },
  },
  company: {},
  integrations: {
    googleAnalytics: {
      enabled: process.env.OWN_STORE_WEB_INTEGRATION_GOOGLE_ANALYTICS_ENABLED === 'true',
      code: process.env.OWN_STORE_WEB_INTEGRATION_GOOGLE_ANALYTICS_CODE,
    },
    hotjar: {
      enabled: process.env.OWN_STORE_WEB_INTEGRATION_HOTJAR_ANALYTICS_ENABLED === 'true',
      code: process.env.OWN_STORE_WEB_INTEGRATION_HOTJAR_ANALYTICS_CODE,
    },
  },
}

export default appConfig
