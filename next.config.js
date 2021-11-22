/** @type {import('next').NextConfig} */

const { getAbsPath } = require('./scripts/fileSystem')

const appEnv = process.env.YOUR_STORE_LANDING_WEB_ENV

if (!appEnv) {
  console.error('YOUR_STORE_LANDING_WEB_ENV env variable is not set', process.env.HSCI_YOUR_STORE_LANDING_WEB_ENV)
  process.exit(1)
}

const { parsed: parsedEnvs } = require('dotenv').config({
  path: getAbsPath(`env/${appEnv}.env`),
})

const nextConfig = {
  env: {
    ...parsedEnvs,
    YOUR_STORE_CMS_ENV: process.env.YOUR_STORE_LANDING_WEB_ENV,
  },
  trailingSlash: false,
  basePath: '',
  poweredByHeader: false,
  optimizeFonts: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
