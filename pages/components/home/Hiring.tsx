import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hiring() {
  const [showModal, setShowModal] = useState(false)
  const [hideAway, setHideAway] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('hideHiringModal') === 'yes') {
      setDeleteModal(true)
    } else if (localStorage.getItem('hideHiringModal') === null) {
      localStorage.setItem('hideHiringModal', 'no')
    }
    setTimeout(() => setShowModal(true), 5000)
  }, [])

  const handleDelete = () => {
    setHideAway(true)
    setTimeout(() => setDeleteModal(true), 1500)
    localStorage.setItem('hideHiringModal', 'yes')
  }

  return (
    <>
      {!deleteModal ? (
        <div>
          <button className={`fixed-center z-50 max-w-xs`}>
            <div
              className={`relative w-full rounded-xl p-5 hiring-modal-transition overflow-hidden bg-white shadow-2xl max-h-96 ${
                showModal ? 'block slide-in-from-top' : 'hidden'
              } ${hideAway ? 'slide-out-from-top' : ''}`}
            >
              <div
                className="absolute top-2 right-2 z-30 cursor-pointer"
                onClick={handleDelete}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="h-4 w-4 text-gray-300"
                />
              </div>
              <h3 className={`text-lg font-semibold mb-2 text-black`}>
                Guess what? We're hiring!
              </h3>
              <div>
                <p className="text-gray-400 mb-4">
                  Passionate about what we do? Want to join an international
                  team of leaders, creators, and economics enthusiasts?
                </p>
                <Link href="/people/apply">
                  <div className="w-full trans-300 bg-yei-primary-main border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yei-primary-darker focus:outline-none cursor-pointer">
                    Apply Now!
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={`-mr-1 ml-3 h-4 w-4`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </button>
          <div
            className={`hiring-bg-overlay ${
              showModal ? 'block fade-in' : 'hidden'
            } ${hideAway ? 'fade-out' : ''}`}
          ></div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
