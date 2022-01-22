import { useEffect, useMemo, useState } from 'react'

import { AllCombinedData } from '@/types/index'
import Dashboard from 'src/components/category/dashboard/Dashboard'
import DashboardSkeleton from 'src/components/category/dashboard/DashboardSkeleton'
import Layout from 'src/components/global/Layout'
import SignInReminder from 'src/components/global/SignInReminder'
import fetcher from '@/utils/fetcher'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'
import { kebabCategories } from '@/data/routes'
import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

export default function Macro() {
  const auth = useAuth()

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

  const [allCombinedData, setAllCombinedData] = useState<AllCombinedData>({
    slideData: [],
    mcqData: [],
    frqData: [],
  })

  const [mutatedFRQData, setMutatedFRQData] = useState([])
  let completedFRQData = useMemo(() => [], [])
  let newFRQData = useMemo(() => [], [])
  const hi = 'hi'
  useEffect(() => {
    if (slideProgressData && mcqScoreData && frqScoreData) {
      setCompletedSlides(
        slideProgressData?.filter((item) => {
          return item.progress === 'completed'
        }) || []
      )
      setCompletedMCQs(mcqScoreData?.score || [])
      setCompletedFRQs(frqScoreData?.score || [])

      frqs.forEach((category, index) => {
        category.forEach((chapter) => {
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
        slideData: slideProgressData,
        mcqData: [...mcqScoreData.score],
        frqData: [...newFRQData], // difference is here. all indv FRQs are combined into one object per chapter
      })
    }
  }, [
    slideProgressData,
    mcqScoreData,
    frqScoreData,
    completedFRQData,
    newFRQData,
  ])
  return (
    <>
      <SignInReminder condition={auth.user}>
        {{
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
          <Layout title="macro" page="macro" showNav>
            <div className="w-full">
              <DashboardSkeleton />
            </div>
          </Layout>
        )}
      </SignInReminder>
    </>
  )
}
