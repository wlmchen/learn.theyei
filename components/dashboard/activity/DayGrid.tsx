import React from 'react'

function DayGrid({
  allData,
  daySelected,
  handleSetDayDetails,
  handleSetDaySelected,
}) {
  const handleDayDetails = (index) => {
    if (
      allData.filter((item) => {
        let mydate = new Date()
        mydate.setDate(mydate.getDate() - index)
        return (
          new Date(item.createdAt).getUTCDate() === mydate.getUTCDate() &&
          new Date(item.createdAt).getUTCMonth() === mydate.getUTCMonth() &&
          new Date(item.createdAt).getUTCFullYear() === mydate.getUTCFullYear()
        )
      }).length !== 0
    ) {
      handleSetDayDetails(
        allData.filter((item) => {
          let mydate = new Date()
          mydate.setDate(mydate.getDate() - index)
          return (
            new Date(item.createdAt).getUTCDate() === mydate.getUTCDate() &&
            new Date(item.createdAt).getUTCMonth() === mydate.getUTCMonth() &&
            new Date(item.createdAt).getUTCFullYear() ===
              mydate.getUTCFullYear()
          )
        })
      )
    } else {
      handleSetDayDetails([index])
    }
    handleSetDaySelected(index)
  }
  return (
    <div>
      <div className="flex max-w-lg flex-wrap mb-4">
        {new Array(30).fill('').map((item, index) => {
          const todayData = allData.filter((item) => {
            let mydate = new Date()
            mydate.setDate(mydate.getDate() - index)
            return (
              new Date(item.createdAt).getUTCDate() === mydate.getUTCDate() &&
              new Date(item.createdAt).getUTCMonth() === mydate.getUTCMonth() &&
              new Date(item.createdAt).getUTCFullYear() ===
                mydate.getUTCFullYear()
            )
          }).length
          return (
            <div
              key={index}
              className={`h-10 w-10 cursor-pointer rounded-md flex items-center justify-center text-center font-bold ${
                todayData > 0 && todayData <= 1
                  ? 'bg-green-100 hover:bg-green-200 text-black'
                  : todayData === 2
                  ? 'bg-green-200 hover:bg-green-300 text-black'
                  : todayData === 3
                  ? 'bg-green-300 hover:bg-green-400 text-black'
                  : todayData >= 4 && todayData <= 5
                  ? 'bg-green-400 hover:bg-green-500 text-white'
                  : todayData >= 6 && todayData <= 7
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : todayData >= 6 && todayData <= 7
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : todayData >= 8 && todayData <= 10
                  ? 'bg-green-700 hover:bg-green-800 text-white'
                  : todayData >= 11 && todayData <= 15
                  ? 'bg-green-800 hover:bg-green-900 text-white'
                  : 'bg-white hover:bg-gray-100'
              } ${
                daySelected === index
                  ? 'border-blue-500 border-2'
                  : 'border-gray-300 border'
              }`}
              style={{ fontSize: '8px', margin: '3px' }}
              onClick={() => handleDayDetails(index)}
            >
              {index === 0 ? 'TODAY' : ''}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DayGrid
