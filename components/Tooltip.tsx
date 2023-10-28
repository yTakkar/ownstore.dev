import React, { PropsWithChildren } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import 'tippy.js/dist/border.css' // optional
import 'tippy.js/dist/svg-arrow.css' // optional
import 'tippy.js/dist/backdrop.css' // optional

interface ITooltipProps extends PropsWithChildren {
  content: React.ReactNode
}

const Tooltip: React.FC<ITooltipProps> = props => {
  const { content, children } = props

  if (!content) {
    return <>{children}</>
  }

  return (
    <Tippy content={content} maxWidth={500}>
      {children as any}
    </Tippy>
  )
}

export default Tooltip
