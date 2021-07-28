import React, { useState } from 'react'
import FAQCollapse from '../../utility/FAQCollapse'

const questions = [
  {
    q: 'Does everyone on my team have to be from the same school or grade?',
    a: 'Absolutely not. You can have people from different schools and different grade levels. ',
  },
  {
    q: 'Can I register if I live outside of the U.S.?',
    a: 'Yes! ',
  },
  {
    q: 'Do I need to be a part of a YEI chapter to compete?',
    a: 'Nope! Everyone is welcome.',
  },
  {
    q: 'What is the cost to sign up?',
    a: 'EconBowl is absolutely FREE to compete in. ',
  },
  {
    q: 'When does registration close?',
    a: 'Registration will close on November 1st at 11:59pm PDT. ',
  },
  {
    q: 'Will it be online?',
    a: 'Under normal circumstances, EconBowl would be in-person. However, it will be online this year due to the pandemic. Please make sure you have a zoom account. You will need to sign up with the email associated with your zoom account. ',
  },
  {
    q: 'What do I need to compete?',
    a: "You'll need internet connection and Zoom installed on your computer (with a Zoom account). For the QuizBowl round, you'll need headphones/earbuds, and we suggest you also have a second device (e.g. phone).",
  },
  {
    q: 'Do I have to have a zoom account to join?',
    a: "Yes -- please create one if you don't have one. In the sign up form, it’ll ask you for an email associated with your zoom account. We will be using the email you submit to assign breakout rooms. We will also send information about EconBowl to the same email so make sure it’s one you check often. ",
  },
  {
    q: 'Any other questions, concerns, or feedback?',
    a: (
      <span>
        Email{' '}
        <a
          href="mailto:events@theyei.org"
          target="_blank"
          className="green-link"
        >
          events@theyei.org
        </a>
      </span>
    ),
  },
]

export default function FAQs() {
  return <FAQCollapse questions={questions} />
}
