const appConfig = {
  isDev: process.env.YOUR_STORE_LANDING_WEB_ENV?.includes('local'),
  env: process.env.YOUR_STORE_LANDING_WEB_ENV,
  global: {
    app: {
      name: 'Your Store',
    },
    domain: process.env.YOUR_STORE_LANDING_WEB_DOMAIN,
    baseUrl: process.env.YOUR_STORE_LANDING_WEB_BASE_URL,
  },
}

export default appConfig
