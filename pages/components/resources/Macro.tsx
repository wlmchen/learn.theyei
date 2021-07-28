import React from 'react'
import DemoCtaBtn from './DemoCtaBtn'
import DemoSection from './DemoSection'

const lessonPlan = [
  { time: 'Week 1', event: 'Basic Economic Concepts' },
  { time: 'Week 2', event: 'Supply and Demand Model' },
  { time: 'Week 3', event: 'Discipline of Economic Systems Pt. 1' },
  { time: 'Week 4', event: 'Discipline of Economic Systems Pt. 2' },
  { time: 'Week 5', event: 'Introduction to Macroeconomics' },
  { time: 'Week 6', event: 'Inflation and CPI' },
  { time: 'Week 7', event: 'Introduction to Macroeconomics Advanced' },
  { time: 'Week 8', event: 'Introduction to Fiscal Policy' },
  { time: 'Week 9', event: 'Fiscal and Monetary Policy' },
  { time: 'Week 10', event: 'Fiscal and Monetary Policy Advanced' },
  { time: 'Week 11', event: 'Macroeconomics Reviewed' },
]

const sampleLinks = [
  {
    href: 'https://docs.google.com/presentation/d/e/2PACX-1vThX7s_eHWcA93B2wjT42hyBUYKsLk30UTujrl0Kw2zqUayhdBWIepJ-KCvx57DyBE7uUmUvj9efs17/pub?start=false&loop=false&delayms=3000',
    title: 'Slides',
  },
  {
    href: 'https://drive.google.com/file/d/1iGdQ6SPEUASLZvBQrQecz5HwnciPWdUg/view',
    title: 'Review',
  },
  {
    href: 'https://create.kahoot.it/share/yei-macro-1/f5ef37f2-3a2c-4fe7-9601-947be2b11d84',
    title: 'Kahoot',
  },
  {
    href: 'https://docs.google.com/document/d/1I0A0D2QCE-kRDrUvFljD82tCMdlou3rh1hPab6GVx1w/edit',
    title: 'Solutions',
  },
]

export default function Macro() {
  return (
    <div>
      <DemoSection
        title="11 Week Full AP Macroeconomics Curriculum"
        content="Have you ever wondered what GDP is? You can learn that and more with the YEI AP Macroeconomics curriculum! By using our tailored AP slides and worksheets, you’ll learn economics at the AP level. There are 11 pre-made modules complete with slides, worksheets, interactive activities, and lesson plans to make studying and teaching macroeconomics easy! This course is designed to be taught over a semester."
        ctaBtn={<DemoCtaBtn btnTitle="View Chapter 1" links={sampleLinks} />}
        imgUrl="/img/resources/macro-chapter-1.jpg"
        imgLink={sampleLinks[0].href}
      />
    </div>
  )
}
