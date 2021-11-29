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
  StarIcon,
  SupportIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline'
import { SOCIAL_ICONS_SRC_MAP } from '../constants/constants'
import CoreLink from '../components/core/CoreLink'

const FEATURES = [
  {
    label: 'Highly configurable (almost every data point)',
    icon: AdjustmentsIcon,
  },
  {
    label: 'Easy-to-use CMS for admins',
    icon: CubeTransparentIcon,
  },
  {
    label: 'Extensive documentation for almost everything',
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
    label: 'Secure user login and data management',
    icon: FingerPrintIcon,
  },
  {
    label: 'Ultra-fast page rendering (even for dynamic pages)',
    icon: LightningBoltIcon,
  },
  {
    label: 'Smooth ordering and payment experience for users',
    icon: ShoppingBagIcon,
  },
  {
    label: 'UX & DX at the core',
    icon: CursorClickIcon,
  },
  {
    label: 'Industry-best engineering practices from globally recognized organizations',
    icon: CodeIcon,
  },
  {
    label: 'Cost-cutting strategies while maintaining high performance',
    icon: CurrencyDollarIcon,
  },
  {
    label: 'End-to-end tested for almost a year',
    icon: BadgeCheckIcon,
  },
  {
    label: 'Save almost a year of work',
    icon: ClockIcon,
  },
]

const PROJECTS = [
  {
    label: 'Website',
    description: 'User-facing web application',
  },
  {
    label: 'API',
    description: 'Communicates with DB and provides API endpoints',
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
    label: 'The first step is to connect. Long-term connection is all we need :)',
    icon: ChatIcon,
  },
  {
    label: 'Once payment is processed, the suite will be shared with you.',
    icon: BriefcaseIcon,
  },
  {
    label: 'We will continue to support you for lifetime with any queries. Consider us your engineering team.',
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

  const openMail = () => {
    window.open(`mailto:${appConfig.global.app.emailAddress}?subject=${appConfig.order.contact.subject}`, '_blank')
  }

  return (
    <div className="px-3">
      <div>
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">
            You need an online store for your business, but with complete ownership and no third-party or platform
            dependency, just like your own codebase?
          </span>{' '}
          <span>We got you covered.</span>
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">What is {appConfig.global.app.name}?</span>{' '}
          <span>
            An end-to-end e-commerce solution that can be configured according to your business needs. To simply put,
            you will receive a completely configurable system (set of projects) to set up your online store.
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
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">-- Few top-level benefits --</div>
        <div className="mt-3 grid">
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
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">
          -- Projects included in this suite --
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="border rounded p-4 transition-all hover:shadow-md">
                <div className="text-primaryTextBold font-primary-medium font-medium">{project.label}</div>
                <div>{project.description}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="font-medium font-primary-medium text-lg">
          <span className="text-primaryTextBold">Pricing?</span>{' '}
          <span>
            You can own the entire suite for ${appConfig.order.priceInUSD.sale} (
            <span className="line-through">${appConfig.order.priceInUSD.retail}</span>).
          </span>
        </div>
      </div>

      <div className="mt-10 lg:mt-12" id="interested-section">
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">
          -- Over to you. Are you interested? --
        </div>
        <div className="mt-3 grid">
          {STEPS.map((step, index) => {
            const Icon = step.icon || StarIcon

            return (
              <div key={index} className="mb-4 md:mb-3 inline-flex items-start md:items-center text-base md:text-lg">
                <Icon className="min-w-6 min-h-6 w-6 h-6 mr-2 text-primaryTextBold" />
                <span>{step.label}</span>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center lg:justify-start items-center mt-4">
          <CoreButton
            label="Drop us a message"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-1"
            icon={MailOpenIcon}
            onClick={openMail}
          />
          <CoreLink url={`https://wa.me/+918104570640?text=${appConfig.order.contact.subject}`} isExternal>
            <CoreImage url={SOCIAL_ICONS_SRC_MAP.WHATSAPP} alt="WhatsApp" className="w-7 ml-3 md:ml-3" />
          </CoreLink>
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
