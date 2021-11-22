import React, { useContext, useEffect, useRef } from 'react'
import { getHomePageUrl } from '../../utils/home'
import { APP_LOGO } from '../../constants/constants'
import appConfig from '../../config/appConfig'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <div>
      <nav className="top-nav lg:flex fixed top-0 left-0 right-0 bg-white shadow-md px-3 lg:px-4 py-3 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center w-9/12 md:w-10/12 lg:w-auto">
              <CoreLink url={getHomePageUrl()} className="mr-4">
                <CoreImage url={APP_LOGO.DEFAULT} alt="App Logo" className="h-12" />
              </CoreLink>
              <CoreLink url={getHomePageUrl()} className="font-medium font-primary-medium text-primaryTextBold">
                {appConfig.global.app.name}
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
