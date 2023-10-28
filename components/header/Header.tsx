import React from 'react'
import { getHomePageUrl } from '../../utils/home'
import { APP_LOGO, SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import appConfig from '../../config/appConfig'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div>
      <nav className="top-nav lg:flex fixed top-0 left-0 right-0 bg-white border-b border-periwinkleGray px-3 lg:px-4 py-3 lg:py-4 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center w-9/12 md:w-10/12 lg:w-auto">
              <CoreLink url={getHomePageUrl()} className="mr-3">
                <CoreImage url={APP_LOGO.DEFAULT} alt="App Logo" className="h-8" />
              </CoreLink>
              <CoreLink url={getHomePageUrl()} className="font-semibold text-primaryTextBold text-lg">
                {appConfig.global.app.name}
              </CoreLink>
            </div>

            <div className="flex justify-between items-center">
              <CoreLink
                url={appConfig.author.portfolio}
                className="flex font-semibold text-sm items-center group relative"
                onClick={() => {
                  ga('event', 'icon-portfolio')
                }}
                isExternal>
                <CoreImage
                  url={'/images/author.jpeg'}
                  alt={`Author portfolio`}
                  className="w-6 mr-1 transition-all hover:scale-105 rounded-full"
                />
              </CoreLink>

              <CoreLink
                url={appConfig.github.org}
                className="flex font-semibold text-sm items-center group relative ml-4"
                onClick={() => {
                  ga('event', 'icon-github')
                }}
                isExternal>
                <CoreImage
                  url={SOCIAL_ICONS_SRC_MAP.GITHUB}
                  alt={`${appConfig.global.app.name} source code on GitHub`}
                  className="w-6 mr-1 transition-all hover:scale-105"
                />
              </CoreLink>

              <CoreLink
                url={appConfig.global.twitterProfile}
                className="flex font-semibold text-sm items-center group relative ml-4"
                onClick={() => {
                  ga('event', 'icon-twitter')
                }}
                isExternal>
                <CoreImage
                  url={SOCIAL_ICONS_SRC_MAP.TWITTER}
                  alt={`${appConfig.global.app.name} on Twitter`}
                  className="w-6 mr-1 transition-all hover:scale-105"
                />
              </CoreLink>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </div>
  )
}

export default Header
