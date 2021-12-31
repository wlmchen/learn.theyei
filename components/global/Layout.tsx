import Footer from './Footer'
import Head from 'next/head'
import Navbar from './Navbar'
import React from 'react'

export default function Layout({
  title,
  page,
  children,
  showNav,
  contentLoaded = false,
}) {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title} | YEI Learn</title>
      </Head>
      <div className="z-50">{showNav && <Navbar page={page} />}</div>
      <div className="w-full z-0">{children}</div>
      {contentLoaded && <Footer />}
    </div>
  )
}
