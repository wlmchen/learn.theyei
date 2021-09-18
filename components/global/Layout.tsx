import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ page, children, showNav }) {
  return (
    <div className="min-h-screen bg-white">
      {showNav && <Navbar page={page} />}
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  )
}
