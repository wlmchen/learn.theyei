import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import CategoryLayout from '@/components/category/CategoryLayout'
import { kebabCase } from '@/lib/utils'
import { useAuth } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import Layout from '../components/global/Layout'
import routes from '@/data/routes'

export default function general() {
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
    <>
      {auth.user ? (
        <Layout page="general" showNav={true}>
          <div className="w-full">
            <DashboardLayout
              title="Macro"
              description="This section covers the basics of economics. Here's to the start of your adventure in economics!"
              slug={slug}
            />
          </div>
        </Layout>
      ) : (
        ''
      )}
    </>
  )
}
