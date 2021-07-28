import React from 'react'
import Link from 'next/link'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  return (
    <div
      className="bg-cover bg-gray-900 bg-no-repeat bg-center min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/page-bg/home-bg.png')",
      }}
    >
      <div className="container relative sm:pb-12 sm:pt-9 md:pt-6 xl:pt-0">
        <main className="mt-5 md:mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12">
              <div className="sm:mx-auto lg:mx-0 sm:text-center md:max-w-3xl lg:col-span-9 lg:text-left lg:flex">
                <div>
                  <Link href="/people/apply">
                    <a className="inline-flex shadow-sm items-center text-white bg-yei-secondary-main rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                      <span className="px-3 py-0.5 text-white text-sm font-semibold leading-5 uppercase tracking-wide bg-yei-primary-darker rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-base">Apply now</span>

                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="ml-2 w-5 h-5 text-gray-500"
                      />
                    </a>
                  </Link>
                  <h1 className="mt-4 text-6xl tracking-tight font-bold text-white sm:mt-5 lg:mt-6 lg:text-7xl xl:text-7xl">
                    <span className="sm:block">Launchpad for </span>
                    <span className="sm:block">Student Economists</span>
                  </h1>
                  <p className="mt-3 text-3xl text-gray-300 sm:mt-5 lg:text-4xl">
                    World's largest coalition of high school economics clubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
