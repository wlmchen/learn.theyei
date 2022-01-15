type Category = 'general' | 'micro' | 'macro'
type Chapter =
  | 'Basic Economics Concepts'
  | 'Production'
  | 'Supply and Demand'
  | 'Trade and Systems'
  | 'Elasticity and Consumer Choice'
  | 'Costs'
  | 'Perfect Competition'
  | 'Monopoly'
  | 'Imperfect Competition'
  | 'Factor Markets'
  | 'Effeciency'
  | 'A Healthy Economy'
  | 'Inflation and CPI'
  | 'Aggregate Supply and Demand'
  | 'Fiscal Policy'
  | 'Monetary Policy'
  | 'International Trade'

type MCQUserChoice = 0 | 1 | 2 | 3
type MCQScore = 0 | 1 | 2 | 3 | 4 | 5

type MCQQuestion = {
  category: string
  question: string
  a: string
  b: string
  c: string
  d: string
  correct: 'A' | 'B' | 'C' | 'D'
  source: string
}

export type CompletedData = {
  completedSlides: Slide[]
  completedMCQs: MCQ[]
  completedFRQs: FRQ[]
}

export type ScoreData = {
  slideProgressData: Slide[]
  mcqScoreData: MCQ[]
  frqScoreData: FRQ[]
}

export type Slide = {
  type: 'slide'
  category: Category
  chapter: string
  createdAt: string
  progress: 'not-started' | 'in-progress' | 'completed'
  userId: string
}

export type AllIndividualData = (Slide | MCQ | FRQ)[]

export type AllCombinedData = {
  slideData: Slide[]
  mcqData: MCQ[]
  frqData: FRQChapter[]
}

export type MCQ = {
  type: 'mcq'
  category: Category
  chapter: Chapter
  userChoices: MCQUserChoice[]
  score: MCQScore
  totalPoints: MCQScore
  mcqContent: MCQQuestion[]
  createdAt: string
  userId: string
}

export type FRQ = {
  type: 'frq'
  category: Category
  chapter: string
  createdAt: string
  id: string
  num: Number
  score: string
  totalPoints: Number
  userId: string
}

export type FRQChapter = {
  type: 'frq-chapter'
  category: Category
  chapter: string
  frqProgress: 'not-started' | 'in-progress' | 'completed'
  createdAt: string // refers to when the oldest FRQ in that chapter was made
}
