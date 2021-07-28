import React from 'react'
import advisoryBoard from '../../../data/people/advisoryBoard'
import Advisor from './Advisor'

export default function Board() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
        <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          {advisoryBoard.map((advisor) => {
            let key = advisor.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <Advisor
                key={key}
                name={advisor.name}
                title={advisor.title}
                bio={advisor.bio}
                imgSrc={`/img/people/advisory-board/${key}.jpg`}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
