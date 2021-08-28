import { useEffect, useState } from 'react'
import { kebabCase } from '@/lib/utils'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import useSWR from 'swr'
import mcq from '@/data/mcq'
import routes from '@/data/routes'
import Pathway from './Pathway'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({ title, description, slug }) {
  const auth = useAuth()

  const { data: slideProgressData } = useSWR(
    auth.user
      ? [`/api/slides/${kebabCase(title)}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )
  const { data: mcqScoreData } = useSWR(
    auth.user
      ? [`/api/mcqs/${kebabCase(title)}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )
  const { data: frqScoreData } = useSWR(
    auth.user
      ? [`/api/frqs/${kebabCase(title)}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )

  const [completedSlides, setCompletedSlides] = useState([])
  const [completedMCQs, setCompletedMCQs] = useState([])
  const [completedFRQs, setCompletedFRQs] = useState([])

  let categories = ['General', 'Micro', 'Macro']
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))

  const chapters = []
  const kebabChapters = []
  routes[kebabCategories.indexOf(kebabCase(title))].children.forEach((item) => {
    chapters.push(item)
    kebabChapters.push(kebabCase(item))
  })
  let filteredMcqs = mcq.filter((item) => {
    return (
      kebabCase(item.category.substring(0, item.category.length - 2)) ===
      kebabCase(title)
    )
  })

  useEffect(() => {
    if (slideProgressData && mcqScoreData) {
      console.log(slideProgressData, mcqScoreData, frqScoreData)
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
    <div className="min-h-screen bg-white">
      <div className="">
        <div className="w-full py-14 bg-yei-primary-main mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg m-auto">
            <h1 className="text-center text-5xl sm:text-7xl font-extrabold leading-tight text-white">
              {title}
            </h1>
            <p className="text-center mt-4 text-green-100 text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-5">
            <div className="bg-green-100 max-w-lg m-5 w-full p-5 shadow-2xl rounded-xl inline-flex flex-col justify-center space-y-4">
              <div className="uppercase tracking-widest text-sm font-bold text-yei-primary-main">
                {title} Progress
              </div>
              <div
                className="bg-yei-primary-main px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"
                style={{
                  background: `linear-gradient(to right, #279361, #279361 ${Math.round(
                    ((completedSlides.length +
                      completedMCQs.length +
                      completedFRQs.length) /
                      (routes[kebabCategories.indexOf(kebabCase(title))]
                        .children.length *
                        3)) *
                      100
                  )}%, #52a47e ${Math.round(
                    ((completedSlides.length +
                      completedMCQs.length +
                      completedFRQs.length) /
                      (routes[kebabCategories.indexOf(kebabCase(title))]
                        .children.length *
                        3)) *
                      100
                  )}%, #52a47e)`,
                }}
              >
                {Math.round(
                  ((completedSlides.length +
                    completedMCQs.length +
                    completedFRQs.length) /
                    (routes[kebabCategories.indexOf(kebabCase(title))].children
                      .length *
                      3)) *
                    100
                )}
                %
              </div>
            </div>
            <div>
              <div className="flex justify-center w-full flex-row">
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
                    {completedSlides.length}/
                    {
                      routes[kebabCategories.indexOf(kebabCase(title))].children
                        .length
                    }
                  </div>
                  <div className=" text-lg font-bold text-green-100">
                    Slides
                  </div>
                </div>
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
                    {completedMCQs.length}/
                    {
                      routes[kebabCategories.indexOf(kebabCase(title))].children
                        .length
                    }
                  </div>
                  <div className=" text-lg font-bold text-green-100">MCQs</div>
                </div>
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-green-100 text-yei-primary-main font-black">
                    {completedFRQs.length}/
                    {
                      routes[kebabCategories.indexOf(kebabCase(title))].children
                        .length
                    }
                  </div>
                  <div className=" text-lg font-bold text-green-100">FRQs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative w-full flex flex-col items-center px-4 sm:px-0">
              <Pathway
                slug={slug}
                categories={kebabCategories}
                chapters={kebabChapters}
                title={title}
                slideProgressData={slideProgressData}
                mcqScoreData={mcqScoreData}
                completedSlides={completedSlides}
                completedMCQs={completedMCQs}
                completedFRQs={completedFRQs}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
