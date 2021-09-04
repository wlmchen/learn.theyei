import { useRouter } from 'next/router'

import { useAuth } from '@/lib/auth'

import Dashboard from '@/components/dashboard/Dashboard'
import Layout from '../components/global/Layout'
import { useEffect, useState } from 'react'
import { kebabCase } from '@/lib/utils'
import routes from '@/data/routes'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import DashboardSkeleton from './../components/dashboard/DashboardSkeleton'

export default function dashboard() {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []

  const [allData, setAllData] = useState([])

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])

  const { data: slideProgressData } = useSWR(
    auth.user ? [`/api/slides/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: mcqScoreData } = useSWR(
    auth.user ? [`/api/mcqs/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: frqScoreData } = useSWR(
    auth.user ? [`/api/frqs/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )

  useEffect(() => {
    if (slideProgressData && mcqScoreData && frqScoreData) {
      setAllData([...slideProgressData.progress, ...mcqScoreData.score])

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
      {auth.user && allData ? (
        <Layout page="dashboard" showNav>
          <div className="w-full">
            <Dashboard
              allData={allData}
              moduleData={{ slideProgressData, mcqScoreData, frqScoreData }}
              completedData={{ completedSlides, completedMCQs, completedFRQs }}
              slug={slug}
            />
          </div>
        </Layout>
      ) : (
        <Layout page="dashboard" showNav>
          <div className="w-full">
            <DashboardSkeleton />
          </div>
        </Layout>
      )}
    </>
  )
}
