import { AllCombinedData, FRQChapter, MCQ, Slide } from 'types'
import React, { useEffect, useState } from 'react'
import {
  allChapters,
  allKebabChapters,
  categories,
  kebabCategories,
} from '@/data/routes'

import { InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'

type UncompleteModuleProps = {
  allCombinedData: AllCombinedData
}

function UncompleteModule({
  allCombinedData: { slideData, mcqData, frqData },
}: UncompleteModuleProps) {
  const [suggestion, setSuggestion] = useState<Slide | MCQ | FRQChapter>()
  useEffect(() => {
    if (slideData && mcqData && frqData) {
      let incompleteSlides = slideData
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((item) => (item.progress = 'in-progress'))

      let incompleteMCQs = mcqData
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((item) => item.score / item.totalPoints < 0.6)

      let incompleteFRQs = frqData
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((item) => item.frqProgress === 'in-progress')

      if (incompleteSlides.length !== 0) {
        // If there are incomplete slides, suggest the oldest one on the list
        setSuggestion(
          slideData
            .slice()
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.progress === 'in-progress')[0]
        )
      } else if (incompleteMCQs.length !== 0) {
        // If there are incomplete mcqs, suggest the oldest one on the list
        setSuggestion(
          mcqData
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.score / item.totalPoints < 0.6)[0]
        )
      } else if (incompleteFRQs.length !== 0) {
        // If there are incomplete frqs, suggest the oldest one on the list
        console.log(
          frqData
            .slice()
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.frqProgress === 'in-progress')[0].chapter
        )
        setSuggestion(
          frqData
            .slice()
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .filter((item) => item.frqProgress === 'in-progress')[0]
        )
      } else {
      }
    }
  }, [slideData, mcqData, frqData])
  return (
    <>
      {suggestion && (
        <>
          {suggestion.type === "slide" ? (
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
                      :{' '}
                      {
                        allChapters[
                          allKebabChapters.indexOf(suggestion.chapter)
                        ]
                      }
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
          {suggestion.type === "mcq" ? (
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
                      :{' '}
                      {
                        allChapters[
                          allKebabChapters.indexOf(suggestion.chapter)
                        ]
                      }
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
          {suggestion.type === "frq-chapter" ? (
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
                    Looks like you didn't finish all of the{' '}
                    <span className="font-bold italic">
                      {categories[kebabCategories.indexOf(suggestion.category)]}
                      :{' '}
                      {
                        allChapters[
                          allKebabChapters.indexOf(suggestion.chapter)
                        ]
                      }
                    </span>{' '}
                    FRQs. Do you want to finish it right now?
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link
                      href={`/category/${suggestion.category}/${suggestion.chapter}/frq-practice`}
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
