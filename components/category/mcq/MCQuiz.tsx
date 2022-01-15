import { CheckIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { MCQ, MCQScore, Slug } from 'types'
import React, { useEffect, useState } from 'react'
import { createMCQScore, removeMCQScore } from '@/lib/db'
import { kebabCase, letterToNum } from '@/lib/utils'
import { kebabCategories, kebabChapters } from '@/data/routes'

import Latex from 'react-latex'
import ScoreAlert from './ScoreAlert'
import fetcher from '@/utils/fetcher'
import mcq from '@/data/mcq'
import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

type IndexChoice = 0 | 1 | 2 | 3 | null

type QuestionIndex = 0 | 1 | 2 | 3 | 4

type UserChoices = [
  IndexChoice,
  IndexChoice,
  IndexChoice,
  IndexChoice,
  IndexChoice
]

function MCQuiz({ slug }: { slug: Slug }) {
  const [missedProblems, setMissedProblems] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false) // To show correct answers after an attempt. Once the page reloads or is revisted again, the page will listen to "alreadyComplete"
  const [alreadyComplete, setAlreadyComplete] = useState(false) // If user already completed this MCQ
  const [newId, setNewId] = useState('')

  const [filteredMcqs, setFilteredMcqs] = useState([])
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  const auth = useAuth()
  const { data: mcqScoreData } = useSWR(
    auth.user
      ? [`/api/mcqs/${slug.join('/')}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )
  const randomSeq = []
  const sortedMcqs = mcq.slice().filter((item) => {
    return (
      kebabCase(item.category.substring(0, item.category.length - 2)) ===
        slug[0] &&
      parseInt(
        item.category.substring(item.category.length - 1, item.category.length)
      ) ===
        kebabChaptersSelection.indexOf(slug[1]) + 1
    )
  })
  useEffect(() => {
    new Array(sortedMcqs.length).fill(null).forEach(() => {
      randomSeq.push(Math.random() - 0.5)
    })
    setFilteredMcqs(
      sortedMcqs.sort((item) => randomSeq[sortedMcqs.indexOf(item)]).slice(0, 5)
    )
  }, [])

  const [userChoices, setUserChoices] = useState<UserChoices>([
    null,
    null,
    null,
    null,
    null,
  ])

  const handleChoice = (
    letterIndex: IndexChoice,
    questionNumber: QuestionIndex
  ) => {
    const newUserChoices: UserChoices = [...userChoices]
    newUserChoices[questionNumber] = letterIndex
    setUserChoices(newUserChoices)
  }

  useEffect(() => {
    if (mcqScoreData) {
      setAlreadyComplete(mcqScoreData.score[0]?.score !== undefined || false)
      setShowAnswers(mcqScoreData.score[0]?.score !== undefined || false)
      if (mcqScoreData.score[0]?.score) {
        setFilteredMcqs(mcqScoreData.score[0].mcqContent)
        setUserChoices(mcqScoreData.score[0].userChoices)
      }
    }
  }, [mcqScoreData])

  let userScore: MCQScore = 0

  userChoices.forEach(
    (item, index) =>
      (userScore += item === letterToNum(filteredMcqs[index].correct) ? 1 : 0)
  )

  const onCreateMCQScore = () => {
    const newScore: MCQ = {
      category: slug[0],
      chapter: slug[1],
      userChoices: userChoices,
      score: userScore,
      totalPoints: 5,
      mcqContent: filteredMcqs,
      createdAt: new Date().toISOString(),
      userId: auth.user.uid,
      type: 'mcq',
    }
    const { id } = createMCQScore(newScore)
    setNewId(id)
  }
  const handleSubmit = () => {
    if (userChoices.filter((item) => item === null).length === 0) {
      setMissedProblems(0)

      setShowAnswers(true)
      onCreateMCQScore()
    } else {
      setMissedProblems(userChoices.filter((item) => item === null).length)
    }
  }
  const handleRedo = () => {
    new Array(sortedMcqs.length).fill(null).forEach(() => {
      randomSeq.push(Math.random() - 0.5)
    })

    setFilteredMcqs(
      sortedMcqs.sort((item) => randomSeq[sortedMcqs.indexOf(item)]).slice(0, 5)
    )
    setShowAnswers(false)
    setAlreadyComplete(false)
    setUserChoices([null, null, null, null, null])
    removeMCQScore(mcqScoreData.score[0]?.id || newId)
  }
  return (
    <>
      {mcqScoreData && filteredMcqs.length !== 0 && (
        <div>
          {alreadyComplete && (
            <div className="mb-8 bg-white p-5 rounded-lg border-2 border-gray-200">
              <p className="text-gray-700 text-sm sm:text-base">
                Looks like you&apos;ve already taken this practice quiz and got
                a score of{' '}
                <b>
                  {
                    userChoices?.filter(
                      (item, index) =>
                        item === letterToNum(filteredMcqs[index].correct)
                    ).length
                  }
                  /{filteredMcqs?.length}
                </b>
                . Would you like to try again?
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
          <div>
            {filteredMcqs.map(
              (
                { question, a, b, c, d, correct, source, questionsAreImages },
                index: IndexChoice
              ) => (
                <div key={index} className="mb-12">
                  <div className="inline-block uppercase px-4 py-2 rounded-lg bg-indigo-200 text-indigo-500 font-bold text-sm mb-2">
                    Problem #{index + 1}
                  </div>
                  <p className="text-base sm:text-lg italic">
                    <Latex>{question}</Latex>
                  </p>
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
                        {questionsAreImages && typeof a !== 'number' ? (
                          <img src={a} width="300" />
                        ) : (
                          a
                        )}
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
                        {questionsAreImages && typeof b !== 'number' ? (
                          <img src={b} width="300" />
                        ) : (
                          b
                        )}
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
                        {questionsAreImages && typeof c !== 'number' ? (
                          <img src={c} width="300" />
                        ) : (
                          c
                        )}
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
                        {questionsAreImages && typeof d !== 'number' ? (
                          <img src={d} width="300" />
                        ) : (
                          d
                        )}
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
                        {questionsAreImages && typeof a !== 'number' ? (
                          <img src={a} width="300" />
                        ) : (
                          a
                        )}
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
                        {questionsAreImages && typeof b !== 'number' ? (
                          <img src={b} width="300" />
                        ) : (
                          b
                        )}
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
                        {questionsAreImages && typeof c !== 'number' ? (
                          <img src={c} width="300" />
                        ) : (
                          c
                        )}
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
                        {questionsAreImages && typeof d !== 'number' ? (
                          <img src={d} width="300" />
                        ) : (
                          d
                        )}
                      </li>
                    </ul>
                  )}
                  {source !== '' ? (
                    <a
                      href={source}
                      className="inline-flex items-center justify-center text-base text-gray-400 px-3 py-1 border-t-2 border-gray-400 border-dotted"
                      target="_blank"
                      rel="noreferrer"
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
                  <ScoreAlert score={userScore} totalPoints={5} />
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
        </div>
      )}
    </>
  )
}

export default MCQuiz
