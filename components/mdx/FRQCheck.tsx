import React from 'react'

function FRQCheck({ points, children }) {
  return (
    <li className="ml-3 p-4 text-sm">
      <b>
        {points} point{points !== 1 ? 's' : ''}
      </b>
      <ul>{children}</ul>
    </li>
  )
}

export default FRQCheck
