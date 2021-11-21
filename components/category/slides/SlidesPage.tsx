import { kebabCategories, kebabChapters } from '@/data/routes'
import slides from '@/data/slides'
import React from 'react'
import ProgressSelect from './ProgressSelect'
import Slides from './Slides'

function SlidesPage({ slug }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  return (
    <div className="w-full">
      <h3 className="border-b border-gray-300 mb-4 pb-2 uppercase italic font-semibold text-gray-400 text-base tracking-widest">
        Slides
      </h3>
      <h1 className="text-4xl">
        {
          slides[kebabCategories.indexOf(slug[0])][
            kebabChaptersSelection.indexOf(slug[1])
          ].title
        }
      </h1>
      <br />
      <ProgressSelect slug={slug} />
      <br />
      <Slides slug={slug} />
    </div>
  )
}

export default SlidesPage
