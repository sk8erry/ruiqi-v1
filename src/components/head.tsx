import androidChrome192x192 from '../../images/favicon/android-chrome-192x192.png'
import androidChrome384x384 from '../../images/favicon/android-chrome-384x384.png'
import appleTouchIcon from '../../images/favicon/apple-touch-icon.png'
import favicon16x16 from '../../images/favicon/favicon-16x16.png'
import favicon32x32 from '../../images/favicon/favicon-32x32.png'
import favicon from '../../images/favicon/favicon.ico'
import msTile150x150 from '../../images/favicon/mstile-150x150.png'

import * as React from 'react'
import { Helmet } from 'react-helmet'

export const Head = (): React.ReactElement => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" sizes="192x192" href={androidChrome192x192} />
      <link rel="icon" type="image/png" sizes="384x384" href={androidChrome384x384} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="shortcut icon" href={favicon} />
      <meta name={msTile150x150} content="#da532c" />
    </Helmet>
  )
}
