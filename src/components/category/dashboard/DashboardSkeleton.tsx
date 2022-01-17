import React from 'react'

function DashboardSkeleton() {
  return (
    <div>
      <div className="">
        <div className="w-full py-14 bg-yei-primary-main mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" max-w-lg m-auto">
            <div className="mx-auto mb-4 max-w-xs h-16 rounded-xl bg-white opacity-60 animate-pulse"></div>
            <div className="w-full h-6 rounded-lg bg-white opacity-60 animate-pulse"></div>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-5">
            <div className="bg-white opacity-60 animate-pulse max-w-lg m-5 w-full p-5 shadow-2xl rounded-xl inline-flex flex-col justify-center space-y-4">
              <div
                className="mt-4 bg-yei-primary-main px-4 h-10 sm:h-14 flex items-center rounded-lg text-2xl sm:text-3xl text-white font-black"
                style={{ background: 'rgb(82, 164, 126)' }}
              ></div>
            </div>
            <div>
              <div className="flex justify-center w-full flex-row">
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-pulse w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-white opacity-60 text-yei-primary-main font-black"></div>
                  <div className=" text-lg font-bold text-green-100">
                    Slides
                  </div>
                </div>
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-pulse w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-white opacity-60 text-yei-primary-main font-black"></div>
                  <div className=" text-lg font-bold text-green-100">MCQs</div>
                </div>
                <div className="m-3 sm:m-6 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-pulse w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl rounded-full flex items-center justify-center bg-white opacity-60 text-yei-primary-main font-black"></div>
                  <div className=" text-lg font-bold text-green-100">FRQs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton
