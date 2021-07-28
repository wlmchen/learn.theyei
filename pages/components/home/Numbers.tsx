import React from 'react'
import currentClubs from '../../data/currentClubs'
import CountUpOnce from '../utility/CountUp'

export default function Numbers() {
  return (
    <div className="relative z-30 bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Organization in Numbers
          </h2>
          {/* <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p> */}
        </div>
        <dl className="sm:mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          {[
            { desc: 'Amazing group ​of young economists', val: 1 },
            { desc: 'Current clubs', val: currentClubs.length },
            {
              desc: 'Active student members',
              val: Math.floor((currentClubs.length * 47.3) / 25) * 25,
            },
          ].map((n) => (
            <div key={n.val} className="flex flex-col space-y-8 sm:space-y-0">
              <dt className="order-2 mt-2 text-xl leading-6 font-medium text-indigo-200">
                ​{n.desc}
              </dt>
              <dd className="order-1 text-6xl font-extrabold text-white">
                <CountUpOnce number={n.val} duration={1.6} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
