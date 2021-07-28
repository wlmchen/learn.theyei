import Link from 'next/link'
import React, { useState } from 'react'
import Announcement from '../../utility/Announcement'
import Register from './Register'

export default function Hero() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && (
        <Announcement
          setVisible={setVisible}
          smTitle="EconOlympiad took place in April 2021!"
          title="EconOlympiad took place in April 2021!"
        />
      )}
      <div className="relative bg-white overflow-hidden">
        <div aria-hidden="true">
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>
        <div
          className={`"relative pb-16 sm:pb-24 lg:pb-32  ${
            visible ? '' : 'pt-12'
          }`}
        >
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    YEI Event
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="text-gray-900">Econ</span>
                    <span className="text-yei-primary-darker">Olympiad</span>
                  </span>
                </h1>
                <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  <p className="mt-3 ">
                    Earn cash prizes while applying your knowledge in a team
                    based competition to answer written questions & brainstorm
                    solutions for current economic issues!
                  </p>
                  <p className="mt-4">
                    EconOlympiad is open to everyone, not just YEI members! If
                    you want to become a YEI member, you can register your club{' '}
                    <Link href="/clubs/register">
                      <a className="green-link">here</a>
                    </Link>
                    , and we’ll get in touch with you soon! You can sign up as
                    soon as you fill out the form. Registration deadline is{' '}
                    <strong>3/31</strong>.
                  </p>
                </div>
                <div>
                  <Register />
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width={640}
                  height={784}
                  fill="none"
                  viewBox="0 0 640 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x={118}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y={72}
                    width={640}
                    height={640}
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x={118}
                    width={404}
                    height={784}
                    fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  />
                </svg>
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <button
                    type="button"
                    className="relative block w-full bg-yei-secondary-brighter rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                  >
                    <span className="sr-only">
                      Watch our video to learn more
                    </span>
                    {/* <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt=""
                    /> */}

                    <iframe
                      className="w-full h-64 sm:h-72 lg:h-64"
                      src="https://www.youtube.com/embed/p7jT9Wl5xGw"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* <div
                      className="absolute w-full h-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-20 w-20 text-yei-primary-main"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <circle
                          opacity="0.85"
                          cx={42}
                          cy={42}
                          r={42}
                          fill="white"
                        />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
