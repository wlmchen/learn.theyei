import React from 'react'
import Link from 'next/link'

export default function Column({ title, links }) {
  return (
    <>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {links.map((link) => (
          <li key={link.href + link.name}>
            <Link href={link.href}>
              <a className="text-base text-gray-300 hover:text-white">
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
