import { useEffect, useState } from 'react'

import Dashboard from '@/components/category/dashboard/Dashboard'
import DashboardSkeleton from '@/components/category/dashboard/DashboardSkeleton'
import Layout from '@/components/global/Layout'
import fetcher from '@/utils/fetcher'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'
import { kebabCategories } from '@/data/routes'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'

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

  const [mutatedFRQData, setMutatedFRQData] = useState([])
  let completedFRQData = []
  let newFRQData = []
  useEffect(() => {
    if (slideProgressData && mcqScoreData && frqScoreData) {
      setCompletedSlides(
        slideProgressData.progress?.filter((item) => {
          return item.progress === 'completed'
        }) || []
      )
      setCompletedMCQs(mcqScoreData?.score || [])
      setCompletedFRQs(frqScoreData?.score || [])

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
        <Layout title="Macro" page="macro" showNav contentLoaded>
          <div className="w-full">
            <Dashboard
              title="Macro"
              description="This section covers macroeconomics, economics on a national and global scale."
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
        <Layout title="Macro" page="macro" showNav>
          <div className="w-full">
            <DashboardSkeleton />
          </div>
        </Layout>
      )}
    </>
  )
}
