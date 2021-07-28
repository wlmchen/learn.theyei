import React from 'react'
import GridPattern from './GridPattern'

export default function DoubleGridBg({ color, showSm }: DoubleGridBgProps) {
  return (
    <div
      className={
        showSm
          ? 'block absolute inset-y-0 h-full w-full'
          : 'hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
      }
      aria-hidden="true"
    >
      <div className="relative h-full max-w-7xl mx-auto">
        <GridPattern
          color={color}
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
        />
        <GridPattern
          color={color}
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
        />
      </div>
    </div>
  )
}

type DoubleGridBgProps = {
  color?: string
  showSm?: boolean
}
