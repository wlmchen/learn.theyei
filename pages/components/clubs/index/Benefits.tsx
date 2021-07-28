import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'
import benefits from '../../../data/content/clubBenefits'

export default function Benefits() {
  return (
    <div className="py-12 sm:pt-18 sm:pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-1">
        <div>
          <h2 className="text-base text-yei-primary-darker font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Join?
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <div className="mt-10">
          <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((reason) => (
              <div key={reason.href} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                    <FontAwesomeIcon icon={reason.icon} className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl leading-6 font-medium text-gray-900">
                      {reason.title}
                    </div>
                    <div>
                      <p className="mt-2 text-lg text-gray-600">
                        {reason.content}
                      </p>
                    </div>
                  </div>
                  <div>
                    {reason.href.startsWith('/') ? (
                      <Link href={reason.href}>
                        <a className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded text-green-700 bg-gray-200 ">
                          {reason.ctaText}
                        </a>
                      </Link>
                    ) : (
                      <a
                        href={reason.href}
                        target="_blank"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded text-green-700 bg-gray-200 "
                      >
                        {reason.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
