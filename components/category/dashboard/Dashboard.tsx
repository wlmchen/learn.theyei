import { AllCombinedData, CompletedData, ScoreData } from 'types'

import ModuleProgress from './ModuleProgress'
import Pathway from './Pathway'
import ProgressBar from './ProgressBar'

type DashboardProps = {
  title: string
  description: string
  allCombinedData: AllCombinedData
  completedData: CompletedData
}

export default function Dashboard({
  title,
  description,
  allCombinedData,
  completedData,
}: DashboardProps) {
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
            <ProgressBar title={title} completedData={completedData} />
            <ModuleProgress title={title} completedData={completedData} />
          </div>
        </div>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative w-full flex flex-col items-center px-4 sm:px-0">
              <Pathway title={title} allCombinedData={allCombinedData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
