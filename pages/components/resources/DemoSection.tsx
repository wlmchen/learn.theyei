import React from 'react'

export default function DemoSection({
  title,
  content,
  ctaBtn,
  imgUrl,
  darkerBg,
  imgLink,
}: DemoSectionProps) {
  return (
    <div className={`relative py-24 ${darkerBg ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{content}</p>
              {ctaBtn && <div className="mt-6">{ctaBtn}</div>}
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="px-4 md:px-8 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <a href={imgLink} target="_blank">
              <img
                className="w-full rounded-xl bg-yei-secondary-main shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={imgUrl}
                alt={title}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

type DemoSectionProps = {
  title: string
  content: string
  ctaBtn?: any
  imgUrl?: string
  darkerBg?: boolean
  imgLink?: string
}
