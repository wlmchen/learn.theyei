import React from 'react'

import team from '../../../data/people/team'
import Profile from './Profile'

export default function Members() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 text-left sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12">
          <ul className="mx-auto flex md:flex-wrap align-middle justify-center flex-col md:flex-row lg:max-w-7xl">
            {team.map((member: any) => {
              let key = member.name.replace(/\s+/g, '-').toLowerCase()
              return (
                <Profile
                  key={key}
                  imgSrc={`/img/people/team/${key}.jpg`}
                  name={member.name}
                  positions={member.positions}
                  linkedin={member.linkedin}
                  github={member.github}
                  email={
                    member.email
                      ? member.email
                      : `${member.name.split(' ')[0].toLowerCase()}@theyei.org`
                  }
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
