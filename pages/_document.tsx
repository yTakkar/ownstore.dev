import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import MetaTags from '../scriptTemplates/meta'
import { AnalyticsScripts } from '../scriptTemplates/analytics'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <AnalyticsScripts />
          <MetaTags />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
