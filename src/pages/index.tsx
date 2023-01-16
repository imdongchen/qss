import {GetStaticProps} from 'next'
import Head from 'next/head'
import {CallToAction} from 'src/components/CallToAction'
import {Hero} from 'src/components/Hero'

// import { Footer } from 'src/components/Footer'
import {Header} from '@/components/Header'
import {fetchSiteMetadata, SiteMetadata} from '@/fetches/fetchSiteMetadata'

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchSiteMetadata()

  return {
    props: {
      data,
    },
  }
}

export default function Home({data}: {data: SiteMetadata}) {
  return (
    <>
      <Head>
        <title>{data.siteName}</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header {...data} />
      <main>
        <Hero />
        <CallToAction />
        {/* <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
