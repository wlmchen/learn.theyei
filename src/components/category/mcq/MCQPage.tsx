import routes, { kebabCategories, kebabChapters } from '@/data/routes'

import MCQuiz from './MCQuiz'
import React from 'react'
import { Slug } from '@/types/index'

function MCQPage({ slug }: { slug: Slug }) {
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
      <MCQuiz slug={slug} />
    </div>
  )
}

export default MCQPage
