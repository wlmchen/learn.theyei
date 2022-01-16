import { useEffect, useMemo, useState } from 'react'

import { AllCombinedData } from 'types'
import Dashboard from '@/components/dashboard/Dashboard'
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton'
import Layout from '@/components/global/Layout'
import fetcher from '@/utils/fetcher'
import frqs from '@/data/frqs'
import { kebabCase } from '@/lib/utils'
import { kebabCategories } from '@/data/routes'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function DashboardPage() {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []

  const [allIndividualData, setAllIndividualData] = useState([])

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])
  const [mutatedFRQData, setMutatedFRQData] = useState([])

  const [allCombinedData, setAllCombinedData] = useState<AllCombinedData>({
    slideData: [],
    mcqData: [],
    frqData: [],
  })

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
  const completedFRQData = useMemo(() => [], [])
  const newFRQData = useMemo(() => [], [])
  useEffect(() => {
    console.log({ slideProgressData })
    if (slideProgressData && mcqScoreData && frqScoreData) {
      setCompletedSlides(
        slideProgressData.filter((item) => {
          return item.progress === 'completed'
        }) || []
      )
      setCompletedMCQs(mcqScoreData?.score || [])
      setCompletedFRQs(frqScoreData?.score || [])

      frqs.forEach((category, index) => {
        // Groups FRQs together that are in the same chapter
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
              type: 'frq-chapter',
              category: kebabCategories[index],
              chapter: kebabCase(chapter.title),
              frqProgress: 'completed',
              createdAt: frqScoreData.score
                .filter(
                  (item) =>
                    item.chapter === kebabCase(chapter.title) &&
                    item.category === kebabCategories[index]
                )
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )[0].createdAt,
            })
          } else if (
            frqScoreData.score.filter(
              (item) =>
                item.chapter === kebabCase(chapter.title) &&
                item.category === kebabCategories[index]
            ).length >= 1
          ) {
            newFRQData.push({
              type: 'frq-chapter',
              category: kebabCategories[index],
              chapter: kebabCase(chapter.title),
              frqProgress: 'in-progress',
              createdAt: frqScoreData.score
                .filter(
                  (item) =>
                    item.chapter === kebabCase(chapter.title) &&
                    item.category === kebabCategories[index]
                )
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )[0].createdAt,
            })
          }
        })
      })
      setCompletedFRQs(completedFRQData)
      setMutatedFRQData(newFRQData)
      setAllIndividualData([
        ...slideProgressData,
        ...mcqScoreData.score,
        ...frqScoreData.score, // each FRQ question (even if in the same chapter) are seperate
      ])
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

  // useEffect(() => {
  //   if (!auth.user) {
  //     router.push('/')
  //   }
  // }, [auth])
  return (
    <>
      {auth.user && {
        allIndividualData,
        mutatedFRQData,
        allCombinedData,
      } ? (
        <Layout title="Dashboard" page="dashboard" showNav contentLoaded>
          <div className="w-full">
            <Dashboard
              allIndividualData={allIndividualData}
              allCombinedData={allCombinedData}
              completedData={{ completedSlides, completedMCQs, completedFRQs }}
              slug={slug}
            />
          </div>
        </Layout>
      ) : (
        <Layout title="Dashboard" page="dashboard" showNav>
          <div className="w-full">
            <DashboardSkeleton />
          </div>
        </Layout>
      )}
    </>
  )
}
