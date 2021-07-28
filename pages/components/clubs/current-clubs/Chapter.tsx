import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export default function Chapter({
  name,
  imgSrc,
  email,
  founding,
  primaryFounding,
  region,
}) {
  return (
    <li className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-2">
      <div className="space-y-4">
        <div className="overflow-hidden w-full h-auto shadow-lg min-h-64 bg-gray-800 rounded-lg">
          <img
            className="sm:h-80 md:h-72 bg-gray-800 object-cover transform transition ease-in-out duration-500 hover:scale-105 scale-100"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3 className="text-2xl font-bold">{name}</h3>
            {founding && (
              <div className="mt-0.5 mb-1">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {primaryFounding ? 'Primary ' : ''}Founding Club
                </span>
              </div>
            )}
            <p className="text-yei-primary-main">
              {region}{' '}
              {email && (
                <a
                  className="text-gray-400 text-sm whitespace-nowrap"
                  target="_blank"
                  href={'mailto:' + email}
                >
                  (<u>contact</u>{' '}
                  <FontAwesomeIcon
                    className="h-2 w-2 inline"
                    icon={faExternalLinkSquareAlt}
                  />
                  )
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
