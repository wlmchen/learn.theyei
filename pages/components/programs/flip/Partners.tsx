import React from 'react'

const partners = [
  {
    name: 'Bank of America Better Money Habits',
    img: '/img/logos/other/boa.png',
  },
  {
    name: 'Stanford Mind Over Money Student Affairs',
    img: '/img/logos/other/smom.png',
  },
  {
    name: 'Personal Finance @ Duke',
    img: '/img/logos/other/dpf.png',
  },
  {
    name: 'Start Now Press',
    img: '/img/logos/other/snp.png',
  },
]

export default function Partners() {
  return (
    <div className="pt-10 lg:pt-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Developed in Partnership With
          </h2>
          <div className="mt-5 mx-auto w-full max-w-2xl flex items-center justify-center flex-wrap">
            {partners.map(({ name, img }) => {
              return <img src={img} className="h-10 m-5" alt={name} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
