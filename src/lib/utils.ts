import {MCQUserChoice} from 'types'

export const numToLetter = (num: number) =>
  (num + 10).toString(36).toUpperCase()

export function letterToNum(letter: string): MCQUserChoice {
  return letter === 'A'
    ? 0
    : letter === 'B'
    ? 1
    : letter === 'C'
    ? 2
    : letter === 'D'
    ? 3
    : null
}

export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const kebabArray = (arr: any[]) => arr.map((item) => kebabCase(item))
