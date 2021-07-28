import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-yei-primary-gray">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <div className="mb-1">Ready to join the YEI?</div>
          <div className="text-yei-primary-main">
            Start by registering a club today.
          </div>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/clubs/register">
              <a className="trans-300 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker">
                Get started
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/clubs/current-clubs">
              <a className="trans-300 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-main bg-white hover:bg-gray-100">
                View Current Clubs
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
