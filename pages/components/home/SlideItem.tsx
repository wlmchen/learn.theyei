import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SlideItem({ name, imgSrc, date, occupation, vid }) {
  return (
    <div className="px-4">
      <div className="flex justify-center flex-col text-center space-y-4">
        <div>
          <img
            className="bg-yei-secondary-main mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            src={imgSrc}
            alt={name}
            draggable="false"
          />
        </div>
        <div>
          <h1 className="text-2xl text-white font-bold">{name}</h1>
          <div className="text-xl text-gray-300 font-medium">{occupation}</div>
          <div className="text-base text-gray-300">{date}</div>
        </div>
        {vid && (
          <div>
            <a
              href={vid}
              target="_blank"
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-200 hover:text-green-900 trans-300 text-green-700"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 mr-2" /> View
              Talk
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
