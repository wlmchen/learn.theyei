import { AllCombinedData, AllIndividualData, CompletedData } from 'types'

import Activity from './activity/Activity'
import AllProgress from './all-progress/AllProgress'
import UncompleteModule from './uncomplete-module/UncompleteModule'
import { useAuth } from '@/lib/auth'

type DashboardProps = {
  allIndividualData: AllIndividualData
  allCombinedData: AllCombinedData
  completedData: CompletedData
  slug: string | string[]
}

export default function Dashboard({
  allIndividualData,
  allCombinedData,
  completedData,
  slug,
}: DashboardProps) {
  const auth = useAuth()

  return (
    <>
      <div className="max-w-4xl m-auto min-h-screen bg-white p-5">
        <UncompleteModule allCombinedData={allCombinedData} />
        <h1>
          {allIndividualData.length === 0 ? 'Welcome,' : 'Welcome back,'}{' '}
          {auth.user.name}.
        </h1>
        <Activity allIndividualData={allIndividualData} slug={slug} />
        <AllProgress completedData={completedData} />
      </div>
    </>
  )
}
