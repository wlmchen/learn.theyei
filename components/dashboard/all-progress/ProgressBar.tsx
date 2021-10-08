import routes from '@/data/routes'
import React from 'react'

function ProgressBar({
  completedData: { completedSlides, completedMCQs, completedFRQs },
}) {
  const getCountOfAllContent =
    routes[0].children.length * 3 +
    routes[1].children.length * 3 +
    routes[2].children.length * 3
  return (
    <div
      className="bg-yei-primary-main px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"
      style={{
        background: `linear-gradient(to right, #279361, #279361 ${Math.round(
          ((completedSlides.length +
            completedMCQs.length +
            completedMCQs.length) /
            getCountOfAllContent) *
            100
        )}%, #7ab69a ${Math.round(
          ((completedSlides.length +
            completedMCQs.length +
            completedMCQs.length) /
            getCountOfAllContent) *
            10
        )}%, #7ab69a)`,
      }}
    >
      {Math.round(
        ((completedSlides.length +
          completedMCQs.length +
          completedMCQs.length) /
          getCountOfAllContent) *
          100
      )}
      %
    </div>
  )
}

export default ProgressBar
