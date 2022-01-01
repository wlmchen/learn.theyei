import '@/styles/globals.css'

import React, { useEffect } from 'react'

import { AppProps } from 'next/app'
import { AuthProvider } from '@/lib/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} key={router.asPath} />
      </AuthProvider>
    </>
  )
}

export default App
