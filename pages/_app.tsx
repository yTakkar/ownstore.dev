import React, { useEffect, useState } from 'react'
import 'styles/styles.scss'
import { NextPage } from 'next'
import { Router, useRouter } from 'next/router'
import PageContainer from '../components/PageContainer'
import classNames from 'classnames'
import AppSeo, { IAppSeoProps } from '../components/seo/AppSeo'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

declare let window: any

export interface IPageLayoutData {}

export interface IGlobalLayoutProps {
  pageData: any
  layoutData: IPageLayoutData
  seo: IAppSeoProps
}

interface IProps {
  Component: NextPage<IGlobalLayoutProps>
  pageProps: IGlobalLayoutProps
}

const MyApp: NextPage<IProps> = props => {
  const { Component, pageProps } = props
  const { layoutData, seo } = pageProps || {}

  const router = useRouter()

  return (
    <div>
      <AppSeo {...seo} />

      <Header />

      <main id={classNames('pageMain')} className="pb-10 mt-2 lg:mt-4">
        <PageContainer>
          <Component {...pageProps} key={router.route} />
        </PageContainer>
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
