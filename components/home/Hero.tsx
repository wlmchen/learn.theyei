import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <main className="mt-16 mx-auto max-w-6xl px-4">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-4xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl">
              Your economics journey{' '}
              <span className="whitespace-nowrap text-yei-primary-main">
                starts here.
              </span>
            </span>
          </h1>
          <p className="m-auto max-w-xl mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg">
		    <span className="whitespace-nowrap text-yei-primary-main">
                YEI Learn{' '}
            </span>
			provides practice resources for the AP Economics exams, National Economics Challenge, EconBowl, EconOlympiad, and more. 
          </p>
          <div className=" mt-4 sm:mx-auto sm:text-center lg:text-left">
            <Link href="/signup">
              <a className="m-1 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main cursor-pointer transition-colors duration-300">
                Get Started
              </a>
            </Link>
          </div>
        </div>
        <div className=" lg:col-span-6 mt-12 lg:mt-0 mx-auto min-w-auto max-w-2xl">
          <img src="./img/others/home/heroImage.png" className="w-full" />
        </div>
      </div>
    </main>
  )
}

export default Hero
