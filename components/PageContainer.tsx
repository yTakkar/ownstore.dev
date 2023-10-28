import React, { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {}

const PageContainer: React.FC<IProps> = props => {
  return <div className="container mx-auto min-h-[68vh]">{props.children}</div>
}

export default PageContainer
