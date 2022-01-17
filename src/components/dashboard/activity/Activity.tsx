import React, { useEffect, useState } from 'react'

import { AllIndividualData } from 'types'
import DayDetails from './DayDetails'
import DayGrid from './DayGrid'
import Streak from './Streak'

type ActivityProps = {
  allIndividualData: AllIndividualData
  slug: string | string[]
}

function Activity({ allIndividualData, slug }: ActivityProps) {
  const [dayDetails, setDayDetails] = useState([])

  const [daySelected, setDaySelected] = useState(0)

  useEffect(() => {
    if (allIndividualData) {
      setDayDetails(
        allIndividualData.filter((item) => {
          let mydate = new Date()
          mydate.setDate(mydate.getDate())
          return (
            new Date(item.createdAt).getDate() === mydate.getDate() &&
            new Date(item.createdAt).getMonth() === mydate.getMonth() &&
            new Date(item.createdAt).getFullYear() === mydate.getFullYear()
          )
        })
      )
    }
  }, [allIndividualData])

  const handleSetDayDetails = (newDetails) => {
    setDayDetails(newDetails)
  }
  const handleSetDaySelected = (newSelected) => {
    setDaySelected(newSelected)
  }
  return (
    <div className="mt-8">
      <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-100 flex flex-col">
        <DayGrid
          allIndividualData={allIndividualData}
          daySelected={daySelected}
          handleSetDaySelected={(newSelected) =>
            handleSetDaySelected(newSelected)
          }
          handleSetDayDetails={(newDetails) => handleSetDayDetails(newDetails)}
        />
        <Streak allIndividualData={allIndividualData} />
        <DayDetails
          allIndividualData={allIndividualData}
          daySelected={daySelected}
          dayDetails={dayDetails}
          slug={slug}
        />
      </div>
    </div>
  )
}

export default Activity
