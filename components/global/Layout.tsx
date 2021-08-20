import React from 'react'
import Navbar from './Navbar'

export default function Layout({ page, children, showNav }) {
  return (
    <div className="min-h-screen bg-white">
      {showNav && <Navbar page={page} />}
      <div className="w-full">{children}</div>
    </div>
  )
}
