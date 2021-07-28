import Link from 'next/link'
import React from 'react'

export default function IB() {
  return (
    <div className="container py-20">
      <div>
        <div>
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            25+ Week IB Curriculum
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            IB Economics! This in-depth curriculum covers microeconomics,
            macroeconomics, international trade, and development economics. Use
            our 20 IB slides to study and teach economics for the IB exam!
          </p>

          <div className="rounded-md bg-blue-50 p-4 mt-4">
            <div className="flex">
              <div className="flex-shrink-0">
                {/* Heroicon name: information-circle */}
                <svg
                  className="h-5 w-5 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700">
                  This curriculum is coming soon! Get full access immediately
                  after it's released by joining us as a{' '}
                  <Link href="/clubs/register">
                    <a className="font-semibold text-blue-900">YEI club.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
