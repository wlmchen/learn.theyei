import '@/styles/globals.css'

import React, { useEffect } from 'react'

import { AppProps } from 'next/app'
import { AuthProvider } from '@/lib/auth'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <AuthProvider>
      <Component {...pageProps} key={router.asPath} />
    </AuthProvider>
  )
}

export default App
