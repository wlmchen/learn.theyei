import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import links from '../../../data/content/econOlympiadRegistration'

export default function Register() {
  const [open, setOpen] = useState(false)
  const [selectedName, setName] = useState(links[0].name)
  const [selectedLink, setLink] = useState(links[0].href)

  return (
    <div className="mt-6 relative " style={{ zIndex: 49 }}>
      <div>
        <div className="mt-1 relative focus:outline-none">
          <button
            type="button"
            aria-haspopup="listbox"
            onClick={() => setOpen(!open)}
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none  sm:text-md"
          >
            <span className="block truncate">{selectedName}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* Heroicon name: solid/selector */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className={`${
              open
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            } absolute mt-1 w-full rounded-md bg-white shadow-lg trans-150 focus:outline-none`}
          >
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              style={{ zIndex: 49 }}
              className="bg-white max-h-40 relative rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-md"
            >
              {links.map(({ name, href }) => {
                const active = name === selectedName
                return (
                  <li
                    key={name}
                    id="listbox-option-0"
                    role="option"
                    className={
                      'cursor-pointer hover:bg-gray-100 trans-150 text-gray-900  focus:outline-none  relative py-2 pl-3 pr-9 ' +
                      (active ? 'bg-gray-100' : '')
                    }
                    onClick={() => {
                      setName(name)
                      setLink(href)
                      setOpen(false)
                    }}
                  >
                    <span
                      className={`${
                        active ? 'font-semibold' : 'font-normal'
                      } block truncate`}
                    >
                      {name}
                    </span>

                    {active && (
                      <span className="text-green-600 absolute inset-y-0 right-0 flex items-center pr-4">
                        {/* Heroicon name: solid/check */}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                )
              })}
              {/* More items... */}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        If your school is a YEI chapter, please select it in the dropdown.
      </div>
      <a
        href={selectedLink}
        target="_blank"
        className="mt-3 inline-flex items-center justify-center z-0 text-white px-5 py-3 border border-transparent text-md font-medium rounded-md bg-yei-primary-main hover:bg-yei-primary-darker trans-300"
      >
        Register
        <FontAwesomeIcon
          icon={faArrowRight}
          className="-mr-1 ml-3 h-4 w-4 text-gray-200"
        />
      </a>
    </div>
  )
}
