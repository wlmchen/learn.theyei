import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export default function PageTypes() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Slideshows
                </h2>
                <p className="mt-4 text-lg text-gray-500">
				  Learn or review AP Microeconomics and Macroeconomics concepts with the YEI's slideshows.
				  Covering all fundamental economics concepts, as well as everything on the AP Microeconomics
				  and Macroeconomics exams.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="border border-gray-200 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./img/others/home/slides.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
        <div className="my-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
				    Multiple-Choice Questions
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
				    Strengthen your conceptual grasp of economics concepts and prepare for competitions
					like the EconBowl and National Economics Challenges with our multiple-choice questions.
					Includes original questions and past questions from our EconBowl competitions.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pl-4 -mr-48 sm:pr-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="border border-gray-200 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="./img/others/home/mcq.png"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
				  Free-Response Questions (FRQs)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
				  Practice for free-response questions on the AP Econ exams and the EconOlympiad with our free-response questions.
				  We have over [x] questions, including original questions, past AP questions, and past EconOlympiad problems. 
				  Grading rubrics and solutions also available.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="border border-gray-200 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./img/others/home/frq.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
