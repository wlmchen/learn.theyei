import React from 'react'

function FRQ({ children }) {
  return (
    <div>
      <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
      <button
        type="button"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Check Answers
      </button>
      <ol className="alpha-list-mdx">{children}</ol>
    </div>
  )
}

export default FRQ
