import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({
  page,
  children,
  showNav,
  contentLoaded = false,
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="z-50">{showNav && <Navbar page={page} />}</div>
      <div className="w-full pb-10 z-0">{children}</div>
      {contentLoaded && <Footer />}
    </div>
  )
}
