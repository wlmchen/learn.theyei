import React from 'react'

function FRQCheck({ points, children }) {
  return (
    <li className="ml-3 p-4 text-sm">
      <b>{points} points</b>
      <ul>{children}</ul>
    </li>
  )
}

export default FRQCheck
