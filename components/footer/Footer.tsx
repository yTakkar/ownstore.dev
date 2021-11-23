import React from 'react'
import appConfig from '../../config/appConfig'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'
import { SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import EscapeHTML from '../EscapeHTML'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = props => {
  return (
    <footer>
      <div className="bg-white h-8 md:h-10"></div>

      <div className="bg-whisper px-4 py-6 lg:py-8 shadow-inner">
        <div className="container mx-auto">
          <div className="lg:flex justify-between items-start">
            <div className="flex flex-col">
              <div>
                <div className="text-mineShaft font-medium font-primary-medium mb-1">{appConfig.global.app.name}</div>
                <div className="text-sm">
                  <EscapeHTML html={appConfig.footer.copyrightText} element="span" />
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="text-mineShaft font-medium font-primary-medium mb-2">Stay in touch</div>
              <div className="flex">
                {appConfig.company.socialLinks.map((socialLink, index) => {
                  const socialIconSrc = SOCIAL_ICONS_SRC_MAP[socialLink.type] || SOCIAL_ICONS_SRC_MAP.GLOBE

                  return (
                    <CoreLink
                      key={index}
                      url={socialLink.url}
                      isExternal={socialLink.isExternal}
                      className="w-6 mr-5 transform transition-transform hover:scale-110"
                      title={`${socialLink.name}`}>
                      <CoreImage url={socialIconSrc} alt={socialLink.name} />
                    </CoreLink>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
