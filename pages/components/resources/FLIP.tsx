import React from 'react'
import DemoSection from './DemoSection'
import DemoCtaBtn from './DemoCtaBtn'

const units = [
  {
    unit: 'Unit 1: Budgeting',
    modules: ['Budgeting: The Basics', 'Budgeting: Smart Shopping'],
  },
  {
    unit: 'Unit 2: Insurance',
    modules: [
      'Life Insurance and Health Insurance',
      'Car Insurance and Home Insurance',
    ],
  },
  {
    unit: 'Unit 3: Loans and Credit',
    modules: [
      'Car and Real Estate Loans',
      'Personal Loans',
      'Student Loans ',
      'Credit Cards and Credit Scores',
    ],
  },
  {
    unit: 'Unit 4: Saving and Investing',
    modules: [
      'Stocks and Bonds',
      'Long Term Investments',
      'Banks and Financial Institutions',
    ],
  },
  { unit: 'Unit 5: Retirement Planning', modules: ['401K', 'IRA'] },
  {
    unit: 'Unit 6: Taxes',
    modules: ['Importance of taxes', 'Different kinds of taxes'],
  },
  {
    unit: 'Unit 7: Privacy and Security',
    modules: ['Identity Theft'],
  },
]

const sampleLinks = [
  {
    href: 'https://docs.google.com/presentation/d/1h_6ccJOJiA53DKlE3KewrBM4UJiBrg_P59Zb0HYOkGk/edit#slide=id.g8949bf35a7_0_884',
    title: 'Slides',
  },
  {
    href: 'https://docs.google.com/document/d/1J7HyimwTFhJPomCnClTtzdoqW3nFx_JQTEyoqONS428/edit',
    title: 'Handout',
  },
  {
    href: 'https://docs.google.com/document/d/16YafhQdwAjZARn_qfSTpcnCal1msVhv7m9vQjPcmsps/edit',
    title: 'Instructions',
  },
]

export default function FLIP() {
  return (
    <div>
      <DemoSection
        //   imgFirst
        darkerBg
        title="15+ Week First Step to Financial Literacy Curriculum"
        content="Take your first step toward personal financial literacy by using YEI’s First Step to Financial Literacy Curriculum developed in partnership with Bank of America Better Money Habits. This curriculum set gives your EconClubs all the resources it will need to teach basic financial literacy from budgeting, to investments & securities, to even retirement planning, this 16 tailored modules complete with slides, interactive activities, and detailed lesson plans will make it easy for your club to bring financial literacy to your campus. This curriculum set also prepares members for YEI’s FLIP Volunteering Program."
        ctaBtn={<DemoCtaBtn btnTitle="View Module 1" links={sampleLinks} />}
        imgUrl="/img/resources/flip-module-1.jpg"
        imgLink={sampleLinks[0].href}
      />
    </div>
  )
}
