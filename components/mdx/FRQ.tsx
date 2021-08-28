import { useAuth } from '@/lib/auth'
import { saveFRQScore, createFRQScore, updateFRQScore } from '@/lib/db'
import fetcher from '@/utils/fetcher'
import { EyeIcon, EyeOffIcon, XCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import FRQNotification from './FRQNotification'

function FRQ({ totalPoints, children }) {
  const auth = useAuth()
  const router = useRouter()
  const slug = router.query.slug || []
  const [showAnswers, setShowAnswers] = useState(false)
  const [points, setPoints] = useState('0')
  const [pointsError, setPointsError] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const { data: frqScoreData } = useSWR(
    auth.user
      ? [`/api/frqs/${slug.join('/')}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )

  useEffect(() => {
    if (frqScoreData) {
      console.log(frqScoreData)
      setPoints(frqScoreData.score[0]?.score || '')
    }
  }, [frqScoreData])

  const onCreateFRQScore = () => {
    let newScore = {
      category: slug[0],
      chapter: slug[1],
      score: points,
      totalPoints: totalPoints,
      createdAt: new Date().toISOString(),
      userId: auth.user.uid,
    }
    createFRQScore(newScore)
  }

  const onUpdateFRQScore = (id) => {
    const newScore = {
      score: points,
      createdAt: new Date().toISOString(),
    }
    updateFRQScore(id, newScore)
  }

  const handleSubmit = () => {
    const userPoints = parseInt(points)
    if (userPoints <= 10 && userPoints >= 0) {
      if (userPoints % 1 === 0) {
        setPointsError('')
        setShowNotification(true)
        if (frqScoreData.score.length === 0) {
          onCreateFRQScore()
          console.log('create')
        } else {
          onUpdateFRQScore(frqScoreData.score[0].id)
          console.log('update', slug, frqScoreData)
        }
      } else {
        setPointsError(`Cannot be a decimal.`)
      }
    } else {
      setPointsError(`Must be a number 0 through ${totalPoints}.`)
    }
  }
  const handleCheck = () => {
    setShowAnswers(!showAnswers)
  }

  const handlePointsChange = (e) => {
    setPoints(e.target.value)
  }

  return (
    <div className="mb-10">
      <FRQNotification showNotification={showNotification} />
      <div
        className={`flex ${
          showAnswers ? 'mb-32' : 'mb-0'
        } mt-2 sm:mb-0 sm:flex-row sm:space-x-2 sm:space-y-0 items-start space-x-0 flex-col h-10 space-y-2`}
      >
        <div className="w-full flex space-x-2">
          <button
            type="button"
            className={`flex h-full items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2`}
            onClick={handleCheck}
          >
            {showAnswers ? (
              <EyeOffIcon className="mr-2 h-5 w-5 text-white" />
            ) : (
              <EyeIcon className="mr-2 h-5 w-5 text-white" />
            )}
            {showAnswers ? `Hide Solutions` : `Show Solutions`}
          </button>
        </div>
        {showAnswers ? (
          <>
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

            <button
              type="button"
              className="h-full  items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </>
        ) : (
          ''
        )}
      </div>
      {showAnswers && (
        <div>
          {pointsError !== '' && (
            <div className="mt-4 rounded-md bg-red-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-white">
                    {pointsError}
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <ol className="alpha-list-mdx pl-8 bg-white rounded-xl shadow-xl">
              {children}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}

export default FRQ
