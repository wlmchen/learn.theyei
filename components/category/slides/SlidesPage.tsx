import { categories, chapters } from '@/data/routes'
import slides from '@/data/slides'
import React from 'react'
import ProgressSelect from './ProgressSelect'
import Slides from './Slides'

function SlidesPage({ slug }) {
  return (
    <div className="w-full">
      <h3 className="border-b border-gray-300 mb-4 pb-2 uppercase italic font-semibold text-gray-400 text-base tracking-widest">
        Slides
      </h3>
      <h1 className="text-4xl">
        {slides[categories.indexOf(slug[0])][chapters.indexOf(slug[1])].title}
      </h1>
      <br />
      <ProgressSelect slug={slug} />
      <br />
      <Slides slug={slug} />
    </div>
  )
}

export default SlidesPage
