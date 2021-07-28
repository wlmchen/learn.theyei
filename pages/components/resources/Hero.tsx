import Link from 'next/link'
import React from 'react'
import RequestDemo from './RequestDemo'

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: 'url("/img/page-bg/resources-bg.png' }}
      className="bg-cover relative bg-yei-secondary-brighter overflow-hidden pt-8"
    >
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h2 className="mt-4 sm:mt-5 lg:mt-6 text-yei-primary-main font-semibold text-2xl lg:text-3xl">
                    EconClub Curriculum
                  </h2>
                  <h1 className="mt-2 text-4xl tracking-tight font-bold text-white lg:text-5xl xl:text-6xl">
                    <span className="lg:block">
                      Making Economics and Financial Literacy Accessible
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Youth Economics offers an in-depth portfolio of exclusive
                    curriculum slide decks, practice worksheets, interactive
                    concept reviews, and fully deployable lesson plans. Our
                    clubs gain access to our comprehensive courses that allow
                    them the frictionless ability to teach their members and
                    begin exploring. All you need is a willingness to explore
                    and a{' '}
                    <Link href="/clubs/register">
                      <a className="underline text-gray-200">
                        YEI EconClub Charter
                      </a>
                    </Link>{' '}
                    and you're on your way to a successful Economics Club.
                  </p>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <RequestDemo />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
