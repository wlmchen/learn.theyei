import React, { useState, useRef, useEffect } from 'react'

export default function DemoCtaBtn({ btnTitle, links }) {
  const node = useRef(null)
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    if (node.current.contains(e.target)) setOpen(true)
    else setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div ref={node} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={open}
          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker"
        >
          {btnTitle}
          <div className="mt-px">
            <svg
              className="ml-1 -mr-1 mt-0.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      <div
        className={`${
          open
            ? 'pointer-events-auto opacity-100 scale-100'
            : 'pointer-events-none opacity-0 scale-95'
        } origin-top-right z-30 absolute trans-150 right-0 mt-2 w-32 rounded-md shadow-lg bg-white`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {links.map(({ title, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
