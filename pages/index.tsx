import Link from 'next/link'
import { useAuth } from '@/lib/auth'
import React from 'react'
import Navbar from '@/components/home/Navbar'
import Hero from './../components/home/Hero'
import Features from '@/components/home/Features'
import PageTypes from '@/components/home/PageTypes'
import Footer from '@/components/global/Footer'
import CTA from '@/components/home/CTA'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const auth = useAuth()
  const router = useRouter()

  if (auth.user) {
    router.push('/dashboard')
  }
  return (
    <>
      {auth.user !== true}
      <div>
        <Navbar />
        <Hero />
        <Features />
        <PageTypes />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
