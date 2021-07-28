import React from 'react'
import Link from 'next/link'
import currentClubs from '../../../data/currentClubs'
import Chapter from './Chapter'

export default function Schools() {
  return (
    <div className="bg-white pt-16">
      <div className="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            YEI Current Clubs
          </h2>
          <p className="text-xl text-gray-600">
            View the YEI's {currentClubs.length} clubs. Want to join the list?
            Learn more at our{' '}
            <Link href="/clubs">
              <a className="green-link">EconClubs overview page</a>
            </Link>
            .
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row flex-wrap">
          {currentClubs.map(
            ({ name, email, founding, primaryFounding, region }) => {
              let key = name.replace(/[\W_]+/g, '-').toLowerCase()
              return (
                <Chapter
                  key={key}
                  imgSrc={`/img/clubs/current-clubs/${key}.jpg`}
                  name={name}
                  email={email}
                  founding={founding}
                  primaryFounding={primaryFounding}
                  region={region}
                />
              )
            }
          )}
        </ul>
      </div>
    </div>
  )
}
