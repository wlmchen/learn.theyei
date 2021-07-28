import React from 'react'
import Partners from './flip/Partners'

export default function ContentBlock({
  subtitle,
  title,
  children,
  imgSrc,
  boa,
}: ContentBlockProps) {
  return (
    <div id="learn-more" className="bg-white overflow-hidden sm:pt-4">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"
          style={{ zIndex: -10 }}
        ></div>
        <div className="mx-auto text-base max-w-prose lg:max-w-none relative z-20">
          <h2 className="text-base text-yei-primary-main font-semibold tracking-wide uppercase">
            {subtitle}
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h3>
        </div>
        <div className="mt-8 lg:grid grid-cols-12 lg:space-x-10 xl:space-x-12">
          <div className="mt-8 lg:mt-0 col-span-6 h-100">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <div className="text-lg text-gray-600 space-y-4">{children}</div>
            </div>
          </div>
          <div className="relative col-span-5 col-start-7 flex lg:max-w-none max-w-prose mx-auto lg:mt-0 mt-8">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto my-auto">
              <img
                className="rounded-lg shadow-lg object-cover object-center w-100"
                src={imgSrc}
                alt={title}
              />
            </div>
          </div>
        </div>
        {boa && <Partners />}
      </div>
    </div>
  )
}

type ContentBlockProps = {
  subtitle: string
  title: string
  children: any
  imgSrc: string
  boa?: any
}
