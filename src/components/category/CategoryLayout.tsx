import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@heroicons/react/outline'

import Link from 'next/link'
import MCQPage from './mcq/MCQPage'
import PrevNextBar from './PrevNextBar'
import React from 'react'
import Sidebar from './sidebar/Sidebar'
import SlidesPage from './slides/SlidesPage'
import { kebabCase } from '@/lib/utils'
import routes from '@/data/routes'

function CategoryLayout({ slug, sectionType, children }) {
  return (
    <div className="flex flex-row min-h-full w-full">
      <Sidebar>
        <PrevNextBar slug={slug} />
        <div className="my-14 w-full flex items-start justify-center px-6">
          <div className="max-w-4xl w-full leading-relaxed">
            {children}
            {sectionType === 'slides' ? (
              <div>
                <SlidesPage slug={slug} />
              </div>
            ) : (
              ''
            )}
            {sectionType === 'mcq-practice' ? (
              <div>
                <MCQPage slug={slug} />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <PrevNextBar slug={slug} />
      </Sidebar>
    </div>
  )
}

export default CategoryLayout
