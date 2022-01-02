import React, { useEffect, useState } from 'react'
import {
  allChapters,
  allKebabChapters,
  categories,
  kebabCategories,
  kebabChapters,
} from '@/data/routes'

function DayDetails({ allData, daySelected, dayDetails, slug }) {
  const [dayDetailsMaxDisplay, setDayDetailsMaxDisplay] = useState(4)

  const handleDayDetailsMaxDisplay = () => {
    setDayDetailsMaxDisplay(
      dayDetailsMaxDisplay === dayDetails.length ? 4 : dayDetails.length
    )
  }
  console.log(allData)
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
  return (
    <div>
      {dayDetails[0]?.createdAt !== undefined && dayDetails !== [] ? (
        <div>
          <h4 className="font-medium mb-2">
            {daysOfTheWeek[
              new Date(dayDetails[0].createdAt).getDay()
            ]?.substring(0, 3) || ''}
            {', '}
            {monthsOfTheYear[
              new Date(dayDetails[0]?.createdAt).getMonth()
            ]?.substring(0, 3) || ''}{' '}
            {new Date(dayDetails[0]?.createdAt).getDate() || ''}
            {', '}
            {new Date(dayDetails[0]?.createdAt).getFullYear() || ''}
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
                {item.totalPoints && (
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
                  ).getDay()
                ]?.substring(0, 3) || ''}
                {', '}
                {monthsOfTheYear[
                  new Date(
                    new Date().setDate(new Date().getDate() - dayDetails[0])
                  ).getMonth()
                ]?.substring(0, 3) || ''}{' '}
                {new Date(
                  new Date().setDate(new Date().getDate() - dayDetails[0])
                ).getDate() || ''}
                {', '}
                {new Date(
                  new Date().setDate(new Date().getDate() - dayDetails[0])
                ).getFullYear() || ''}
              </h4>
              <div className="text-xs mb-1">
                <p>No data to show for this day.</p>
              </div>
            </div>
          ) : (
            <div>
              <h4 className="font-medium mb-2">
                {daysOfTheWeek[new Date().getDay()]?.substring(0, 3) || ''}
                {', '}
                {monthsOfTheYear[new Date().getMonth()]?.substring(0, 3) ||
                  ''}{' '}
                {new Date().getDate() || ''}
                {', '}
                {new Date().getFullYear() || ''}
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
