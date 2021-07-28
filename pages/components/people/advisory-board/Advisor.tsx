import React, { useState } from 'react'

export default function Advisor({ name, title, bio, imgSrc }) {
  const [showFull, setShowFull] = useState(false)
  return (
    <li className="sm:py-8">
      <div className="grid grid-cols-12 items-start gap-6 space-y-0">
        <div className="col-span-6 sm:col-span-3">
          <img
            className="w-fill h-fill object-cover shadow-lg rounded-lg bg-gray-900"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="space-y-4">
            <div className="text-2xl sm:text-3xl font-medium space-y-1">
              <h3 className="text-4xl font-bold mb-2">{name}</h3>
              <p className="text-yei-primary-main">{title}</p>
            </div>
            <div className="text-lg text-gray-500 ">
              <div className={showFull ? 'space-y-2' : 'space-y-1'}>
                <p>{bio[0]}</p>
                {bio.slice(1).map((p) => (
                  <p
                    key={p.slice(0, 5)}
                    className={
                      showFull
                        ? 'trans duration-1000 '
                        : 'h-0 opacity-0 pointer-events-none'
                    }
                  >
                    {p}
                  </p>
                ))}
                {bio.length > 1 && (
                  <button
                    className="underline text-gray-900 font-medium"
                    onClick={() => setShowFull(!showFull)}
                  >
                    {showFull ? '[show less]' : '[show full bio]'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
