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
  order: {
    priceInUSD: {
      retail: 1091,
      sale: 399,
    },
    contact: {
      subject: `Interested for ${name}.`,
    },
  },
  seo: {
    facebook: {
      pageId: process.env.OWN_STORE_WEB_SEO_FACEBOOK_PAGE_ID,
    },
    twitter: {
      username: process.env.OWN_STORE_WEB_SEO_TWITTER_USERNAME,
    },
  },
  company: {
    socialLinks: [
      { type: 'TWITTER', url: 'https://twitter.com/ownStore_', name: 'Twitter', isExternal: true },
      { type: 'FACEBOOK', url: 'https://www.facebook.com/ownStoreFB', name: 'Facebook', isExternal: true },
      { type: 'INSTAGRAM', url: 'https://www.instagram.com/ownStore__/', name: 'Instagram', isExternal: true },
      // { type: 'WHATSAPP', url: 'https://wa.me/+918104570640', name: 'WhatsApp', isExternal: true },
      // { type: 'MAIL', url: 'mailto:ownstoreonlinee@gmail.com', name: 'Mail', isExternal: true },
    ],
  },
  footer: {
    copyrightText: `&copy; ${new Date().getFullYear()} ${name}. All rights reserved`,
  },
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
