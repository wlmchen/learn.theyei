import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children, showNav }) {
  return (
    <div className="min-h-screen bg-white">
      {showNav && <Navbar />}
      <div className="w-full">{children}</div>
    </div>
  )
}
