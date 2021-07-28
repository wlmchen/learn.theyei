import React from 'react'

const frqSchedule = [
  { time: '9 am', title: 'Opening Ceremony' },
  { time: '9:45', title: 'Taking the Test' },
  { time: '11:00', title: 'Speaker Seminar' },
  { time: '11:30 - 12', title: 'Closing Remarks' },
]

const ceremonySchedule = [
  { time: '9 am', title: 'Award Ceremony' },
  { time: '9:15', title: 'Q&A with the Judges' },
  { time: '9:45', title: 'Awards' },
  { time: '10:15', title: 'End of Award Ceremony' },
]

export default function Agenda() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Agenda
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="md:w-1/2">
              <ScheduleTable
                schedule={frqSchedule}
                title="Written FRQ Testing (4/3)"
              />
            </div>
            <div className="md:w-1/2">
              <ScheduleTable
                schedule={ceremonySchedule}
                title="Award Ceremony (4/17)"
              />
            </div>
          </div>
          <p className="text-base mt-4 ml-1 text-gray-500">
            All listed times are in PDT.
          </p>
        </div>
      </div>
    </div>
  )
}

function ScheduleTable({ schedule, title }) {
  return (
    <div>
      <div className="ml-1 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex w-full flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-yei-secondary-brighter">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(({ time, title }, index) => (
                    <tr
                      key={title}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
