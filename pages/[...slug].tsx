import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import ChapterLayout from '@/components/chapter/ChapterLayout'
import { kebabCase } from '@/lib/utils'
import { useAuth } from '@/lib/auth'
import UnitLayout from '@/components/unit/UnitLayout'
import Layout from './../components/global/Layout'

const Chapter = () => {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []

  const [sectionType, setSectionType] = useState('')

  let categories = ['General', 'Micro', 'Macro']

  let modules = ['Slides', 'MCQ Practice', 'FRQ Practice']
  const kebabModules = []
  modules.forEach((item) => kebabModules.push(kebabCase(item)))

  useEffect(() => {
    setSectionType(slug[2])
  }, [router])

  return (
    <Layout showNav={slug.length === 1}>
      {auth.user ? (
        <div className="w-full">
          {slug.length === 1 ? (
            <UnitLayout unit={slug[0]} />
          ) : (
            <>
              {kebabModules.indexOf(sectionType) !== -1 ? (
                <ChapterLayout
                  categories={categories}
                  modules={modules}
                  slug={slug}
                  sectionType={sectionType}
                />
              ) : (
                ''
              )}
            </>
          )}
        </div>
      ) : (
        ''
      )}
    </Layout>
  )
}

export default Chapter
