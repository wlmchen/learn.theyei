import Link from 'next/link'
import React from 'react'

export default function Curriculum() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          FLIP Curriculum
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          While EconClubs must apply to be accepted to our FLIP program, every
          YEI EconClub is provided with the <b>16-week FLIP curriculum</b>,
          which can be used to teach club members about financial literacy. The
          FLIP curriculum has approximately 30 hours worth of content and covers
          topics such as budgeting, loans, credit and debit cards, 401(k),
          retirement, interest, savings, investing, and insurance. Learn more on
          the{' '}
          <Link href="/resources">
            <a className="green-link">resources page</a>
          </Link>
          .
        </div>
      </div>
    </div>
  )
}
