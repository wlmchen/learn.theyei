import frqs from '@/data/frqs'
import {
  categories,
  kebabCategories,
  chapters,
  kebabChapters,
  allChapters,
  allKebabChapters,
} from '@/data/routes'
import { kebabCase } from '@/lib/utils'
import React, { useState, useEffect } from 'react'

function DayDetails({ allData, daySelected, dayDetails, slug }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  const [dayDetailsMaxDisplay, setDayDetailsMaxDisplay] = useState(4)

  const handleDayDetailsMaxDisplay = () => {
    setDayDetailsMaxDisplay(
      dayDetailsMaxDisplay === dayDetails.length ? 4 : dayDetails.length
    )
  }
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const monthsOfTheYear = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  // console.log(
  //   'is it there? ',
  //   dayDetails.filter((item) => item.frqProgress)
  // )
  // frqs[0].forEach((chapter, index2) => {
  //   console.log(
  //     'maybe ',
  //     dayDetails.filter((item) => item.frqProgress)
  //   )
  //   if (
  //     dayDetails.filter(
  //       (item) =>
  //         item.category === kebabCategories[0] &&
  //         item.chapter === kebabChapters[0][index2] &&
  //         item.num
  //     ).length === chapter.numberOfFRQs
  //   ) {
  //     dayDetails.push({
  //       category: kebabCategories[0],
  //       chapter: kebabChapters[0][index2],
  //       frqProgress: 'completed',
  //     })
  //   } else if (
  //     dayDetails.filter(
  //       (item) =>
  //         item.category === kebabCategories[0] &&
  //         item.chapter === kebabChapters[0][index2] &&
  //         item.num
  //     ).length > 0
  //   ) {
  //     console.log(
  //       dayDetails.filter(
  //         (item) =>
  //           item.category === kebabCategories[0] &&
  //           item.chapter === kebabChapters[0][index2] &&
  //           item.num
  //       )
  //     )
  //     dayDetails.push({
  //       category: kebabCategories[0],
  //       chapter: kebabChapters[0][index2],
  //       frqProgress: 'in-progress',
  //     })
  //   } else {
  //   }
  // })

  // console.log(
  //   'hmm ',
  //   dayDetails.filter((item) => item.frqProgress)
  // )

  // const dayDetails = dayDetails.filter((item) => !item.num)
  // console.log(dayDetails, dayDetails)
  return (
    <div>
      {dayDetails[0]?.createdAt !== undefined && dayDetails !== [] ? (
        <div>
          <h4 className="font-medium mb-2">
            {daysOfTheWeek[
              new Date(dayDetails[0].createdAt).getUTCDay()
            ]?.substring(0, 3) || ''}
            {', '}
            {monthsOfTheYear[
              new Date(dayDetails[0]?.createdAt).getUTCMonth()
            ]?.substring(0, 3) || ''}{' '}
            {new Date(dayDetails[0]?.createdAt).getUTCDate() || ''}
            {', '}
            {new Date(dayDetails[0]?.createdAt).getUTCFullYear() || ''}
          </h4>
          <div>
            {dayDetails.slice(0, dayDetailsMaxDisplay).map((item, index) => (
              <div key={index} className="text-xs mb-1">
                {item.progress && item.progress !== 'not-started' && (
                  <p>
                    {item.progress === 'completed'
                      ? 'Completed'
                      : 'Started working on'}{' '}
                    the{' '}
                    <i>
                      {categories[kebabCategories.indexOf(item.category)]}:{' '}
                      {allChapters[allKebabChapters.indexOf(item.chapter)]}
                    </i>{' '}
                    slideshow.
                  </p>
                )}
                {item.userChoices && (
                  <p>
                    Scored {item.score}/{item.totalPoints} on the{' '}
                    <i>
                      {categories[kebabCategories.indexOf(item.category)]}:{' '}
                      {allChapters[allKebabChapters.indexOf(item.chapter)]}
                    </i>{' '}
                    multiple choice test.
                  </p>
                )}
                {item.num && (
                  <p>
                    Completed FRQ #{item.num} for{' '}
                    <i>
                      {categories[kebabCategories.indexOf(item.category)]}:{' '}
                      {allChapters[allKebabChapters.indexOf(item.chapter)]}
                    </i>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>
          {dayDetails.length >= 4 && (
            <button
              className="appearance-none text-sm border-b border-dashed text-gray-600 border-gray-600"
              onClick={handleDayDetailsMaxDisplay}
            >
              {dayDetailsMaxDisplay === dayDetails.length
                ? 'View Less'
                : 'View All'}
            </button>
          )}
        </div>
      ) : (
        <>
          {typeof dayDetails[0] === 'number' ? (
            <div>
              <h4 className="font-medium mb-2">
                {daysOfTheWeek[
                  new Date(
                    new Date().setDate(new Date().getDate() - dayDetails[0])
                  ).getUTCDay()
                ]?.substring(0, 3) || ''}
                {', '}
                {monthsOfTheYear[
                  new Date(
                    new Date().setDate(new Date().getDate() - dayDetails[0])
                  ).getUTCMonth()
                ]?.substring(0, 3) || ''}{' '}
                {new Date(
                  new Date().setDate(new Date().getDate() - dayDetails[0])
                ).getUTCDate() || ''}
                {', '}
                {new Date(
                  new Date().setDate(new Date().getDate() - dayDetails[0])
                ).getUTCFullYear() || ''}
              </h4>
              <div className="text-xs mb-1">
                <p>No data to show for this day.</p>
              </div>
            </div>
          ) : (
            <div>
              <h4 className="font-medium mb-2">
                {daysOfTheWeek[new Date().getUTCDay()]?.substring(0, 3) || ''}
                {', '}
                {monthsOfTheYear[new Date().getUTCMonth()]?.substring(0, 3) ||
                  ''}{' '}
                {new Date().getUTCDate() || ''}
                {', '}
                {new Date().getUTCFullYear() || ''}
              </h4>
              <div className="text-xs mb-1">
                <p>No data to show for today.</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default DayDetails
