import React, { useEffect, useState } from 'react'
import mcq from '@/data/mcq'
import { kebabCase, letterToNum } from '@/lib/utils'
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { useAuth } from '@/lib/auth'
import { createMCQScore, removeMCQScore } from '@/lib/db'
import fetcher from '@/utils/fetcher'
import useSWR, { mutate } from 'swr'
import ScoreAlert from './ScoreAlert'

function MCQ({ categories, chapters, slug }) {
  const auth = useAuth()
  const { data: mcqScoreData } = useSWR(
    auth.user
      ? [`/api/mcqs/${slug.join('/')}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )
  let filteredMcqs = mcq.filter((item) => {
    return (
      kebabCase(item.category.substring(0, item.category.length - 2)) ===
        slug[0] &&
      parseInt(
        item.category.substring(item.category.length - 1, item.category.length)
      ) ===
        chapters.indexOf(slug[1]) + 1
    )
  })

  const [userChoices, setUserChoices] = useState(
    new Array(filteredMcqs.length).fill(null)
  )
  const [missedProblems, setMissedProblems] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [newId, setNewId] = useState('')

  const handleChoice = (letterIndex, questionNumber) => {
    let newUserChoices = userChoices.slice()
    newUserChoices[questionNumber] = letterIndex
    setUserChoices(newUserChoices)
    console.log(userChoices)
  }

  useEffect(() => {
    if (mcqScoreData) {
      console.log(mcqScoreData)
      setUserChoices(
        mcqScoreData.score[0]?.userChoices ||
          new Array(filteredMcqs.length).fill(null)
      )
      setShowAnswers(mcqScoreData.score[0]?.userChoices !== undefined || false)
    }
  }, [mcqScoreData])

  const onCreateMCQScore = () => {
    let newScore = {
      category: slug[0],
      chapter: slug[1],
      userChoices: userChoices,
      score: userChoices.filter(
        (item, index) => item === letterToNum(filteredMcqs[index].correct)
      ).length,
      totalPoints: filteredMcqs.length,
      createdAt: new Date().toISOString(),
      userId: auth.user.uid,
    }
    console.log(newScore)
    const { id } = createMCQScore(newScore)
    setNewId(id)
  }
  const handleSubmit = () => {
    if (userChoices.filter((item) => item === null).length === 0) {
      console.log('goood')
      setMissedProblems(0)

      setShowAnswers(true)
      onCreateMCQScore()
    } else {
      setMissedProblems(userChoices.filter((item) => item === null).length)
    }
  }
  const handleRedo = () => {
    setShowAnswers(false)
    setUserChoices(new Array(filteredMcqs.length).fill(null))
    removeMCQScore(mcqScoreData.score[0]?.id || newId)
  }
  return (
    <>
      {mcqScoreData && (
        <div>
          {showAnswers && (
            <div className="mb-8 bg-white p-5 rounded-lg border-2 border-gray-200">
              <p className="text-gray-700 text-sm sm:text-base">
                Looks like you've already taken this practice quiz. Would you
                like to try again?
              </p>
              <button
                type="submit"
                className="inline-flex items-center px-4 mt-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                onClick={handleRedo}
              >
                Yes, retry.
              </button>
            </div>
          )}

          {filteredMcqs.map(
            ({ question, a, b, c, d, correct, source }, index) => (
              <div key={index} className="mb-12">
                <div className="inline-block uppercase px-4 py-2 rounded-lg bg-indigo-200 text-indigo-500 font-bold text-sm mb-2">
                  Problem #{index + 1}
                </div>
                <p className="text-base sm:text-lg italic">{question}</p>
                {showAnswers ? (
                  <ul className="list-none my-4 ml-4 space-y-3">
                    <li className="flex items-center">
                      <div
                        className={` ${
                          userChoices[index] === letterToNum(correct) &&
                          userChoices[index] === 0
                            ? 'mcq-radio-letter-correct'
                            : `${
                                userChoices[index] !== letterToNum(correct) &&
                                userChoices[index] === 0
                                  ? 'mcq-radio-letter-wrong'
                                  : `${
                                      userChoices[index] !==
                                        letterToNum(correct) &&
                                      letterToNum(correct) === 0
                                        ? 'mcq-radio-letter-correct-missed'
                                        : 'mcq-radio-letter'
                                    } `
                              } `
                        } `}
                      >
                        A
                      </div>
                      {a}
                    </li>
                    <li className="flex items-center">
                      <div
                        className={` ${
                          userChoices[index] === letterToNum(correct) &&
                          userChoices[index] === 1
                            ? 'mcq-radio-letter-correct'
                            : `${
                                userChoices[index] !== letterToNum(correct) &&
                                userChoices[index] === 1
                                  ? 'mcq-radio-letter-wrong'
                                  : `${
                                      userChoices[index] !==
                                        letterToNum(correct) &&
                                      letterToNum(correct) === 1
                                        ? 'mcq-radio-letter-correct-missed'
                                        : 'mcq-radio-letter'
                                    } `
                              } `
                        } `}
                      >
                        B
                      </div>
                      {b}
                    </li>
                    <li className="flex items-center">
                      <div
                        className={` ${
                          userChoices[index] === letterToNum(correct) &&
                          userChoices[index] === 2
                            ? 'mcq-radio-letter-correct'
                            : `${
                                userChoices[index] !== letterToNum(correct) &&
                                userChoices[index] === 2
                                  ? 'mcq-radio-letter-wrong'
                                  : `${
                                      userChoices[index] !==
                                        letterToNum(correct) &&
                                      letterToNum(correct) === 2
                                        ? 'mcq-radio-letter-correct-missed'
                                        : 'mcq-radio-letter'
                                    } `
                              } `
                        } `}
                      >
                        C
                      </div>
                      {c}
                    </li>
                    <li className="flex items-center">
                      <div
                        className={` ${
                          userChoices[index] === letterToNum(correct) &&
                          userChoices[index] === 3
                            ? 'mcq-radio-letter-correct'
                            : `${
                                userChoices[index] !== letterToNum(correct) &&
                                userChoices[index] === 3
                                  ? 'mcq-radio-letter-wrong'
                                  : `${
                                      userChoices[index] !==
                                        letterToNum(correct) &&
                                      letterToNum(correct) === 3
                                        ? 'mcq-radio-letter-correct-missed'
                                        : 'mcq-radio-letter'
                                    } `
                              } `
                        } `}
                      >
                        D
                      </div>
                      {d}
                    </li>
                  </ul>
                ) : (
                  <ul className="list-none my-4 ml-4 space-y-3">
                    <li
                      className="flex items-center cursor-pointer"
                      onClick={() => handleChoice(0, index)}
                    >
                      <div
                        className={` ${
                          userChoices[index] === 0
                            ? 'mcq-radio-letter-selected'
                            : 'mcq-radio-letter'
                        } `}
                      >
                        A
                      </div>
                      {a}
                    </li>
                    <li
                      className="flex items-center cursor-pointer"
                      onClick={() => handleChoice(1, index)}
                    >
                      <div
                        className={` ${
                          userChoices[index] === 1
                            ? 'mcq-radio-letter-selected'
                            : 'mcq-radio-letter'
                        }`}
                      >
                        B
                      </div>
                      {b}
                    </li>
                    <li
                      className="flex items-center cursor-pointer"
                      onClick={() => handleChoice(2, index)}
                    >
                      <div
                        className={` ${
                          userChoices[index] === 2
                            ? 'mcq-radio-letter-selected'
                            : 'mcq-radio-letter'
                        }`}
                      >
                        C
                      </div>
                      {c}
                    </li>
                    <li
                      className="flex items-center cursor-pointer"
                      onClick={() => handleChoice(3, index)}
                    >
                      <div
                        className={` ${
                          userChoices[index] === 3
                            ? 'mcq-radio-letter-selected'
                            : 'mcq-radio-letter'
                        }`}
                      >
                        D
                      </div>
                      {d}
                    </li>
                  </ul>
                )}
                {source !== '' ? (
                  <a
                    href={source}
                    className="inline-flex items-center justify-center text-base text-gray-400 px-3 py-1 border-t-2 border-gray-400 border-dotted"
                    target="_blank"
                  >
                    Source <InformationCircleIcon className="h-6 w-6 ml-1" />
                  </a>
                ) : (
                  ''
                )}
              </div>
            )
          )}
          <div>
            {showAnswers ? (
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 mb-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                  onClick={handleRedo}
                >
                  Redo?
                </button>
                <ScoreAlert
                  score={
                    userChoices?.filter(
                      (item, index) =>
                        item === letterToNum(filteredMcqs[index].correct)
                    ).length
                  }
                  totalPoints={filteredMcqs?.length}
                />
              </div>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 mb-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                onClick={handleSubmit}
              >
                Submit <CheckIcon className="h-6 w-6 ml-1" />
              </button>
            )}
            <br />
            {missedProblems !== 0 ? (
              <p className="border-t-2 pt-2 pr-5 border-red-200 text-sm text-red-500 font-bold inline">
                {missedProblems}{' '}
                {missedProblems === 1 ? "problem hasn't" : "problems haven't"}{' '}
                been answered.
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default MCQ
