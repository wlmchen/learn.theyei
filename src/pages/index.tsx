import CTA from 'src/components/home/CTA'
import Features from 'src/components/home/Features'
import Footer from 'src/components/global/Footer'
import Head from 'next/head'
import Hero from './../components/home/Hero'
import Link from 'next/link'
import Navbar from 'src/components/home/Navbar'
import PageTypes from 'src/components/home/PageTypes'
import React from 'react'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const auth = useAuth()
  const router = useRouter()

  if (auth.user) {
    router.push('/dashboard')
  }
  return (
    <>
      <div>
        <Head>
          <title>Home | YEI Learn</title>
        </Head>
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
