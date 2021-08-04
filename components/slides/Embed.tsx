import React from 'react'
import slides from '../../data/slides'
import kebabCase from '../../lib/kebabCase'

function Embed({ categories, info }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  slides[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )

  categories.forEach((item) => kebabCategories.push(kebabCase(item)))
  return (
    <iframe
      src={
        slides[kebabCategories.indexOf(info[0])][kebabChapters.indexOf(info[1])]
          .source
      }
      width="100%"
      height="400"
      className="overflow-hidden rounded-xl"
    ></iframe>
  )
}

export default Embed
