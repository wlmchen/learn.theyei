import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Profile({
  name,
  positions,
  imgSrc,
  email,
  linkedin,
  github,
}: ProfileProps) {
  return (
    <div className="md:w-1/2 xl:w-1/3 p-1">
      <div className="trans-300 h-full flex items-center rounded-lg border border-gray-200 bg-white px-4 sm:px-6 py-5 shadow-sm hover:shadow">
        <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
          <div className="flex-shrink-0">
            <img
              className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-gray-900"
              src={imgSrc}
              alt={name}
            />
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            <span className="" aria-hidden="true" />
            <p className="text-2xl font-medium text-yei-secondary-main">
              {name}
            </p>
            <div className="-mx-0.5">
              {positions.map((pos) => (
                <span
                  key={pos}
                  className={`${
                    pos.length > 23 ? 'text-xs' : 'text-sm'
                  } whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 text-yei-secondary-main`}
                >
                  {pos}
                </span>
              ))}
            </div>
            <div>
              <ul className="flex">
                {[
                  { href: linkedin, icon: faLinkedin, sr: 'linkedin' },
                  { href: 'mailto:' + email, icon: faEnvelope, sr: 'github' },
                  { href: github, icon: faGithub, sr: 'email' },
                ].map(({ href, sr, icon }) => (
                  <div key={sr + href}>
                    {href && (
                      <li className="mr-1">
                        <a
                          target="_blank"
                          href={href}
                          className="p-1.5 rounded-full inline-block  hover:bg-gray-300 bg-gray-200 text-yei-secondary-main hover:text-yei-secondary-main"
                        >
                          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                        </a>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ProfileProps = {
  name: string
  positions: string[]
  imgSrc: string
  email: string
  linkedin: string
  github?: string
}