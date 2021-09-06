import routes, { kebabCategories, kebabChapters } from '@/data/routes'
import { kebabCase } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

function PrevNextBar({ slug }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  let prevCategory = kebabCategories[kebabCategories.indexOf(slug[0]) - 1]
  let nextCategory = kebabCategories[kebabCategories.indexOf(slug[0]) + 1]
  console.log(kebabChaptersSelection, kebabChapters)
  let prevChapter =
    kebabChaptersSelection[kebabChaptersSelection.indexOf(slug[1]) - 1]
  let nextChapter =
    kebabChaptersSelection[kebabChaptersSelection.indexOf(slug[1]) + 1]
  let prevModule =
    slug[2] === 'slides'
      ? 'frq-practice'
      : slug[2] === 'mcq-practice'
      ? 'slides'
      : 'mcq-practice'
  let nextModule =
    slug[2] === 'slides'
      ? 'mcq-practice'
      : slug[2] === 'mcq-practice'
      ? 'frq-practice'
      : 'slides'
  return (
    <div className="w-full p-5 flex justify-between">
      {prevChapter === undefined && prevModule === 'frq-practice' ? (
        <>
          {prevCategory !== undefined ? (
            <Link
              href={`/category/${prevCategory}/${kebabCase(
                routes[kebabCategories.indexOf(slug[0]) - 1].children[
                  routes[kebabCategories.indexOf(slug[0]) - 1].children.length -
                    1
                ]
              )}/frq-practice`}
            >
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                Prev
              </span>
            </Link>
          ) : (
            <span></span>
          )}
        </>
      ) : (
        <>
          {prevModule === 'frq-practice' ? (
            <Link href={`/category/${slug[0]}/${prevChapter}/${prevModule}`}>
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                Prev
              </span>
            </Link>
          ) : (
            <Link href={`/category/${slug[0]}/${slug[1]}/${prevModule}`}>
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                Prev
              </span>
            </Link>
          )}
        </>
      )}
      {nextChapter === undefined && nextModule === 'frq-practice' ? (
        <>
          {nextCategory !== undefined ? (
            <Link
              href={`/category/${nextCategory}/${kebabCase(
                routes[kebabCategories.indexOf(slug[0]) + 1].children[
                  routes[kebabCategories.indexOf(slug[0]) + 1].children.length -
                    1
                ]
              )}/slides`}
            >
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                Next
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </span>
            </Link>
          ) : (
            <span></span>
          )}
        </>
      ) : (
        <>
          {nextModule === 'slides' ? (
            <Link href={`/category/${slug[0]}/${nextChapter}/${nextModule}`}>
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                Next
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </span>
            </Link>
          ) : (
            <Link href={`/category/${slug[0]}/${slug[1]}/${nextModule}`}>
              <span className="flex items-center font-semibold text-gray-600 cursor-pointer">
                Next
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </span>
            </Link>
          )}
        </>
      )}
    </div>
  )
}

export default PrevNextBar
