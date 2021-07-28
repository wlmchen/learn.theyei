import React from 'react'
import Steps from './Steps'
import DoubleGridBg from './../../utility/DoubleGridBg'

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 flex items-center min-h-screen bg-white">
      <DoubleGridBg />
      <div className="relative pt-8 pb-12 sm:pt-14 sm:pb-24 container">
        <main className="z-10 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Apply
                </span>
                <span className="mt-1 block text-5xl tracking-tight font-extrabold sm:text-6xl xl:text-6xl">
                  <span className="block text-gray-900">Join the YEI</span>
                  <span className="block text-yei-primary-main">
                    Leadership Team
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 sm:mt-5 sm:text-xl">
                Passionate about what we do? Want to join an international team
                of leaders, creators, and economics enthusiasts? Learn how to
                apply in the{' '}
                <a
                  target="_blank"
                  className="underline font-bold text-yei-secondary-brighter"
                  href="https://docs.google.com/document/d/1VBmep4hRFlc_m34zoB3PrCpR41UnlAKgH2r-k3FBrAM/edit"
                >
                  YEI application packet
                </a>
                .
              </p>
              <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Knowledge of economics isn’t required for every position, and
                all are welcome to apply. Applications are on a rolling basis,
                so apply as soon as you can!
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Steps />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
