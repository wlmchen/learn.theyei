import React, { useState } from 'react'

export default function FAQCollapse({ questions }) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {questions.map(({ q, a }) => (
              <Question key={q} q={q} a={a} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function Question({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="pt-6">
      <dt className="text-lg">
        {/* Expand/collapse question button */}
        <button
          onClick={() => {
            setOpen(!open)
          }}
          className="text-left w-full flex justify-between items-start text-gray-400"
        >
          <span className="font-medium text-gray-900">{q}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`${
                open ? '-rotate-180' : 'rotate-0'
              } h-6 w-6 transform trans-150`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 ${open ? 'block' : 'hidden'}`}>
        <p className="text-base text-gray-500">{a}</p>
      </dd>
    </div>
  )
}
