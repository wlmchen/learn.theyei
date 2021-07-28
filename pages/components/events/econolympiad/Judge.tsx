import React, { useState } from 'react'

export default function Judge({ name, imgSrc, bio }) {
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 py-8 pr-1 md:pr-8">
      <div className="space-y-6">
        <img
          className="bg-yei-secondary-main h-40 w-40 rounded-md shadow-md xl:w-56 xl:h-56"
          src={imgSrc}
          alt={name}
        />
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl leading-6 font-bold">{name}</h3>
          <p className="text-gray-500 text-base">
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
