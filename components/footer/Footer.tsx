import React from 'react'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'
import { SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import appConfig from '../../config/appConfig'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = props => {
  const links = [
    {
      url: 'https://twitter.com/shtakkar',
      isExternal: true,
      label: 'Twitter',
    },
    {
      url: 'https://github.com/yTakkar',
      isExternal: true,
      label: 'GitHub',
    },
    {
      url: 'https://www.linkedin.com/in/faiyaz-s-413450118/',
      isExternal: true,
      label: 'LinkedIn',
    },
    {
      url: 'mailto:www.shtakkar@gmail.com',
      isExternal: true,
      label: 'Mail',
    },
  ]

  return (
    <footer className="bg-aliceBlue mt-10 border-t border-periwinkleGray">
      <div className="flex flex-col items-center py-24">
        <CoreImage
          url={'https://pbs.twimg.com/profile_images/1326480208413687810/AlRRkKBG_400x400.jpg'}
          alt="Author"
          className="w-20 rounded-full"
        />
        <div className="mt-2 font-medium font-primary-medium text-primaryTextBold">Faiyaz (Hire me!?)</div>
        <div className="mt-1">
          {links.map((link, index) => (
            <CoreLink
              key={index}
              url={link.url}
              isExternal={link.isExternal}
              className="text-sm mx-1 border-dashed border-b border-funBlue text-funBlue">
              {link.label}
            </CoreLink>
          ))}
        </div>
      </div>

      <div className="flex justify-end pb-10 mr-6">
        {appConfig.company.socialLinks.map((socialLink, index) => {
          const socialIconSrc = SOCIAL_ICONS_SRC_MAP[socialLink.type] || SOCIAL_ICONS_SRC_MAP.GLOBE

          return (
            <CoreLink
              key={index}
              url={socialLink.url}
              isExternal={socialLink.isExternal}
              className="w-6 mx-2"
              title={`${socialLink.name}`}>
              <CoreImage url={socialIconSrc} alt={socialLink.name} />
            </CoreLink>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
