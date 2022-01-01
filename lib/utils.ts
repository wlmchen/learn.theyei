export const numToLetter = (num: number) =>
  (num + 10).toString(36).toUpperCase()

export const letterToNum = (letter: string) => letter.charCodeAt(0) - 65

export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const kebabArray = (arr: any[]) => arr.map((item) => kebabCase(item))
