import React from 'react'
import mcq from '../../data/mcq'
import kebabCase from '../../lib/kebabCase'
import numToLetter from './../../lib/numToLetter'

function MCQ({ categories, info }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  mcq[kebabCategories.indexOf(info[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )

  categories.forEach((item) => kebabCategories.push(kebabCase(item)))
  return (
    <div>
      {mcq[kebabCategories.indexOf(info[0])][
        kebabChapters.indexOf(info[1])
      ].questions.map(({ question, answers, correct }, index) => (
        <div key={index}>
          <p>{question}</p>
          {answers.map((item, index2) => (
            <p key={index2}>
              {numToLetter(index2)}. {item}
            </p>
          ))}
          <p>Correct is {numToLetter(correct)}</p>
        </div>
      ))}
    </div>
  )
}

export default MCQ
