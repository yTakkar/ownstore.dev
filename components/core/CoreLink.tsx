import React, { ReactNode, CSSProperties } from 'react'
import NextLink from 'next/link'

export interface ICoreLinkProps {
  url: string | null
  className?: string
  isExternal?: boolean
  style?: CSSProperties
  title?: string
  onClick?: (e: any) => void
  children: ReactNode
}

const CoreLink: React.FC<ICoreLinkProps> = props => {
  const { url, className, isExternal, style, title, onClick, children } = props

  const handleClick = e => {
    if (onClick) onClick(e)
  }

  if ((url && url.indexOf('http') === 0) || !url) {
    return (
      <a
        href={url || 'javascript:;'}
        className={className}
        target={isExternal ? '_blank' : '_parent'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        style={style}
        title={title}
        onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={url}
      className={className}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      style={style}
      title={title}
      onClick={handleClick}
      data-hover={typeof children === 'string' ? children : ''}>
      {children}
    </NextLink>
  )
}

export default CoreLink
