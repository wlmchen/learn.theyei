import React from 'react'
import mcq from '../../data/mcq'
import MCQ from './MCQ'
import kebabCase from '../../lib/kebabCase'

function MCQPage({ info, categories }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  mcq[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">
        {
          mcq[kebabCategories.indexOf(info[0])][kebabChapters.indexOf(info[1])]
            .title
        }
      </h1>
      <p>
        {
          mcq[kebabCategories.indexOf(info[0])][kebabChapters.indexOf(info[1])]
            .desc
        }
      </p>
      <br />
      <MCQ categories={categories} info={info} />
    </div>
  )
}

export default MCQPage
