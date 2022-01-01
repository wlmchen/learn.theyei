import { kebabCase, kebabArray } from '@/lib/utils'

const routes: any[] = [
  {
    name: 'General',
    children: [
      'Basic Economics Concepts',
      'Production',
      'Supply and Demand',
      'Trade and Systems',
    ],
  },
  {
    name: 'Micro',
    children: [
      'Elasticity and Consumer Choice',
      'Costs',
      'Perfect Competition',
      'Monopoly',
      'Imperfect Competition',
      'Factor Markets',
      'Effeciency',
    ],
  },
  {
    name: 'Macro',
    children: [
      'A Healthy Economy',
      'Inflation and CPI',
      'Aggregate Supply and Demand',
      'Fiscal Policy',
      'Monetary Policy',
      'International Trade',
    ],
  },
]

const modules = ['Slides', 'MCQ Practice', 'FRQ Practice']
const kebabModules = kebabArray(modules)

const categories = routes.map((category) => category.name)

let kebabCategories = kebabArray(categories)

const chapters = routes.map((category) => category.children)

const allChapters = chapters.reduce((arr, e) => {
  return arr.concat(e)
})

const kebabChapters = chapters.map((item) => kebabArray(item))

const allKebabChapters = allChapters.map((item) => kebabCase(item))

export default routes
export {
  modules,
  kebabModules,
  categories,
  chapters,
  kebabCategories,
  kebabChapters,
  allChapters,
  allKebabChapters,
}
