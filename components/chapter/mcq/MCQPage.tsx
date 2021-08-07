import React from 'react'
import MCQ from './MCQ'

function MCQPage({ slug, categories, chapters }) {
  return (
    <div className="w-full">
      <MCQ categories={categories} chapters={chapters} slug={slug} />
    </div>
  )
}

export default MCQPage
