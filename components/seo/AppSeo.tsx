import React from 'react'
import Head from 'next/head'
import debug from 'debug'
import { prepareHomePageSeo } from '../../utils/seo/home'
import { APP_LOGO } from '../../constants/constants'
import appConfig from '../../config/appConfig'
import { prepareWebpageStructuredData } from '../../utils/seo/structuredData'

const log = debug('seo')

export interface IAppSeoProps {
  title: string
  description: string
  canonical: string
  keywords: string[]
  noIndex?: boolean
  noFollow?: boolean
  imageUrl?: string
  structuredData?: {}
}

const AppSeo: React.FC<IAppSeoProps> = props => {
  const {
    title: _title,
    description: _description,
    canonical,
    keywords,
    noFollow,
    noIndex,
    imageUrl: _imageUrl,
  } = props

  log('SEO', props)

  const defaultSeoData = prepareHomePageSeo()

  const title = _title || defaultSeoData.title
  const description = _description || defaultSeoData.description

  const imageUrl = _imageUrl || APP_LOGO.DEFAULT

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="meta-title" name="title" content={title} />

      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={(keywords || []).join(',')} />
      <meta
        key="robots"
        name="robots"
        content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`}
      />
      <meta
        key="googlebot"
        name="googlebot"
        content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`}
      />
      <link key="canonical" rel="canonical" href={canonical} />

      {/* OpenGraph */}
      <meta property="og:site_name" content={appConfig.global.app.name} />
      <meta property="og:type" key="og:type" content="website" />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:url" property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:image" content={imageUrl}></meta>

      {/* Structured data */}
      <script
        key="webPage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            prepareWebpageStructuredData({
              title: title,
              description: description,
              url: canonical,
            })
          ),
        }}></script>
    </Head>
  )
}

export default AppSeo
