import { useRouter } from 'next/router'

import { useAuth } from '@/lib/auth'

import Layout from '@/components/global/Layout'
import Dashboard from '@/components/category/dashboard/Dashboard'
import { kebabCase } from '@/lib/utils'
import fetcher from '@/utils/fetcher'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import DashboardSkeleton from '@/components/category/dashboard/DashboardSkeleton'
import frqs from '@/data/frqs'
import { kebabCategories } from '@/data/routes'

export default function general() {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []
  const { data: slideProgressData } = useSWR(
    auth.user ? [`/api/slides/micro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: mcqScoreData } = useSWR(
    auth.user ? [`/api/mcqs/micro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: frqScoreData } = useSWR(
    auth.user ? [`/api/frqs/micro/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])

  const [mutatedFRQData, setMutatedFRQData] = useState([])
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
      console.log('new', newFRQData)
      // console.log(frqScoreData)
    }
  }, [slideProgressData, mcqScoreData, frqScoreData])
  return (
    <>
      {auth.user && {
        completedSlides,
        completedMCQs,
        completedFRQs,
        mutatedFRQData,
      } ? (
        <Layout page="micro" showNav contentLoaded>
          <div className="w-full">
            <Dashboard
              title="Micro"
              description="This section covers microeconomics, the economics of individual firms and markets."
              moduleData={{ slideProgressData, mcqScoreData, mutatedFRQData }}
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
        <Layout page="macro" showNav>
          <div className="w-full">
            <DashboardSkeleton />
          </div>
        </Layout>
      )}
    </>
  )
}
