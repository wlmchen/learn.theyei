import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function Speaker({
  name,
  occupation,
  imgSrc,
  host,
  date,
  vids,
  bio,
}) {
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 py-8 px-4 sm:px-8">
      <div className="space-y-6">
        <img
          className="bg-yei-secondary-main mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={imgSrc}
          alt={name}
        />
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl leading-6 font-bold">{name}</h3>
            <p className="font-medium text-xl sm:text-2xl text-yei-primary-main">
              {occupation}
            </p>
          </div>
          <p className="text-gray-700 text-lg sm:text-xl">{date}</p>
          {vids && (
            <div>
              {vids.map((v) => (
                <a
                  href={v}
                  target="_blank"
                  key={v}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 hover:text-green-900 trans-300 text-green-700"
                >
                  <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 mr-2" />{' '}
                  View Talk
                </a>
              ))}
            </div>
          )}
          {host && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="h-4 w-4 mr-2"
              />{' '}
              Hosted by {host}
            </span>
          )}
          <p className="text-gray-500">
            <Truncate str={bio} n={169} />
          </p>
        </div>
      </div>
    </li>
  )
}

function Truncate({ str, n }) {
  const [showFull, setShowFull] = useState(false)

  return str.length > n && !showFull ? (
    <span>
      {str.substr(0, n - 1)}...
      <br />
      <span>
        <button
          onClick={() => {
            setShowFull(true)
          }}
          className="underline font-semibold text-gray-700"
        >
          [show more]
        </button>
      </span>
    </span>
  ) : (
    <span>
      {str}
      {showFull && (
        <span>
          <br />
          <span>
            <button
              onClick={() => {
                setShowFull(false)
              }}
              className="underline font-semibold text-gray-700"
            >
              [show less]
            </button>
          </span>
        </span>
      )}
    </span>
  )
}
