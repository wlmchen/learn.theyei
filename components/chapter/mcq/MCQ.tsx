import React from 'react'
import mcq from '@/data/mcq'
import { numToLetter } from '@/lib/utils'

function MCQ({ categories, chapters, slug }) {
  return (
    <div>
      {mcq[categories.indexOf(slug[0])][
        chapters.indexOf(slug[1])
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
