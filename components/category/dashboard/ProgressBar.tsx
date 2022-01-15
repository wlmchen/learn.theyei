import routes, { kebabCategories } from '@/data/routes'

import { CompletedData } from 'types'
import React from 'react'
import { kebabCase } from '@/lib/utils'

type ProgressBarProps = {
  title: string
  completedData: CompletedData
}

export default function ProgressBar({
  title,
  completedData: { completedSlides, completedMCQs, completedFRQs },
}: ProgressBarProps) {
  return (
    <div className="bg-green-100 max-w-lg m-5 w-full p-5 shadow-2xl rounded-xl inline-flex flex-col justify-center space-y-4">
      <div className="uppercase tracking-widest text-sm font-bold text-yei-primary-main">
        {title} Progress
      </div>
      <div
        className="bg-yei-primary-main px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"
        style={{
          background: `linear-gradient(to right, #279361, #279361 ${Math.round(
            ((completedSlides.length +
              completedMCQs.length +
              completedFRQs.length) /
              (routes[kebabCategories.indexOf(kebabCase(title))].children
                .length *
                3)) *
              100
          )}%, #52a47e ${Math.round(
            ((completedSlides.length +
              completedMCQs.length +
              completedFRQs.length) /
              (routes[kebabCategories.indexOf(kebabCase(title))].children
                .length *
                3)) *
              100
          )}%, #52a47e)`,
        }}
      >
        {Math.round(
          ((completedSlides.length +
            completedMCQs.length +
            completedFRQs.length) /
            (routes[kebabCategories.indexOf(kebabCase(title))].children.length *
              3)) *
            100
        )}
        %
      </div>
    </div>
  )
}
