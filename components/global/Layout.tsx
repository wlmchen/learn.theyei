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
      {showNav && <Navbar page={page} />}
      <div className="w-full pb-10">{children}</div>
      {contentLoaded && <Footer />}
    </div>
  )
}
