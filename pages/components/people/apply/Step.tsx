import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step({ icon, color, children, lastStep }: StepTypes) {
  return (
    <li>
      <div className="relative pb-8">
        {!lastStep && (
          <span
            className="absolute top-4 left-5 sm:left-6 h-full ml-0.5 sm:ml-px w-1 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={`${
                'bg-' + (color ? color : 'yei-secondary-brighter')
              } h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center`}
            >
              <FontAwesomeIcon
                icon={icon}
                className="h-5 w-5 sm:h-6 sm:w-6 text-white"
              />
            </span>
          </div>
          <div className="min-w-0 flex-1 pt-3 mt-0.5 flex justify-between space-x-4">
            {children}
          </div>
        </div>
      </div>
    </li>
  )
}

type StepTypes = {
  children: React.ReactNode
  icon: any
  color?: string
  lastStep?: boolean
}
