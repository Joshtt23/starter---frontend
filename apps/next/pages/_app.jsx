import 'raf/polyfill'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Next.js head starter kit with gluestack-ui',
  description:
    'A comprehensive starter kit to kick-start your next.js application using gluestack-ui - your one-stop solution for faster, smoother, and better web development.',
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* TODO: Add default meta tags here */}
        <title>Starter Template</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito starter template."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
