import { useEffect, useState } from 'react'

import { AllCombinedData } from 'types'
import Dashboard from '@/components/category/dashboard/Dashboard'
import DashboardSkeleton from '@/components/category/dashboard/DashboardSkeleton'
import Layout from '@/components/global/Layout'
import SignInReminder from '@/components/global/SignInReminder'
import fetcher from '@/utils/fetcher'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'
import { kebabCategories } from '@/data/routes'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function general() {
  const auth = useAuth()

  const { data: slideProgressData } = useSWR(
    auth.user
      ? [`/api/slides/general/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )
  const { data: mcqScoreData } = useSWR(
    auth.user ? [`/api/mcqs/general/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )
  const { data: frqScoreData } = useSWR(
    auth.user ? [`/api/frqs/general/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  )

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])


  const [allCombinedData, setAllCombinedData] = useState<AllCombinedData>({
    slideData: [],
    mcqData: [],
    frqData: [],
  })

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
      
      setAllCombinedData({
        slideData: [...slideProgressData.progress],
        mcqData: [...mcqScoreData.score],
        frqData: [...newFRQData], // difference is here. all indv FRQs are combined into one object per chapter
      })
    }
  }, [slideProgressData, mcqScoreData, frqScoreData])
  return (
    <>
      <SignInReminder condition={auth.user}>
        {{
          completedSlides,
          completedMCQs,
          completedFRQs,
          mutatedFRQData,
        } ? (
          <Layout title="General" page="general" showNav contentLoaded>
            <div className="w-full">
              <Dashboard
                title="General"
                description="This section covers the basics of economics. Here's to the start of your adventure in economics!"
                allCombinedData={allCombinedData}
                completedData={{
                  completedSlides,
                  completedMCQs,
                  completedFRQs,
                }}
              />
            </div>
          </Layout>
        ) : (
          <Layout title="General" page="general" showNav>
            <div className="w-full">
              <DashboardSkeleton />
            </div>
          </Layout>
        )}
      </SignInReminder>
    </>
  )
}
