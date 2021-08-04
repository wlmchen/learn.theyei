import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Sidebar from '../components/sidebar/Sidebar'
import SlidesPage from '../components/slides/SlidesPage'
import MCQPage from './../components/mcq/MCQPage'
import FRQPage from './../components/frq/FRQPage'

import Markdown from 'markdown-to-jsx'


const General = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  const [sectionType, setSectionType] = useState('')

  let categories = ['General', 'Micro', 'Macro']
  let modules = ['Slides', 'MCQ Practice', 'FRQs']

  useEffect(() => {
    setSectionType(slug[2])
  }, [router])

  return (
    <div className="flex flex-row min-h-full">
      <Sidebar categories={categories} modules={modules} />

      <div className="w-full flex items-start justify-center pt-10 px-5">
        <div className="max-w-3xl w-full">
          {sectionType === 'slides' ? (
            <div>
              <SlidesPage categories={categories} info={slug} />
            </div>
          ) : (
            ''
          )}
          {sectionType === 'mcq-practice' ? (
            <MCQPage categories={categories} info={slug} />
          ) : (
            ''
          )}
          {sectionType === 'frqs' ? (
            <FRQPage categories={categories} info={slug} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default General
