import { FRQ, MCQ, Slide } from '@/types/index'
import routes, { kebabCategories } from '@/data/routes'

import React from 'react'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'

type ProgressBarProps = {
  completedData: {
    completedSlides: Slide[]
    completedMCQs: MCQ[]
    completedFRQs: FRQ[]
  }
}

function ProgressBar({
  completedData: { completedSlides, completedMCQs, completedFRQs },
}: ProgressBarProps) {
  let numberOfFRQs = 0
  let numberOfFRQsComplete = 0
  frqs.forEach((category, categoryIndex) => {
    category.forEach((chapter) => {
      if (
        completedFRQs.filter(
          (item) =>
            kebabCategories.indexOf(item.category) === categoryIndex &&
            kebabCase(chapter.title) === item.chapter
        ).length === chapter.numberOfFRQs
      ) {
        numberOfFRQsComplete++
      }
      numberOfFRQs
    })
  })
  const getCountOfAllContent =
    routes[0].children.length * 3 +
    routes[1].children.length * 3 +
    routes[2].children.length * 3 +
    numberOfFRQs

  console.log({ completedSlides, completedMCQs, numberOfFRQsComplete })
  return (
    <div
      className="bg-yei-primary-main px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"
      style={{
        background: `linear-gradient(to right, #279361, #279361 ${Math.round(
          ((completedSlides.length +
            completedMCQs.length +
            numberOfFRQsComplete) /
            getCountOfAllContent) *
            100
        )}%, #7ab69a ${Math.round(
          ((completedSlides.length +
            completedMCQs.length +
            numberOfFRQsComplete) /
            getCountOfAllContent) *
            10
        )}%, #7ab69a)`,
      }}
    >
      {Math.round(
        ((completedSlides.length +
          completedMCQs.length +
          numberOfFRQsComplete) /
          getCountOfAllContent) *
          100
      )}
      %
    </div>
  )
}

export default ProgressBar
