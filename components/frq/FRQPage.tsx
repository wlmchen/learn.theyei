import React from 'react'
import frq from '../../data/frq'
import FRQ from './FRQ'
import kebabCase from '../../lib/kebabCase'

export default function FRQPage({ info, categories }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  frq[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">
        {
          frq[kebabCategories.indexOf(info[0])][kebabChapters.indexOf(info[1])]
            .title
        }
      </h1>
      <p>
        {
          frq[kebabCategories.indexOf(info[0])][kebabChapters.indexOf(info[1])]
            .desc
        }
      </p>
      <br />
      <FRQ categories={categories} info={info} />
    </div>
  )
}
