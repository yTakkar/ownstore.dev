import React from 'react'

interface IProps {}

const AppIcons: React.FC = () => {
  return (
    <>
      <link rel="apple-touch-icon" sizes="57x57" href={'/images/generated-logos/apple-icon-57x57.png'} />
      <link rel="apple-touch-icon" sizes="60x60" href={'/images/generated-logos/apple-icon-60x60.png'} />
      <link rel="apple-touch-icon" sizes="72x72" href={'/images/generated-logos/apple-icon-72x72.png'} />
      <link rel="apple-touch-icon" sizes="76x76" href={'/images/generated-logos/apple-icon-76x76.png'} />
      <link rel="apple-touch-icon" sizes="114x114" href={'/images/generated-logos/apple-icon-114x114.png'} />
      <link rel="apple-touch-icon" sizes="120x120" href={'/images/generated-logos/apple-icon-120x120.png'} />
      <link rel="apple-touch-icon" sizes="144x144" href={'/images/generated-logos/apple-icon-144x144.png'} />
      <link rel="apple-touch-icon" sizes="152x152" href={'/images/generated-logos/apple-icon-152x152.png'} />
      <link rel="apple-touch-icon" sizes="180x180" href={'/images/generated-logos/apple-icon-180x180.png'} />
      <link rel="icon" type="image/png" sizes="192x192" href={'/images/generated-logos/android-icon-192x192.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={'/images/generated-logos/favicon-32x32.png'} />
      <link rel="icon" type="image/png" sizes="96x96" href={'/images/generated-logos/favicon-96x96.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={'/images/generated-logos/favicon-16x16.png'} />
      <meta name="msapplication-TileImage" content={'/images/generated-logos/ms-icon-144x144.png'} />
    </>
  )
}

const MetaTags: React.FC<IProps> = props => (
  <>
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <AppIcons />
  </>
)

export default MetaTags
