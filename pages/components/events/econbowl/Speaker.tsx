import React from 'react'

export default function Speaker() {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-yei-secondary-brighter lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="hidden lg:block mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="rounded-xl shadow-xl overflow-hidden lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/img/people/speakers/lawrence-white.jpg"
                  alt="Lawrence White"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <div>
                <div className="block lg:hidden pt-14 sm:pt-20">
                  <img
                    className="w-52 sm:w-64 rounded shadow-sm"
                    src="/img/people/speakers/lawrence-white.jpg"
                    alt="Lawrence White"
                  />
                </div>
                <div className="mt-6 text-xl text-white">
                  <h1 className="text-3xl sm:text-4xl tracking-tight font-black">
                    About the Speaker
                  </h1>
                  <p className="mt-3">
                    Our speaker for EconBowl is{' '}
                    <b>Professor Lawrence White from NYU Stern</b> (the New York
                    University Leonard N. Stern School of Business).
                  </p>{' '}
                  <p className="mt-3">
                    He received his Ph.D. in Economics from Harvard University
                    and now holds the Robert Kavesh Professorship in Economics.
                    His primary research interests are financial regulation,
                    antitrust, and applied macroeconomics. He will come talk
                    with us at the end of the written round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
