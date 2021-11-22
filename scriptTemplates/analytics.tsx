import React from 'react'
import appConfig from '../config/appConfig'

const GoogleAnalyticsScripts: React.FC = () => {
  if (!appConfig.integrations.googleAnalytics.enabled) {
    return null
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${appConfig.integrations.googleAnalytics.code}`}></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function ga(){dataLayer.push(arguments);}
      
          ga('js', new Date());
          ga('config', '${appConfig.integrations.googleAnalytics.code}', {
            transport_type: 'beacon',
          });
        `,
        }}
      />
    </>
  )
}

const HotjarAnalyticsScript = () => {
  if (!appConfig.integrations.hotjar.enabled) {
    return null
  }

  return (
    <>
      {/* Hotjar Tracking Code for https://your-store-landing-website.vercel.app */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${appConfig.integrations.hotjar.code},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
        }}
      />
    </>
  )
}

export const AnalyticsScripts: React.FC = props => {
  return (
    <>
      <GoogleAnalyticsScripts />
      <HotjarAnalyticsScript />
    </>
  )
}
