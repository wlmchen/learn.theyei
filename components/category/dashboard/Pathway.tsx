import React, { useEffect } from 'react'
import routes, { kebabCategories } from '@/data/routes'
import Link from 'next/link'
import { kebabCase } from '@/lib/utils'
import { BookOpenIcon, CheckIcon, XIcon } from '@heroicons/react/outline'

function Pathway({
  title,
  scoreData: { slideProgressData, mcqScoreData, mutatedFRQData },
}) {
  const slideDataNamesOnly = []
  slideProgressData?.progress.forEach((item) => {
    slideDataNamesOnly.push(`${item.category}/${item.chapter}`)
  })
  const mcqDataNamesOnly = []
  mcqScoreData?.score.forEach((item) => {
    mcqDataNamesOnly.push(`${item.category}/${item.chapter}`)
  })
  const frqDataNamesOnly = []
  mutatedFRQData?.forEach((item) => {
    frqDataNamesOnly.push(`${item.category}/${item.chapter}`)
  })
  const getSlides = (item) => {
    return (
      slideProgressData?.progress[
        slideDataNamesOnly.indexOf(`${kebabCase(title)}/${kebabCase(item)}`)
      ]?.progress || 'not-started'
    )
  }
  const getMCQs = (item) => {
    return mcqScoreData?.score[
      mcqDataNamesOnly.indexOf(`${kebabCase(title)}/${kebabCase(item)}`)
    ]
  }

  const getFRQs = (item) => {
    console.log(item)
    return (
      mutatedFRQData[
        frqDataNamesOnly.indexOf(`${kebabCase(title)}/${kebabCase(item)}`)
      ].frqProgress || 'not-started'
    )
  }
  return (
    <div className="sm:flex sm:items-start smLjustify-center sm:flex-row">
      <div
        className={`pl-8 sm:pr-8 py-8 max-w-xs text-left sm:text-right border-l-2 border-dashed ${
          getSlides(
            routes[kebabCategories.indexOf(kebabCase(title))].children[0]
          ) === 'completed' &&
          getMCQs(routes[kebabCategories.indexOf(kebabCase(title))].children[0])
            ? 'border-yei-primary-main'
            : getSlides(
                routes[kebabCategories.indexOf(kebabCase(title))].children[0]
              ) !== 'not-started' ||
              getMCQs(
                routes[kebabCategories.indexOf(kebabCase(title))].children[0]
              )
            ? 'border-yellow-500'
            : 'border-gray-400'
        } sm:border-0`}
      >
        <h2 className="text-2xl mb-2">Chapters</h2>
        <p className="text-sm text-gray-500">
          Here's the pathway in order to complete the {title} section.
        </p>
      </div>
      <div className="m-auto w-auto">
        {routes[kebabCategories.indexOf(kebabCase(title))].children.map(
          (item, index) => {
            return (
              <div
                key={index}
                className={`relative pl-8 py-8 border-l-2 ${
                  getSlides(item) === 'completed' && getMCQs(item)
                    ? 'border-yei-primary-main'
                    : getSlides(item) !== 'not-started' || getMCQs(item)
                    ? 'border-yellow-500'
                    : 'border-gray-400'
                }`}
              >
                <div
                  className={`absolute top-1/2 h-4 w-4 border-2 ${
                    getSlides(item) === 'completed' && getMCQs(item)
                      ? 'border-yei-primary-main bg-yei-primary-lighter'
                      : getSlides(item) !== 'not-started' || getMCQs(item)
                      ? 'border-yellow-500 bg-yellow-400'
                      : 'border-gray-400 bg-gray-300'
                  } rounded-full `}
                  style={{
                    transform: 'translate(-220%, -50%)',
                    marginLeft: '-6px',
                  }}
                ></div>
                <div>
                  <Link
                    href={`/category/${kebabCase(title)}/${kebabCase(
                      item
                    )}/slides`}
                  >
                    <h3 className="text-xl font-medium cursor-pointer">
                      {item}
                    </h3>
                  </Link>
                  <div className="mt-2 flex flex-col sm:flex-row space-y-1 space-y-0 sm:space-y-0 sm:space-x-2 text-gray-400 font-semibold text-sm">
                    <div className="flex items-center cursor-pointer">
                      <Link
                        href={`/category/${kebabCase(title)}/${kebabCase(
                          item
                        )}/slides`}
                      >
                        <div className="flex items-center ">
                          {slideDataNamesOnly.indexOf(
                            `${kebabCase(title)}/${kebabCase(item)}`
                          ) !== -1 ? (
                            getSlides(item) === 'completed' ? (
                              <CheckIcon className="mr-1 h-5 w-5 text-green-500" />
                            ) : getSlides(item) === 'in-progress' ? (
                              <BookOpenIcon className="mr-1 h-5 w-5 text-yellow-500" />
                            ) : (
                              <XIcon className="mr-1 h-5 w-5 text-gray-500" />
                            )
                          ) : (
                            <XIcon className="mr-1 h-5 w-5 text-gray-500" />
                          )}{' '}
                          Slides
                        </div>
                      </Link>
                    </div>
                    <div className="cursor-pointer">
                      <Link
                        href={`/category/${kebabCase(title)}/${kebabCase(
                          item
                        )}/mcq-practice`}
                      >
                        <div className="flex items-center ">
                          {mcqDataNamesOnly.indexOf(
                            `${kebabCase(title)}/${kebabCase(item)}`
                          ) !== -1 ? (
                            getMCQs(item) && (
                              <CheckIcon className="mr-1 h-5 w-5 text-green-500" />
                            )
                          ) : (
                            <XIcon className="mr-1 h-5 w-5 text-gray-500" />
                          )}
                          MCQ
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <Link
                        href={`/category/${kebabCase(title)}/${kebabCase(
                          item
                        )}/frq-practice`}
                      >
                        <div className="flex items-center ">
                          {frqDataNamesOnly.indexOf(
                            `${kebabCase(title)}/${kebabCase(item)}`
                          ) !== -1 ? (
                            getFRQs(item) === 'completed' ? (
                              <CheckIcon className="mr-1 h-5 w-5 text-green-500" />
                            ) : getFRQs(item) === 'in-progress' ? (
                              <BookOpenIcon className="mr-1 h-5 w-5 text-yellow-500" />
                            ) : (
                              <XIcon className="mr-1 h-5 w-5 text-gray-500" />
                            )
                          ) : (
                            <XIcon className="mr-1 h-5 w-5 text-gray-500" />
                          )}{' '}
                          FRQ
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Pathway
