import React from 'react'
import mcq from '@/data/mcq'
import { numToLetter, kebabCase } from '@/lib/utils'

function MCQ({ categories, chapters, slug }) {
  let filteredMcqs = mcq.filter((item) => {
    return (
      kebabCase(item.category.substring(0, item.category.length - 2)) ===
        slug[0] &&
      parseInt(
        item.category.substring(item.category.length - 1, item.category.length)
      ) ===
        chapters.indexOf(slug[1]) + 1
    )
  })
  return (
    <div>
      {filteredMcqs.map(({ question, a, b, c, d, correct, source }, index) => (
        <div key={index}>
          <p>{question}</p>
          <ol style={{ listStyleType: 'upper-alpha' }}>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
          </ol>
          <p>Correct is {correct}</p>
          {source !== '' ? <div>Source: {source}</div> : ''}
        </div>
      ))}
    </div>
  )
}

export default MCQ
