import React from 'react'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = props => {
  const links = [
    {
      url: 'https://faiyaztakkar.dev',
      isExternal: true,
      label: 'Website',
    },
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
    // {
    //   url: 'mailto:www.shtakkar@gmail.com',
    //   isExternal: true,
    //   label: 'Mail',
    // },
  ]

  return (
    <footer className="bg-aliceBlue mt-10 border-t border-periwinkleGray">
      <div className="flex flex-col items-center py-24">
        <CoreImage url={'/images/author.jpeg'} alt="Faiyaz" className="w-20 rounded-full" />
        <div className="mt-2 font-bold text-primaryTextBold">Faiyaz</div>
        <div className="">{`- Let's connect! -`}</div>
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
    </footer>
  )
}

export default Footer
