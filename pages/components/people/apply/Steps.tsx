import React from 'react'
import {
  faCheck,
  faCopy,
  faEnvelope,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import Step from './Step'

export default function Steps() {
  return (
    <div className="flow-root mx-auto">
      <ul>
        <Step icon={faCopy}>
          <p className="text-xl text-gray-500">
            Read the{' '}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1VBmep4hRFlc_m34zoB3PrCpR41UnlAKgH2r-k3FBrAM/edit"
              className="font-medium text-gray-900"
            >
              YEI leadership application packet
            </a>
          </p>
        </Step>
        <Step icon={faPen}>
          <p className="text-xl text-gray-500">
            Fill out the{' '}
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScuBLgcJLqseYxchYfhy94rr7GMuGDoT4vxaOcbrV7HQ8eDtw/viewform"
              className="font-medium text-gray-900"
            >
              leadership application
            </a>
          </p>
        </Step>
        <Step icon={faEnvelope}>
          <p className="text-xl text-gray-500">
            Email{' '}
            <a
              target="_blank"
              href="mailto:recruiting@theyei.org"
              className="font-medium text-gray-900"
            >
              recruiting@theyei.org
            </a>{' '}
            stating you have submitted an application
          </p>
        </Step>
        <Step icon={faCheck} lastStep color="yei-primary-main">
          <p className="text-xl text-gray-500">
            We'll get back to you as soon as possible
          </p>
        </Step>
      </ul>
      <p className="text-sm text-gray-500">
        Positions in the YEI leadership team are competitive. Your quality of
        submission in the application and interviewing abilities will be heavily
        considered in a final decision.
      </p>
    </div>
  )
}
