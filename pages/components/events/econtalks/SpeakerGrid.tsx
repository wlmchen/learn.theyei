import React from 'react'
import speakers from '../../../data/people/speakers'
import Speaker from './Speaker'

export default function SpeakerGrid() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-14 mb-2">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl -mb-4">
              Previous Speakers
            </h2>
            {/* <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p> */}
          </div>
          <ul className="mx-auto justify-center flex flex-wrap flex-col sm:flex-row">
            {speakers.map(({ name, occupation, vids, host, bio, date }) => {
              let key = name.replace(/[\W_]+/g, '-').toLowerCase()
              return (
                <Speaker
                  key={key}
                  name={name}
                  occupation={occupation}
                  vids={vids}
                  bio={bio}
                  date={date}
                  host={host}
                  imgSrc={`/img/people/speakers/${key}.jpg`}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
