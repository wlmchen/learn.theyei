import React from 'react'

const appCriteria = [
  'History of club excellence',
  'Club involvement with YEI activities',
  'Experience with service and tutoring',
  'Club volunteer capacity',
]

export default function ApplicationCriteria() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Application Criteria
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            EconClub applications for FLIP are evaluated on the following
            criteria. Apply for FLIP with{' '}
            <a
              href="https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform"
              target="_blank"
              className="green-link"
            >
              this form
            </a>
            .
          </p>
        </div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {appCriteria.map((c, i) => (
            <div key={c}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                <h1 className="text-xl font-extrabold">{i + 1}</h1>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {c}
                </dt>
                {/* <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd> */}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
