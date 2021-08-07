import React from 'react'
import slides from '@/data/slides'

function Slides({ categories, chapters, slug }) {
  return (
    <iframe
      src={
        slides[categories.indexOf(slug[0])][chapters.indexOf(slug[1])].source
      }
      width="100%"
      height="400"
      className="overflow-hidden rounded-xl"
    ></iframe>
  )
}

export default Slides
