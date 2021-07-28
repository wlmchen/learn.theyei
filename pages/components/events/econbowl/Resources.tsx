import React from 'react'

export default function Resources() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 px-4 divide-y-2 divide-gray-200 sm:pt-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Preparation Resources
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl">
          <p>
            Take our{' '}
            <a
              href="https://docs.google.com/document/d/1ad3zJGWHnOFBCEzOVY3OZL6N3R4I4t79rmFC5PtCoXs/edit?usp=sharing"
              className="green-link"
              target="_blank"
            >
              practice tests
            </a>{' '}
            (3 total practice sets) to prepare for the competition. For more
            resources, we’d suggest the YEI curriculum, other AP prep material,
            or{' '}
            <a
              href="https://www.councilforeconed.org/national-economics-challenge/sample-tests-2/"
              className="green-link"
              target="_blank"
            >
              National Economics Challenge sample tests
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
