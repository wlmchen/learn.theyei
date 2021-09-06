import React from 'react'
import slides from '@/data/slides'
import { kebabCategories, kebabChapters } from '@/data/routes'

function Slides({ slug }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  return (
    <iframe
      src={
        slides[kebabCategories.indexOf(slug[0])][
          kebabChaptersSelection.indexOf(slug[1])
        ].source
      }
      width="100%"
      className="overflow-hidden rounded-xl shadow-xl max-w-2xl h-60 md:h-96"
    ></iframe>
  )
}

export default Slides
