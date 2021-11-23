import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { getHomePageUrl } from '../home'

// http://localhost:3004/
export const prepareHomePageSeo = (): IAppSeoProps => {
  return {
    title: `Create your own online store - ${appConfig.global.app.name}`,
    description: `OwnStore is an end-to-end e-commerce solution that can be configured according to your business needs. To simply put,
    you will receive a completely configurable system (set of projects) to set up your own online store. And
    yes, lifetime support too.`,
    canonical: `${appConfig.global.baseUrl}${getHomePageUrl()}`,
    keywords: [
      'online store',
      'store',
      'own store',
      'configure store',
      'e-commerce project',
      'store code',
      'e-commerce source code',
    ],
  }
}
