import { useEffect, useState } from 'react'
import { kebabCase } from '@/lib/utils'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import useSWR from 'swr'
import routes from '@/data/routes'

import Activity from './activity/Activity'
import AllProgress from './all-progress/AllProgress'
import UncompleteModule from './uncomplete-module/UncompleteModule'
import DashboardSkeleton from './DashboardSkeleton'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({
  allData,
  moduleData: { slideProgressData, mcqScoreData, frqScoreData },
  completedData: { completedSlides, completedMCQs, completedFRQs },
  slug,
}) {
  const auth = useAuth()

  return (
    <>
      <div className="max-w-4xl m-auto min-h-screen bg-white p-5">
        <UncompleteModule allData={allData} slug={slug} />
        <h1>
          {allData.length === 0 ? 'Welcome,' : 'Welcome back,'} {auth.user.name}
          .
        </h1>
        <Activity allData={allData} slug={slug} />
        <AllProgress
          completedData={{ completedSlides, completedMCQs, completedFRQs }}
        />
      </div>
    </>
  )
}
