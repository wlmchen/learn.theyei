import React from 'react'
import FRQ from './FRQ'

export default function FRQPage({ slug, categories, chapters }) {
  return (
    <div className="w-full">
      <br />
      <FRQ categories={categories} chapters={chapters} slug={slug} />
    </div>
  )
}
