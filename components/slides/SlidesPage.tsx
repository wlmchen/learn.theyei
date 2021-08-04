import React from 'react'
import slides from '../../data/slides'
import Embed from './Embed'
import kebabCase from '../../lib/kebabCase'

function SlidesPage({ info, categories }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  slides[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">
        {
          slides[kebabCategories.indexOf(info[0])][
            kebabChapters.indexOf(info[1])
          ].title
        }
      </h1>
      <p>
        {
          slides[kebabCategories.indexOf(info[0])][
            kebabChapters.indexOf(info[1])
          ].desc
        }
      </p>
      <Embed categories={categories} info={info} />
    </div>
  )
}

export default SlidesPage
