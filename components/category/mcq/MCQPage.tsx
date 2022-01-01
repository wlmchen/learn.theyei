import routes, { kebabCategories, kebabChapters } from '@/data/routes'
import React from 'react'
import MCQ from './MCQ'

function MCQPage({ slug }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  return (
    <div className="w-full">
      <h3 className="border-b border-gray-300 mb-4 pb-2 uppercase italic font-semibold text-gray-400 text-base tracking-widest">
        Multiple Choice Practice
      </h3>
      <h1 className="text-4xl">
        {
          routes[kebabCategories.indexOf(slug[0])].children[
            kebabChaptersSelection.indexOf(slug[1])
          ]
        }
      </h1>
      <br />
      <MCQ slug={slug} />
    </div>
  )
}

export default MCQPage
