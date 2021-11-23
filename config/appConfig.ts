const name = 'YourStore'

const appConfig = {
  isDev: process.env.YOUR_STORE_LANDING_WEB_ENV?.includes('local'),
  env: process.env.YOUR_STORE_LANDING_WEB_ENV,
  global: {
    app: {
      name: name,
    },
    domain: process.env.YOUR_STORE_LANDING_WEB_DOMAIN,
    baseUrl: process.env.YOUR_STORE_LANDING_WEB_BASE_URL,
    demoWebsiteUrl: process.env.YOUR_STORE_LANDING_WEB_DEMO_WEBSITE_URL,
  },
  order: {
    priceInUSD: 699,
    mail: {
      subject: `Interested for ${name}.`,
      body: '',
    },
  },
  company: {
    socialLinks: [
      { type: 'TWITTER', url: 'https://twitter.com/yourrStore', name: 'Twitter', isExternal: true },
      { type: 'FACEBOOK', url: 'https://www.facebook.com/yourStoreFbPage', name: 'Facebook', isExternal: true },
      { type: 'INSTAGRAM', url: 'https://www.instagram.com/youurstore_', name: 'Instagram', isExternal: true },
      { type: 'WHATSAPP', url: 'https://wa.me/+918104570640', name: 'WhatsApp', isExternal: true },
      { type: 'MAIL', url: 'mailto:yourrstoreonline@gmail.com', name: 'Mail', isExternal: true },
    ],
  },
  footer: {
    copyrightText: `&copy; ${new Date().getFullYear()} YourStore. All rights reserved`,
  },
  integrations: {
    googleAnalytics: {
      enabled: process.env.YOUR_STORE_LANDING_WEB_INTEGRATION_GOOGLE_ANALYTICS_ENABLED === 'true',
      code: process.env.YOUR_STORE_LANDING_WEB_INTEGRATION_GOOGLE_ANALYTICS_CODE,
    },
    hotjar: {
      enabled: process.env.YOUR_STORE_LANDING_WEB_INTEGRATION_HOTJAR_ANALYTICS_ENABLED === 'true',
      code: process.env.YOUR_STORE_LANDING_WEB_INTEGRATION_HOTJAR_ANALYTICS_CODE,
    },
  },
}

export default appConfig
