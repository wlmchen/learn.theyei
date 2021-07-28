import React, { useState } from 'react'
import Announcement from '../../utility/Announcement'

export default function Hero() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible && (
        <Announcement
          ctaHref="/people/apply"
          setVisible={setVisible}
          smTitle="Join the YEI Leadership Team!"
          title="The YEI is now recruiting multiple positions! Check our application page."
        />
      )}
      <div
        style={{ backgroundImage: 'url("/img/page-bg/team-bg.png")' }}
        className={`bg-yei-secondary-main relative overflow-hidden bg-cover bg-center ${
          visible ? '' : 'pt-16'
        }`}
      >
        <div className="z-10 relative container py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Meet Our Team
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl sm:text-3xl text-gray-300">
              Get to know the people who make the magic happen.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
