import { useRouter } from 'next/router'

import { useAuth } from '@/lib/auth'

import Dashboard from '@/components/dashboard/Dashboard'
import Layout from '@/components/global/Layout'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton'
import { kebabCategories } from '@/data/routes'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'

export default function dashboard() {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []

  const [allData, setAllData] = useState([])

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])
  const [mutatedFRQData, setMutatedFRQData] = useState([])

  const [allDataWithMutation, setAllDataWithMutation] = useState([])

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

  let completedFRQData = []
  let newFRQData = []
  useEffect(() => {
    if (slideProgressData && mcqScoreData && frqScoreData) {
      // console.log(slideProgressData, mcqScoreData, frqScoreData)
      setCompletedSlides(
        slideProgressData.progress?.filter((item) => {
          return item.progress === 'completed'
        }) || []
      )
      setCompletedMCQs(mcqScoreData?.score || [])
      setCompletedFRQs(frqScoreData?.score || [])

      console.log('start of frq data ', frqScoreData)

      frqs.forEach((category, index) => {
        category.forEach((chapter, index2) => {
          if (
            chapter.numberOfFRQs ===
            frqScoreData.score.filter(
              (item) =>
                item.chapter === kebabCase(chapter.title) &&
                item.category === kebabCategories[index]
            ).length
          ) {
            completedFRQData.push({
              category: kebabCategories[index],
              chapter: kebabCase(chapter.title),
              frqProgress: 'completed',
            })
            newFRQData.push({
              category: kebabCategories[index],
              chapter: kebabCase(chapter.title),
              frqProgress: 'completed',
            })
          } else if (
            frqScoreData.score.filter(
              (item) =>
                item.chapter === kebabCase(chapter.title) &&
                item.category === kebabCategories[index]
            ).length >= 1
          ) {
            newFRQData.push({
              category: kebabCategories[index],
              chapter: kebabCase(chapter.title),
              frqProgress: 'in-progress',
            })
          }
        })
      })
      setCompletedFRQs(completedFRQData)
      setMutatedFRQData(newFRQData)
      setAllData([
        ...slideProgressData.progress,
        ...mcqScoreData.score,
        ...frqScoreData.score,
      ])
      setAllDataWithMutation([
        ...slideProgressData.progress,
        ...mcqScoreData.score,
        ...newFRQData,
      ])
      console.log('new', newFRQData)
      // console.log(frqScoreData)
    }
  }, [slideProgressData, mcqScoreData, frqScoreData])

  useEffect(() => {
    if (!auth.user) {
      router.push('/')
    }
  }, [auth])
  return (
    <>
      {auth.user && {
        allData,
        mutatedFRQData,
      } ? (
        <Layout page="dashboard" showNav contentLoaded>
          <div className="w-full">
            <Dashboard
              allData={allData}
              allDataWithMutation={allDataWithMutation}
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
