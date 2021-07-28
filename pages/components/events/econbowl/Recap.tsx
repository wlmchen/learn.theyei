import React from 'react'
import RecapPodium from './RecapPodium'

export default function Recap() {
  return (
    <div id="recap" className="relative bg-gray-100">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="xl:inline">EB 20-21 </span>
              <span className="text-yei-primary-main xl:inline">Recap</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 font-medium sm:text-xl md:mt-5  md:max-w-3xl">
              Thank you to our 330+ competitors and proctors!{' '}
            </p>
            <p className="mt-2 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              On November 8th, 2020 with around 100 teams and over 330
              competitors applied their economic knowledge and competed
              virtually for the chance to become the 2nd Annual Econbowl
              Champion and earn cash prizes. It was amazing to see such passion
              for economics from all across the world. We hope to see you there
              EconOlympiad (spring 2021) and EconBowl next year (fall 2021)
            </p>
            <p className="mt-2 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              Recordings:{' '}
              <a
                href="https://www.youtube.com/watch?v=Z5sD0Jushjs&t=4995s"
                className="green-link"
                target="_blank"
              >
                QuizBowl recording
              </a>{' '}
              ∙{' '}
              <a
                href=" https://youtu.be/aemfNr-o8d4"
                className="green-link"
                target="_blank"
              >
                Professor White’s talk on Anti-Trust
              </a>{' '}
            </p>
            <RecapPodium />
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://youtu.be/IEzR36fxQ58"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10"
                >
                  Recap Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover bg-yei-secondary-main"
            src="/img/photos/econbowl20-21.png"
            alt="EconBowl recap"
          />
        </div>
      </main>
    </div>
  )
}
