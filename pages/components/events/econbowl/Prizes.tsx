import React from 'react'
import CountUpOnce from './../../utility/CountUp'

export default function Prizes() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Cash Prizes
          </h2>
          {/* <p className="mt-3 text-xl text-green-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p> */}
        </div>
        <dl className="mt-5 text-center md:max-w-5xl items-center md:mx-auto md:grid md:grid-cols-4 md:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-green-100 text-green-800">
                Champion
              </span>
            </dt>
            <dd className="text-7xl lg:text-8xl font-semibold text-green-600">
              $<CountUpOnce number={750} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-1">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-green-200 text-green-800">
                2nd Place
              </span>
            </dt>
            <dd className="text-6xl lg:text-7xl font-semibold text-green-700">
              $<CountUpOnce number={400} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-green-300 text-green-800">
                3rd Place
              </span>
            </dt>
            <dd className="order-1 text-5xl lg:text-6xl font-semibold text-green-800">
              $<CountUpOnce number={200} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-base font-semibold bg-green-300 text-green-900">
                4th Place
              </span>
            </dt>
            <dd className="order-1 text-4xl lg:text-5xl font-semibold text-green-800">
              $<CountUpOnce number={150} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
