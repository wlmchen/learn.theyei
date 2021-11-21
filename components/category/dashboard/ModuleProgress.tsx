import routes, { kebabCategories } from '@/data/routes'
import { kebabCase } from '@/lib/utils'
import React from 'react'

function ModuleProgress({
  title,
  completedData: { completedSlides, completedMCQs, completedFRQs },
}) {
  return (
    <div>
      <div className="flex justify-center w-full flex-row">
        <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
            {completedSlides.length}/
            {routes[kebabCategories.indexOf(kebabCase(title))].children.length}
          </div>
          <div className=" text-lg font-bold text-green-100">Slides</div>
        </div>
        <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
            {completedMCQs.length}/
            {routes[kebabCategories.indexOf(kebabCase(title))].children.length}
          </div>
          <div className=" text-lg font-bold text-green-100">MCQs</div>
        </div>
        <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
            {completedFRQs.length}/
            {routes[kebabCategories.indexOf(kebabCase(title))].children.length}
          </div>
          <div className=" text-lg font-bold text-green-100">FRQs</div>
        </div>
      </div>
    </div>
  )
}

export default ModuleProgress
