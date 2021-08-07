import React from 'react'
import ProgressSelect from '../ProgressSelect'
import Slides from './Slides'

function SlidesPage({ slug, categories, chapters }) {
  return (
    <div className="w-full">
      <ProgressSelect slug={slug} />
      <br />
      <Slides categories={categories} chapters={chapters} slug={slug} />
    </div>
  )
}

export default SlidesPage
