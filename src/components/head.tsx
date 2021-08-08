import androidChrome192x192 from '../../images/favicon/android-chrome-192x192.png'
import androidChrome384x384 from '../../images/favicon/android-chrome-384x384.png'
import appleTouchIcon from '../../images/favicon/apple-touch-icon.png'
import favicon16x16 from '../../images/favicon/favicon-16x16.png'
import favicon32x32 from '../../images/favicon/favicon-32x32.png'
import favicon from '../../images/favicon/favicon.ico'
import msTile150x150 from '../../images/favicon/mstile-150x150.png'
import { config } from '../config'

import * as React from 'react'
import { Helmet } from 'react-helmet'

export const Head = (): React.ReactElement => {
  return (
    <Helmet>
      <html lang={config.siteLang} prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang={config.siteLang}>
        {config.siteTitle}
      </title>
      <link rel="icon" type="image/png" sizes="192x192" href={androidChrome192x192} />
      <link rel="icon" type="image/png" sizes="384x384" href={androidChrome384x384} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="shortcut icon" href={favicon} />
      <meta name="description" content={config.siteDescription} />
      <meta name="keywords" content={config.siteKeywords} />
      <meta name="google-site-verification" content={config.googleVerification} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta itemProp="name" content={config.siteTitle} />
      <meta itemProp="description" content={config.siteDescription} />
      <meta name={msTile150x150} content="#da532c" />
    </Helmet>
  )
}
