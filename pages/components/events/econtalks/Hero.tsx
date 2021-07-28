import React from 'react'

export default function Hero() {
  return (
    <>
      <div
        style={{ backgroundImage: 'url("/img/page-bg/econtalks-bg.png")' }}
        className="bg-gray-200 relative text-center overflow-hidden bg-cover bg-center pt-16"
      >
        <div className="z-10 relative container py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <img
            src="/img/logos/econtalks.png"
            className="mx-auto w-max-screen w-64"
            alt="econtalks logo"
          />
          <p className="mt-5 text-xl sm:text-2xl text-gray-800 leading-loose space-y-4 max-w-3xl mx-auto">
            Every year, YEI invites dozens of leading economists, professors,
            industry professionals, and business and political leaders to give
            talks.
          </p>
        </div>
      </div>
    </>
  )
}
