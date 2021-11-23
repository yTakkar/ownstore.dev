import React from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreButton, { CoreButtonSize, CoreButtonType } from '../components/core/CoreButton'
import { AdjustmentsIcon, GlobeAltIcon } from '@heroicons/react/outline'
import {
  BadgeCheckIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatIcon,
  CodeIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DownloadIcon,
  FingerPrintIcon,
  LightningBoltIcon,
  ShoppingBagIcon,
  StarIcon,
  SupportIcon,
  TrendingUpIcon,
} from '@heroicons/react/solid'

const FEATURES = [
  {
    label: 'Highly configurable (from section item to product attributes)',
    icon: AdjustmentsIcon,
  },
  {
    label: 'Easy-to-use CMS for admins',
    icon: CubeTransparentIcon,
  },
  {
    label: 'A separate Docs project to smoothen your knowledge navigation',
    icon: BookOpenIcon,
  },
  {
    label: 'Advanced SEO & PWA practices',
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
    label: 'Ultra-fast pages rendering (even for dynamic pages)',
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
    label: 'Tested end-to-end for almost a year',
    icon: BadgeCheckIcon,
  },
]

const PROJECTS = [
  {
    label: 'Website',
    description: 'User-facing UI project.',
  },
  {
    label: 'API',
    description: 'Communicates with DB and provides API endpoints.',
  },
  {
    label: 'CMS',
    description: 'UI for admins to update.',
  },
  {
    label: 'Documentation',
    description: 'Extensive documentation for all 3 projects.',
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
    label: 'We will continue to suppport you for lifetime. Consider us your own development team.',
    icon: SupportIcon,
  },
]

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  const scrollToInterested = () => {
    document.querySelector('#interested-section').scrollIntoView({
      behavior: 'smooth',
    })
  }

  const openDemoWebsite = () => {
    window.open(appConfig.global.demoWebsiteUrl, '_blank')
  }

  return (
    <div className="px-3">
      <div>
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">
            You need an online store for you business, but with complete ownership and no third-party or platform
            dependency. Just like your own codebase?
          </span>{' '}
          <span>We got you covered.</span>
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">What is {appConfig.global.app.name}?</span>{' '}
          <span>
            An end-to-end e-commerce solution that can be configured according to your business needs. To simply put,
            you will receive a complete configurable system (set of projects) to setup your own online store. And yes,
            lifetime support too :)
          </span>
        </div>
        <div className="text-center lg:text-left mt-4">
          <CoreButton
            label="Interested?"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-1"
            onClick={scrollToInterested}
          />
          <CoreButton
            label="Checkout Demo"
            icon={GlobeAltIcon}
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_SECONDARY}
            onClick={openDemoWebsite}
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">-- Few top-level features --</div>
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

      <div className="mt-8 lg:mt-12">
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">
          -- Projects included in suite --
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="border rounded p-4">
                <div className="text-primary font-primary-medium font-medium">{project.label}</div>
                <div>{project.description}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <div className="font-medium font-primary-medium text-lg">
          <span className="text-primaryTextBold">Pricing?</span>{' '}
          <span>You can own the entire suite for ${appConfig.order.priceInUSD}.</span>
        </div>
      </div>

      <div className="mt-8 lg:mt-12" id="interested-section">
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
        <div className="text-center lg:text-left mt-4">
          <CoreButton
            label="Drop us a message"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-1"
            url={`mailto:yourrstoreonline@gmail.com?subject=${appConfig.order.mail.subject}&body=${appConfig.order.mail.body}`}
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
