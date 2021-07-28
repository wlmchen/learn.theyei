import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Announcement from '../../utility/Announcement'

export default function Hero() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && (
        <Announcement
          setVisible={setVisible}
          smTitle="EconBowl 2020-21 was a success!"
          title="EconBowl 2020-21 was a success! It took place on Nov. 8, 2020."
        >
          <AnchorLink
            href="#recap"
            offset={65}
            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yei-primary-main bg-white hover:bg-gray-100"
          >
            See Recap
          </AnchorLink>
        </Announcement>
      )}
      <div
        className={`relative bg-white overflow-hidden ${
          visible ? '' : 'pt-12 sm:pt-8'
        }`}
      >
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>
        <div className="relative pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <img
                  className="w-48 mx-auto"
                  src="/img/logos/econbowl.png"
                  alt="EconBowl"
                />
              </h1>
              <div className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <p>
                  The Youth Economics Initiative is proud to present our
                  flagship program, EconBowl 2020-2021, in collaboration with
                  the Wen & Yung Family Foundation!
                </p>
                <p className="mt-4">
                  This competition offers high schoolers the chance to compete
                  against like-minded individuals and apply real world economics
                  knowledge in a fast-paced environment. Compete for glory,
                  represent your high school, and win cash prizes!
                </p>
                {/* <p className="mt-4 font-medium">
                  For contest details, please view the{" "}
                  <a
                    href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                    target="_blank"
                    className="text-yei-primary-main"
                  >
                    rulebook
                  </a>
                  .
                </p> */}
              </div>
              <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10"
                  >
                    Contest Details
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
