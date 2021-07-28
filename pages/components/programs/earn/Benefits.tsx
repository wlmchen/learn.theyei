import React from 'react'

const reasons = [
  {
    title: 'Efficient',
    content:
      'Think of EARN like a common application for economics internships. Instead of cold emailing hundreds of professors and companies, EARN applicants apply to dozens of internships at once through a single application.',
  },
  {
    title: 'Real-world experience',
    content:
      'EARN is one of the only programs that offer high schoolers the opportunity to gain real-world work experience, whether that’s assisting a professor with research at a world-class university or working as an intern at a top company.',
  },
  {
    title: 'Community',
    content:
      'By joining the EARN program, you’ll become part of a curated community of highly motivated economics students. EARN members will have the opportunity to expand their network by connecting with fellow economics enthusiasts, researchers, and interns.',
  },
]

export default function benefits() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-yei-primary-main uppercase tracking-wide">
            Why Apply?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Program Benefits
          </p>
          <p className="mt-4 text-lg text-gray-500">
            EARN provides economics students with opportunities to real-world
            experiences as well as access to a valuable community.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10">
            {reasons.map(({ title, content }) => (
              <div key={title} className="flex">
                {/* Heroicon name: check */}
                <svg
                  className="flex-shrink-0 h-6 w-6 mt-1 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="sm:text-xl text-lg leading-6 font-bold text-gray-900">
                    {title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{content}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
