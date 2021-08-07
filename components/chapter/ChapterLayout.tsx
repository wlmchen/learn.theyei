import React from 'react'
import mcq from '@/data/mcq'
import FRQPage from './frq/FRQPage'
import MCQPage from './mcq/MCQPage'
import Sidebar from './sidebar/Sidebar'
import SlidesPage from './slides/SlidesPage'
import { kebabCase } from '@/lib/utils'
import ProgressSelect from './ProgressSelect'

function ChapterLayout({ categories, modules, slug, sectionType }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const kebabChapters = []
  mcq[kebabCategories.indexOf(slug[0])].forEach((item) =>
    kebabChapters.push(kebabCase(item.title))
  )
  return (
    <div className="flex flex-row min-h-full">
      <Sidebar categories={categories} modules={modules} />

      <div className="w-full flex items-start justify-center pt-10 px-5">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl font-bold">
            {
              mcq[kebabCategories.indexOf(slug[0])][
                kebabChapters.indexOf(slug[1])
              ].title
            }
          </h1>
          <p>
            {
              mcq[kebabCategories.indexOf(slug[0])][
                kebabChapters.indexOf(slug[1])
              ].desc
            }
          </p>
          <br />
          {sectionType === 'slides' ? (
            <div>
              <SlidesPage
                categories={kebabCategories}
                chapters={kebabChapters}
                slug={slug}
              />
            </div>
          ) : (
            ''
          )}
          {sectionType === 'mcq-practice' ? (
            <MCQPage
              categories={kebabCategories}
              chapters={kebabChapters}
              slug={slug}
            />
          ) : (
            ''
          )}
          {sectionType === 'frq-practice' ? (
            <FRQPage
              categories={kebabCategories}
              chapters={kebabChapters}
              slug={slug}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default ChapterLayout
