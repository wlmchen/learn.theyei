import '@/styles/globals.css'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AuthProvider } from '@/lib/auth'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
