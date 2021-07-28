import React from 'react'

const qualities = [
  {
    title: 'Skillset',
    content:
      'We’re looking for students with the skills necessary to take on challenging research positions and internships.',
  },
  {
    title: 'Drive',
    content:
      'Do you push yourself out of your comfort zone? Are you willing to work hard and take on challenges?',
  },
  {
    title: 'Collaboration',
    content:
      'Research assistants and interns often work in group environments. Do you work well with others? Are you a team player?',
  },
]

export default function GreatCandidate() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-yei-primary-main uppercase">
          Apply
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          What Makes a Great Candidate?
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          EARN applications are evaluated on the following criteria. Apply for
          EARN with{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform"
            target="_blank"
            className="green-link"
          >
            this form
          </a>
          .
        </p>
        <div className="mt-12">
          <div className="flex justify-content-center gap-8 md:flex-row flex-col">
            {qualities.map(({ title, content }, index) => (
              <div key={title} className="pt-6 flex-root md:w-1/3">
                <div className="flow-root bg-gray-50 h-full rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-yei-primary-main rounded-md shadow-lg">
                        {/* Heroicon name: cloud-upload */}
                        <h1 className="font-extrabold text-xl text-white w-7">
                          {index + 1}
                        </h1>
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900 tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
