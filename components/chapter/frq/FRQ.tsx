import React from 'react'
import ReactMarkdown from 'react-markdown'
import frq from '@/data/frq'

function FRQ({ categories, chapters, slug }) {
  return (
    <div>
      {frq[categories.indexOf(slug[0])][
        chapters.indexOf(slug[1])
      ].questions.map((item, index) => (
        <div key={index}>
          <ReactMarkdown children={item.markdown} />
        </div>
      ))}
    </div>
  )
}

export default FRQ
