/** @type {import('next').NextConfig} */

const path = require('path')

const appEnv = process.env.OWN_STORE_WEB_ENV

if (!appEnv) {
  console.error('OWN_STORE_WEB_ENV env variable is not set', process.env.OWN_STORE_WEB_ENV)
  process.exit(1)
}

const getAbsPath = dirPath => {
  const extendedPath = typeof dirPath === 'string' ? [dirPath] : dirPath
  return path.resolve(process.cwd(), ...extendedPath)
}

const { parsed: parsedEnvs } = require('dotenv').config({
  path: getAbsPath(`env/${appEnv}.env`),
})

const nextConfig = {
  env: {
    ...parsedEnvs,
    OWN_STORE_WEB_ENV: process.env.OWN_STORE_WEB_ENV,
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
