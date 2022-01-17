import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

function SignInReminder({condition, children}) {
    return (
      <>
        {condition ? (
          <>{children}</>
        ) : (
          <div className="min-h-screen w-full justify-center flex-row m-auto flex items-center opacity-25">
            <Link href="/login">
              <a className="font-bold flex items-center">
                <ArrowLeftIcon className="w-5 h-5 mr-2" /> Sign into your
                account
              </a>
            </Link>
          </div>
        )}
      </>
    )
}

export default SignInReminder
