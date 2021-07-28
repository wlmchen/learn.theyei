import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function FeaturedSection({
  subtitle,
  title,
  content,
  href,
  imgTitle,
  dark,
  index,
  length,
  Component,
}) {
  return (
    <Slant dark={dark} index={index} length={length}>
      <div
        className={`relative ${
          dark ? 'bg-gray-800' : 'bg-gray-100'
        } pt-10 pb-6 ${imgTitle ? 'sm:pt-14 sm:pb-6' : 'sm:py-0 sm:pb-8'} z-20`}
      >
        <div className="container relative flex flex-col md:flex-row">
          {imgTitle && (
            <div className="lg:w-1/3 flex-shrink-0 h-full my-auto order-2 md:order-1 px-4">
              <div className="sm:py-14 pt-5 pb-6">
                <div className="relative py-3 sm:mx-auto h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-800 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                  <div className="relative bg-white shadow-lg py-8 rounded-3xl">
                    <img
                      src={`/img/logos/${imgTitle}.png`}
                      className="h-36 sm:h-48 mx-auto px-4 lg:px-0"
                      alt={title}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className={`relative px-4 py-12 sm:px-6 lg:px-8 lg:py-16  ${
              dark ? 'md:order-3' : 'md:order-0'
            }`}
          >
            <div
              className={`flex-shrink-0 ${dark && imgTitle ? 'md:pl-10' : ''}`}
            >
              <h2
                className={`text-base font-semibold uppercase tracking-wider mb-1  ${
                  dark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {subtitle}
              </h2>
              <p
                className={`mt-2  ${
                  dark ? 'text-white' : 'text-yei-secondary-brighter'
                } text-5xl font-extrabold tracking-tight sm:text-6xl`}
              >
                {title}
              </p>
              <p
                className={`mt-3 text-lg sm:text-xl  ${
                  dark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {content}
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link href={href}>
                    <a
                      className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-md font-medium rounded-md ${
                        dark
                          ? 'text-gray-900 bg-white hover:bg-gray-50'
                          : 'text-white bg-yei-secondary-darker hover:bg-yei-secondary-darkest'
                      } trans-300`}
                    >
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`-mr-1 ml-3 h-4 w-4 ${
                          dark ? 'text-gray-400' : 'text-gray-300'
                        }`}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {Component && (
          <div className="max-w-7xl mx-auto px-4 sm:px-2 pt-24 pb-2 -mb-10 sm:-mb-8 lg:-mb-4 md:pt-12 xl:pb-6">
            <Component />
          </div>
        )}
      </div>
    </Slant>
  )
}

function Slant({ children, dark, index, length }) {
  let z = length - index
  return (
    <>
      <div
        className={`relative ${
          dark ? 'bg-gray-800' : 'bg-gray-100'
        } h-48 -mt-48 3xl:hidden`}
        style={{ zIndex: z }}
      ></div>
      {children}
      {z > 1 && (
        <div
          className={`relative ${
            dark ? 'bg-gray-800 slant-up-left' : 'bg-gray-100 slant-up-right'
          } h-64 -mt-36 3xl:hidden`}
          style={{ zIndex: z }}
        ></div>
      )}
    </>
  )
}
