import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

export default function Announcement({
  smTitle,
  title,
  ctaHref,
  ctaText,
  setVisible,
  children,
}: AnnouncementProps) {
  if (!smTitle) smTitle = title
  return (
    <div style={{ paddingTop: '4rem' }}>
      <div className="bg-yei-primary-main">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-yei-primary-darker">
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="h-6 w-6 text-white"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">{smTitle}</span>
                <span className="hidden md:inline">{title}</span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              {children
                ? children
                : ctaHref && (
                    <Link href={ctaHref}>
                      <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yei-primary-main bg-white hover:bg-gray-100">
                        {ctaText ? ctaText : 'Learn more'}
                      </a>
                    </Link>
                  )}
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:yei-primary-main focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => {
                  setVisible(false)
                }}
              >
                <span className="sr-only">Dismiss</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type AnnouncementProps = {
  smTitle?: string
  title: string
  ctaHref?: string
  ctaText?: string
  setVisible: any
  children?: any
}
