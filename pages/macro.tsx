import { useRouter } from 'next/router'

import { useAuth } from '@/lib/auth'

import Layout from '@/components/global/Layout'
import Dashboard from '@/components/category/dashboard/Dashboard'
import { kebabCase } from '@/lib/utils'
import fetcher from '@/utils/fetcher'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import DashboardSkeleton from '@/components/category/dashboard/DashboardSkeleton'

export default function general() {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []
  const { data: slideProgressData } = useSWR(
    auth.user ? [`/api/slides/macro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: mcqScoreData } = useSWR(
    auth.user ? [`/api/mcqs/macro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: frqScoreData } = useSWR(
    auth.user ? [`/api/frqs/macro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])

  useEffect(() => {
    if (slideProgressData && mcqScoreData) {
      // console.log(slideProgressData, mcqScoreData, frqScoreData)
      setCompletedSlides(
        slideProgressData.progress?.filter((item) => {
          return item.progress === 'completed'
        }) || []
      )
      setCompletedMCQs(mcqScoreData?.score || [])
      setCompletedFRQs(frqScoreData?.score || [])
    }
  }, [slideProgressData, mcqScoreData, frqScoreData])
  return (
    <>
      {auth.user && { completedSlides, completedMCQs, completedFRQs } ? (
        <Layout page="macro" showNav contentLoaded>
          <div className="w-full">
            <Dashboard
              title="Macro"
              description="This section covers the basics of economics. Here's to the start of your adventure in economics!"
              moduleData={{ slideProgressData, mcqScoreData }}
              completedData={{
                completedSlides,
                completedMCQs,
                completedFRQs,
              }}
              slug={slug}
            />
          </div>
        </Layout>
      ) : (
        <Layout page="general" showNav>
          <div className="w-full">
            <DashboardSkeleton />
          </div>
        </Layout>
      )}
    </>
  )
}
