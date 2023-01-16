import '../global.css'

import {AppProps} from 'next/app'
import {groq} from 'next-sanity'

export const SITE_METADATA_QUERY = groq`
  *[_type == 'siteMetadata']{
    siteName,
    logo,
  }
`

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
