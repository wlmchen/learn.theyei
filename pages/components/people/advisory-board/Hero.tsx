import React from 'react'
import DoubleGridBg from '../../utility/DoubleGridBg'

export default function Hero() {
  return (
    <div className="bg-yei-secondary-brighter relative pt-14 overflow-hidden">
      <DoubleGridBg showSm color="text-gray-600" />
      <div className="z-10 relative container py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-5xl font-bold text-white sm:tracking-tight lg:text-6xl">
            Advisory Board
          </p>
        </div>
      </div>
    </div>
  )
}
