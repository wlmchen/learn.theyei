import CTA from '@/components/home/CTA'
import Features from '@/components/home/Features'
import Footer from '@/components/global/Footer'
import Head from 'next/head'
import Hero from './../components/home/Hero'
import Link from 'next/link'
import Navbar from '@/components/home/Navbar'
import PageTypes from '@/components/home/PageTypes'
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
      {auth.user !== true}
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
