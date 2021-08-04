import React from 'react'
import ReactMarkdown from 'react-markdown'
import frq from '../../data/frq'
import kebabCase from '../../lib/kebabCase'
import numToLetter from '../../lib/numToLetter'

function FRQ({ categories, info }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  frq[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )

  categories.forEach((item) => kebabCategories.push(kebabCase(item)))
  return (
    <div>
      {frq[kebabCategories.indexOf(info[0])][
        kebabChapters.indexOf(info[1])
      ].questions.map((item, index) => (
        <div key={index}>
          <ReactMarkdown children={item.markdown} />
        </div>
      ))}
    </div>
  )
}

export default FRQ
