import { groq } from 'next-sanity'

import {client} from '@/sanity/client'

const SITE_METADATA_QUERY = groq`
  *[_type == 'siteMetadata'][0]{
    siteName,
    "logo": logo.asset->url,
    navLinks[]{
      link,
      label,
    }
  }
`
type NavLink = {
  label: string
  link: string
}
export type SiteMetadata = {
  logo: string
  siteName: string
  navLinks: NavLink[]
}

export async function fetchSiteMetadata() {
	return  client.fetch<SiteMetadata | null>(SITE_METADATA_QUERY)
}