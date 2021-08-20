import React from 'react'
import routes from '@/data/routes'
import FRQPage from './frq/FRQPage'
import MCQPage from './mcq/MCQPage'
import Sidebar from './sidebar/Sidebar'
import SlidesPage from './slides/SlidesPage'
import { kebabCase } from '@/lib/utils'
import ProgressSelect from './ProgressSelect'

function ChapterLayout({ categories, modules, slug, sectionType, children }) {
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const chapters = []
  const kebabChapters = []
  routes[kebabCategories.indexOf(slug[0])].children.forEach((item) => {
    chapters.push(item)
    kebabChapters.push(kebabCase(item))
  })
  return (
    <div className="flex flex-row min-h-full w-full">
      <Sidebar categories={categories} modules={modules}>
        <div className="my-14 w-full flex items-start justify-center px-5">
          <div className="max-w-4xl w-full px-5 leading-relaxed">
            {children}
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
              <div>
                <MCQPage
                  categories={kebabCategories}
                  chapters={kebabChapters}
                  slug={slug}
                />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default ChapterLayout
