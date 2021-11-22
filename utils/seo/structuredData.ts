import appConfig from '../../config/appConfig'
import { APP_LOGO } from '../../constants/constants'

export const prepareWebpageStructuredData = ({ title, description, url }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: appConfig.global.app.name.toUpperCase(),
      url: appConfig.global.baseUrl,
      logo: {
        '@type': 'ImageObject',
        contentUrl: APP_LOGO.DEFAULT,
      },
    },
  }
}
