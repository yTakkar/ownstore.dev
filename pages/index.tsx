import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreButton, { CoreButtonSize, CoreButtonType } from '../components/core/CoreButton'
import {
  AdjustmentsIcon,
  BadgeCheckIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatIcon,
  ClockIcon,
  CodeIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DownloadIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailOpenIcon,
  ShoppingBagIcon,
  SparklesIcon,
  StarIcon,
  SupportIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'
import { APP_LOGO, SOCIAL_ICONS_SRC_MAP } from '../constants/constants'
import CoreLink from '../components/core/CoreLink'
import { HeartIcon } from '@heroicons/react/solid'

const FEATURES = [
  {
    label: 'Highly configurable (almost every data point)',
    icon: AdjustmentsIcon,
  },
  {
    label: 'Save almost a year of work.',
    icon: ClockIcon,
  },
  {
    label: 'Easy-to-use CMS for admins.',
    icon: CubeTransparentIcon,
  },
  {
    label: 'Extensive documentation for almost everything.',
    icon: BookOpenIcon,
  },
  {
    label: 'Advanced SEO & PWA practices.',
    icon: DownloadIcon,
  },
  {
    label: 'Advanced analytics for product and engineering folks :)',
    icon: TrendingUpIcon,
  },
  {
    label: 'Secure user login and data management.',
    icon: FingerPrintIcon,
  },
  {
    label: 'Ultra-fast page rendering (even for dynamic pages)',
    icon: LightningBoltIcon,
  },
  {
    label: 'Smooth ordering and payment experience for users.',
    icon: ShoppingBagIcon,
  },
  {
    label: 'UX & DX at the core.',
    icon: CursorClickIcon,
  },
  {
    label: 'Industry-best engineering practices from globally recognized organizations.',
    icon: CodeIcon,
  },
  {
    label: 'Cost-cutting strategies while maintaining high performance.',
    icon: CurrencyDollarIcon,
  },
  {
    label: 'End-to-end tested for almost a year.',
    icon: BadgeCheckIcon,
  },
]

const PROJECTS = [
  {
    label: 'Website',
    description: 'User-facing web application',
  },
  {
    label: 'API',
    description: 'Handles backend-related job',
  },
  {
    label: 'CMS',
    description: 'UI for admins to update',
  },
  {
    label: 'Documentation',
    description: 'Extensive documentation for all 3 projects',
  },
]

const STEPS = [
  {
    label: 'Once payment is processed, the suite will be shared with you.',
    icon: BriefcaseIcon,
  },
  {
    label: `With detailed docs, your store will be up and running instantly.`,
    icon: SparklesIcon,
  },
  {
    label: `We're here to help you with any queries. For lifetime.`,
    icon: SupportIcon,
  },
]

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia(`(max-width: 369px)`).matches)
  }, [])

  const scrollToInterested = () => {
    document.querySelector('#interested-section').scrollIntoView({
      behavior: 'smooth',
    })
  }

  const openDemoWebsite = () => {
    window.open(appConfig.global.demoWebsiteUrl, '_blank')
  }

  const onCTAClick = () => {
    window.open(appConfig.global.gumroadUrl, '_blank')
  }

  return (
    <div className="px-3">
      <div>
        <div className="text-lg ">
          <span className="text-primaryTextBold">
            Do you need an online store for your business, but with complete ownership and no third-party or platform
            dependency, just like your own codebase?
          </span>{' '}
          <span>We got you covered.</span>
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="text-lg ">
          <span className="text-primaryTextBold">What is {appConfig.global.app.name}?</span>{' '}
          <span>
            An end-to-end e-commerce solution that can be configured according to your business needs. To simply put,
            you will receive a set of configurable projects to set up your online store.
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-start mt-4">
          <CoreButton
            label="Interested?"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-2"
            onClick={scrollToInterested}
          />
          <CoreButton
            label={isMobile ? 'Demo' : 'Checkout Demo'}
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_SECONDARY}
            onClick={openDemoWebsite}
            icon={GlobeAltIcon}
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="font-medium font-primary-medium text-xl md:text-2xl text-primaryTextBold">
          Few top-level benefits 🚀
        </div>
        <div className="mt-4 grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon || StarIcon

            return (
              <div key={index} className="mb-4 md:mb-3 inline-flex items-start md:items-center text-base md:text-lg">
                <Icon className="min-w-6 min-h-6 w-6 h-6 mr-2 text-primaryTextBold" />
                <span>{feature.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="font-medium font-primary-medium text-xl md:text-2xl text-primaryTextBold">
          Projects included in this suite 🧳
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="border border-periwinkleGray rounded p-4 transition-all">
                <div className="text-primaryTextBold font-primary-medium font-medium">{project.label}</div>
                <div>{project.description}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 lg:mt-12 flex justify-center">
        <div className="bg-aliceBlue border border-periwinkleGray px-6 py-6 rounded-lg w-full lg:w-8/12 flex flex-col items-center">
          <CoreImage
            url={APP_LOGO.DEFAULT}
            alt={appConfig.global.app.name}
            className="w-24 border border-periwinkleGray rounded-full shadow"
          />

          <div className="text-center mt-4">
            <div>This package includes the entire suite.</div>
            <div className="mt-1">
              <span className="font-medium font-primary-medium text-primaryTextBold">
                ${appConfig.order.priceInUSD.sale}{' '}
              </span>
              <span className="line-through">(${appConfig.order.priceInUSD.retail})</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-12" id="interested-section">
        <div className="font-medium font-primary-medium text-xl md:text-2xl text-primaryTextBold">
          Over to you. Are you interested? 👋
        </div>
        <div className="mt-4 grid">
          {STEPS.map((step, index) => {
            const Icon = step.icon || StarIcon

            return (
              <div key={index} className="mb-4 md:mb-3 inline-flex items-start text-base md:text-lg">
                <Icon className="min-w-6 min-h-6 w-6 h-6 mr-2 text-primaryTextBold" />
                <span>{step.label}</span>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center lg:justify-start items-center mt-4">
          <CoreButton
            label="Yes, I'm interested!"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-1"
            icon={HeartIcon}
            onClick={onCTAClick}
          />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareHomePageSeo(),
      layoutData: {},
    },
  }
}

export default Home
