import React from 'react'
import featured from '../../data/companies/featured'

export default function FeaturedOn() {
  return (
    <div className="bg-gray-900">
      <div className="container py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 className="max-w-md my-auto mx-auto text-3xl font-semibold text-gray-400 text-center lg:max-w-xl lg:text-left">
            Featured On
          </h2>
          <div className="col-span-2 flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex md:flex-nowrap flex-wrap justify-between lg:-ml-4">
              {featured.map((link) => (
                <div
                  key={link.href}
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                >
                  <a href={link.href} target="_blank">
                    <img
                      className="h-12 lg:h-14"
                      src={link.imgURL}
                      alt={link.alt}
                      style={{
                        filter: `grayscale(100%) brightness(${link.brightness})`,
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
