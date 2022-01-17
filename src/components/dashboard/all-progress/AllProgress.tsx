import routes, { categories } from '@/data/routes'

import { CompletedData } from 'types';
import Link from 'next/link'
import ProgressBar from './ProgressBar'
import React from 'react'
import { kebabCase } from '@/lib/utils'

function AllProgress({ completedData }: { completedData: CompletedData }) {
  return (
    <div className="mt-8">
      <h2 className="font-medium">Total Progress</h2>
      <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-100 flex flex-col">
        <ProgressBar
          completedData={completedData}
        />
        <div className="flex items-center flex-col sm:flex-row mt-2">
          {categories.map((category, index) => {
            return (
              <div key={index} className="font-medium m-2">
                <>
                  <span className="font-bold">{category}: </span>
                  {Math.round(
                    ((completedData.completedSlides.filter(
                      (slide) => slide.category === kebabCase(category)
                    ).length +
                      completedData.completedMCQs.filter(
                        (mcq) => mcq.category === kebabCase(category)
                      ).length +
                      completedData.completedFRQs.filter(
                        (frq) => frq.category === kebabCase(category)
                      ).length) /
                      (routes[index].children.length * 3)) *
                      100
                  )}
                  %
                </>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllProgress
