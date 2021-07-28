import React from 'react'
import featured from '../../data/content/featured'
import FeaturedSection from './FeaturedSection'

export default function Featured() {
  return (
    <>
      {featured.map(
        ({ subtitle, title, content, href, imgTitle, Component }, index) => (
          <FeaturedSection
            key={title}
            title={title}
            subtitle={subtitle}
            content={content}
            href={href}
            imgTitle={imgTitle}
            dark={index % 2 == 0}
            index={index}
            length={featured.length}
            Component={Component}
          />
        )
      )}
    </>
  )
}
