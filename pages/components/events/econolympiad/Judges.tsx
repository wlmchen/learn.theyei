import React from 'react'
import Judge from './Judge'
import judges from '../../../data/people/econOlyJudges'

export default function Judges() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 px-4 divide-y-2 divide-gray-200 sm:pt-20 sm:pb-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Judges
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          <ul className="mx-auto flex flex-wrap flex-col sm:flex-row">
            {judges.map(({ name, bio }) => {
              let key = name.replace(/[\W_]+/g, '-').toLowerCase()
              return (
                <Judge
                  key={key}
                  name={name}
                  bio={bio}
                  imgSrc={`/img/people/econolyjudges/${key}.jpg`}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
