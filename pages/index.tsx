import React from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreButton, { CoreButtonSize, CoreButtonType } from '../components/core/CoreButton'
import { AdjustmentsIcon, GlobeAltIcon } from '@heroicons/react/outline'
import {
  BookOpenIcon,
  CodeIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DownloadIcon,
  FingerPrintIcon,
  LightningBoltIcon,
  ShoppingBagIcon,
  StarIcon,
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
    label: 'Industry-best engineering practices from globally recognized teams',
    icon: CodeIcon,
  },
  {
    label: 'Cost-cutting strategies while maintaining high performance',
    icon: CurrencyDollarIcon,
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
    description: 'UI for admins to update almost every entity.',
  },
  {
    label: 'Documentation',
    description: 'Extensive documentation for all 3 projects.',
  },
]

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  return (
    <div className="px-3">
      <div>
        {/* <CoreImage url={'/images/app-preview.gif'} alt="App preview" className="w-[300px] h-[500px] object-cover" /> */}
      </div>

      {/* <video autoPlay>
        <source src="/images/app-preview.mp4" type="video/mp4" />
        <source src="/images/app-preview.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}

      <div>
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">
            You need an online store for you business, but with complete ownership and no third-party or platform
            dependency. Just like your own codebase?
          </span>{' '}
          <span>We got you covered.</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="font-medium font-primary-medium text-lg ">
          <span className="text-primaryTextBold">What is {appConfig.global.app.name}?</span>{' '}
          <span>
            An end-to-end e-commerce solution that can be configured according to your business needs. To simply put,
            you will receive a complete configurable system (set of projects) to setup your own online store. And yes,
            lifetime support :)
          </span>
        </div>
        <div className="text-center md:text-left mt-4">
          <CoreButton
            label="Interested?"
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_PRIMARY}
            className="mr-1"
          />
          <CoreButton
            label="Checkout Demo"
            icon={GlobeAltIcon}
            size={CoreButtonSize.LARGE}
            type={CoreButtonType.SOLID_SECONDARY}
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-medium font-primary-medium text-xl text-primaryTextBold">-- Few Top-Level Features --</div>
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

      <div className="mt-8">
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
