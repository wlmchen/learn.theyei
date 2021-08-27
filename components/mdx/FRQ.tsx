import { useAuth } from '@/lib/auth'
import { saveFRQScore, createFRQScore, updateFRQScore } from '@/lib/db'
import fetcher from '@/utils/fetcher'
import { SaveIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

function FRQ({ totalPoints, children }) {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []
  const [showAnswers, setShowAnswers] = useState(false)
  const [points, setPoints] = useState('0')
  const [response, setResponse] = useState('')
  const { data: frqScoreData } = useSWR(
    auth.user
      ? [`/api/frqs/${slug.join('/')}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )

  useEffect(() => {
    if (frqScoreData) {
      console.log(frqScoreData)
      setResponse(frqScoreData.score[0]?.response || '')
      setPoints(frqScoreData.score[0]?.score || '')
    }
  }, [frqScoreData])

  const onCreateFRQScore = (newScoreToSave: boolean) => {
    let newScore = {
      category: slug[0],
      chapter: slug[1],
      response: response,
      score: points,
      totalPoints: totalPoints,
      createdAt: new Date().toISOString(),
      userId: auth.user.uid,
    }
    if (newScoreToSave) {
      newScore.score = '0'
    }
    createFRQScore(newScore)
  }
  const onSaveFRQScore = (id, response) => {
    saveFRQScore(id, response)
  }

  const onUpdateFRQScore = (id) => {
    const newScore = {
      score: points,
      response: response,
      createdAt: new Date().toISOString(),
    }
    updateFRQScore(id, newScore)
  }

  const handleSubmit = () => {
    if (parseInt(points) <= 10 && parseInt(points) >= 0) {
      if (frqScoreData.score.length === 0) {
        onCreateFRQScore(false)
        console.log('create')
      } else {
        console.log('update', slug, frqScoreData)
        onUpdateFRQScore(frqScoreData.score[0].id)
      }
    }
  }
  const handleSave = () => {
    if (frqScoreData.score.length === 0) {
      onCreateFRQScore(true)
      console.log('create')
    } else {
      saveFRQScore(frqScoreData.score[0].id, response)
      console.log('save', response)
    }
  }
  const handleCheck = () => {
    setShowAnswers(!showAnswers)
  }

  const handlePointsChange = (e) => {
    setPoints(e.target.value)
  }

  const handleResponseChange = (e) => {
    setResponse(e.target.value)
  }

  return (
    <div className="mb-10">
      <textarea
        rows={8}
        value={response}
        onChange={handleResponseChange}
        placeholder="Type your free response here. Once finished, you can check your answers and submit!"
        className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main block w-full sm:text-sm border-gray-300 rounded-md"
      ></textarea>
      <div
        className={`flex ${
          showAnswers ? 'mb-32' : 'mb-0'
        } mt-2 sm:mb-0 sm:flex-row sm:space-x-2 sm:space-y-0 items-start space-x-0 flex-col h-10 space-y-2`}
      >
        <div className="w-full flex space-x-2">
          <button
            type="button"
            className={`flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            onClick={handleSave}
          >
            <SaveIcon className="text-indigo-800 w-6 mr-3" /> Save
          </button>
          <button
            type="button"
            className={`h-full items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
              showAnswers ? 'opacity-50' : 'opacity-100'
            } bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2`}
            onClick={handleCheck}
          >
            {showAnswers ? 'Hide Answers' : 'Check Answers'}
          </button>
        </div>
        {showAnswers ? (
          <div className="w-36 sm:w-56 h-full flex rounded-md shadow-sm">
            <input
              type="number"
              name="company-website"
              id="company-website"
              min="0"
              max={totalPoints.toString()}
              value={points}
              onChange={handlePointsChange}
              className="h-full z-10 appearence-none focus:ring-0 flex-1 block w-full px-3 py-2 rounded-none rounded-l-md sm:text-sm border-gray-300 focus:ring-yei-primary-main focus:border-yei-primary-main"
            />
            <span className="h-full inline-flex items-center px-3 rounded-r-md border border-r-md border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              out of {totalPoints}
            </span>
          </div>
        ) : (
          ''
        )}
        {showAnswers ? (
          <button
            type="button"
            className="h-full  items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          ''
        )}
      </div>
      {showAnswers ? (
        <div className="mt-8">
          <ol className="alpha-list-mdx pl-8 bg-white rounded-xl shadow-xl">
            {children}
          </ol>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default FRQ
