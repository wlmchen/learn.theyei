import React from 'react'
import slides from '@/data/slides'

function Slides({ categories, chapters, slug }) {
  return (
    <iframe
      src={
        slides[categories.indexOf(slug[0])][chapters.indexOf(slug[1])].source
      }
      width="100%"
      className="overflow-hidden rounded-xl shadow-xl max-w-2xl h-60 md:h-96"
    ></iframe>
  )
}

export default Slides
