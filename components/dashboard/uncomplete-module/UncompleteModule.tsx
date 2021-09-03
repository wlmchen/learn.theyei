import { InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function UncompleteModule({
  allData,
  courseData: { categories, chapters, kebabCategories, kebabChapters },
}) {
  const [suggestion, setSuggestion] = useState({
    progress: '',
    category: '',
    chapter: '',
    userChoices: '',
    totalPoints: '',
    score: '',
  })
  useEffect(() => {
    if (allData) {
      let checkingForIncompleteSlides = allData
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((item) => item.progress === 'in-progress')
      if (checkingForIncompleteSlides.length === 0) {
        setSuggestion(
          allData
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.score / item.totalPoints < 0.6)[0] || null
        )
      } else {
        setSuggestion(
          allData
            .slice()
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.progress === 'in-progress')[0]
        )
      }
    }
  }, [allData])
  return (
    <>
      {suggestion && (
        <>
          {suggestion.progress !== '' ? (
            <div className="mb-8 rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    Looks like you didn't finish the{' '}
                    <span className="font-bold italic">
                      {categories[kebabCategories.indexOf(suggestion.category)]}
                      : {chapters[kebabChapters.indexOf(suggestion.chapter)]}
                    </span>{' '}
                    slides. Do you want to finish it right now?
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link
                      href={`/category/${suggestion.category}/${suggestion.chapter}/slides`}
                    >
                      <span className="cursor-pointer whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                        Sure! <span aria-hidden="true">&rarr;</span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {suggestion.userChoices !== '' ? (
            <div className="mb-8 rounded-md bg-blue-50 p-4 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex items-center md:justify-between">
                  <p className="text-sm text-blue-700 max-w-xl">
                    Looks like you only scored a {suggestion.score}/
                    {suggestion.totalPoints} on the{' '}
                    <span className="font-bold italic">
                      {categories[kebabCategories.indexOf(suggestion.category)]}
                      : {chapters[kebabChapters.indexOf(suggestion.chapter)]}
                    </span>{' '}
                    multiple choice quiz. Would you like to give it another
                    shot?
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link
                      href={`/category/${suggestion.category}/${suggestion.chapter}/mcq-practice`}
                    >
                      <span className="cursor-pointer whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                        Sure! <span aria-hidden="true">&rarr;</span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
      )}
    </>
  )
}

export default UncompleteModule