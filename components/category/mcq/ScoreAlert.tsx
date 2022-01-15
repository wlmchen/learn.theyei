import { EmojiHappyIcon, EmojiSadIcon } from '@heroicons/react/solid'

import { MCQScore } from 'types';

type ScoreAlertProps = {
  score: MCQScore,
  totalPoints: MCQScore 
}

export default function ScoreAlert({ score, totalPoints }: ScoreAlertProps) {
  const scorePercent = score / totalPoints
  return (
    <div
      className={`rounded-md max-w-md ${
        scorePercent >= 0.8
          ? 'bg-green-500'
          : scorePercent >= 0.6
          ? 'bg-yellow-500'
          : 'bg-red-500'
      } p-4`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {scorePercent >= 0.8 ? (
            <EmojiHappyIcon className="h-5 w-5 text-white" />
          ) : scorePercent >= 0.6 ? (
            <EmojiHappyIcon className="h-5 w-5 text-white" />
          ) : (
            <EmojiSadIcon className="h-5 w-5 text-white" />
          )}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-white">
            Your score was{' '}
            <b>
              {score}/{totalPoints}
            </b>
          </h3>
          <p className={`mt-2 text-sm text-white opacity-80`}>
            {scorePercent >= 0.8
              ? "Keep up the great work! Let's keep this thing moving!"
              : scorePercent >= 0.6
              ? 'Hey, no problem at all. Want to try again?'
              : "Don't sweat it. You'll get there. Want to give it another go?"}
          </p>
        </div>
      </div>
    </div>
  )
}
