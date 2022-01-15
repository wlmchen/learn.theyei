import React from 'react'

function DashboardSkeleton() {
  return (
    <div className="max-w-4xl m-auto min-h-screen bg-white p-5">
      <div className="animate-pulse bg-gray-300 h-14 max-w-xl rounded-lg"></div>
      <div className="mt-8">
        <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-100 flex flex-col">
          <div>
            <div className="flex max-w-lg flex-wrap mb-4">
              {new Array(30).fill(null).map((item, index) => {
                return (
                  <div
                  key={index}
                    className="h-10 w-10 cursor-pointer rounded-md flex items-center justify-center text-center font-bold bg-gray-300 animate-pulse border"
                    style={{ margin: '3px' }}
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="mb-4 flex items-center h-10 bg-gray-300 w-40 rounded-full"></div>
          <div className="space-y-2">
            <div className="w-44 h-5 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-32 h-3 bg-gray-300 animate-pulse rounded-sm"></div>
            <div className="w-32 h-3 bg-gray-300 animate-pulse rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="animate-pulse bg-gray-300 h-10 max-w-xl rounded-lg"></div>
        <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-100 flex flex-col">
          <div className="bg-gray-300 animate-pulse px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"></div>
          <div className="mt-4 w-32 h-3 bg-gray-300 animate-pulse rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton
