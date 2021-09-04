import routes, { kebabCategories, kebabChapters } from '@/data/routes'
import { kebabCase } from '@/lib/utils'
import React from 'react'

function FRQPage({ slug, children }) {
  return (
    <div className="w-full">
      <h3 className="border-b border-gray-300 mb-4 pb-2 uppercase italic font-semibold text-gray-400 text-base tracking-widest">
        Free Response Practice
      </h3>
      <h1 className="text-4xl">
        {
          routes[kebabCategories.indexOf(slug[0])].children[
            kebabChapters.indexOf(slug[1])
          ]
        }
      </h1>
      <br />
      {children}
    </div>
  )
}

export default FRQPage
