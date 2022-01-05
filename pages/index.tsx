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
  CogIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DownloadIcon,
  ExternalLinkIcon,
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
import { HeartIcon } from '@heroicons/react/solid'
import CoreLink from '../components/core/CoreLink'

const FEATURES = [
  {
    label: 'Highly configurable (almost everything!)',
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
    demoUrl: appConfig.demo.website,
    githubUrl: appConfig.github.website,
  },
  {
    label: 'API',
    description: 'Handles backend-related job',
    demoUrl: appConfig.demo.api,
    githubUrl: appConfig.github.api,
  },
  {
    label: 'CMS',
    description: 'UI for admins to update',
    demoUrl: appConfig.demo.cms,
    githubUrl: appConfig.github.cms,
  },
  {
    label: 'Documentation',
    description: 'Extensive documentation for all 3 projects',
    demoUrl: appConfig.demo.doc,
    githubUrl: appConfig.github.doc,
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

  const openDemoWebsite = () => {
    window.open(appConfig.demo.website, '_blank')
    ga('event', 'cta-demo')
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
            label={'Checkout Demo'}
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            onClick={openDemoWebsite}
            icon={GlobeAltIcon}
            className="mr-4"
          />
          <CoreLink
            url={appConfig.github.org}
            isExternal
            onClick={() => {
              ga('event', 'cta-github')
            }}>
            <CoreImage
              url={SOCIAL_ICONS_SRC_MAP.GITHUB}
              alt={`${appConfig.global.app.name} source code on GitHub`}
              className="w-9 transition-all hover:scale-105"
            />
          </CoreLink>
        </div>
      </div>

      <div className="text-lg mt-4">
        <span className="text-primaryTextBold">Please note: </span>{' '}
        <span>The demo includes only dummy data. This is a basic setup.</span>
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="font-medium font-primary-medium text-xl md:text-2xl text-primaryTextBold">
          Projects included in this suite 🧳
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="border border-periwinkleGray rounded p-4 transition-all relative">
                <div className="text-primaryTextBold font-primary-medium font-medium">{project.label}</div>
                <div>{project.description}</div>

                <div className="absolute top-2 right-2 flex items-center">
                  <CoreLink url={project.githubUrl}>
                    <CoreImage
                      url={SOCIAL_ICONS_SRC_MAP.GITHUB}
                      alt={`${project.label} source code on GitHub`}
                      className="w-4 h-4 mr-2 cursor-pointer"
                    />
                  </CoreLink>
                  <CoreLink url={project.demoUrl} isExternal>
                    <ExternalLinkIcon className="w-4 h-4 cursor-pointer" />
                  </CoreLink>
                </div>
              </div>
            )
          })}
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
        <div className="font-medium font-primary-medium text-xl md:text-2xl text-primaryTextBold">Need help? 👋</div>
        <div className="mt-4">
          <div className="mb-4 md:mb-3 inline-flex items-start text-base md:text-lg">
            <span>You can also hire the author as a consultant to help set up your store.</span>
          </div>
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
