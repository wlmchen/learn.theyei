import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero({ programName, desc, applyLink }) {
  return (
    <div className="bg-gray-100 pt-16">
      <div className="sm:pt-12 lg:pt-14">
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/img/page-bg/programs-bg.jpg"
                  alt={programName}
                />
                <div
                  className="absolute inset-0 bg-yei-secondary-main"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <img
                  src={`/img/logos/${programName}-white.png`}
                  alt={programName}
                  className="w-48 mx-auto"
                />
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                  {desc}
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href={applyLink}
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                    >
                      Apply
                    </a>
                    <AnchorLink
                      href="#learn-more"
                      offset={26.9}
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Learn More
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
