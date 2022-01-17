import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FooterColumn from './FooterColumn'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 z-20 relative"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterColumn
                  title="Events"
                  links={[
                    { href: '/events/econbowl', name: 'EconBowl' },
                    { href: '/events/econolympiad', name: 'EconOlympiad' },
                    { href: '/events/econtalks', name: 'EconTalks' },
                    { href: '/events', name: 'All Events' },
                  ]}
                />
              </div>
              <div className="mt-12 md:mt-0">
                <FooterColumn
                  title="Clubs"
                  links={[
                    { href: '/clubs/register', name: 'Register a Club' },
                    { href: '/clubs/current-clubs', name: 'Current Clubs' },
                    { href: '/clubs', name: 'EconClubs Info' },
                  ]}
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterColumn
                  title="Programs"
                  links={[
                    { href: '/programs/flip', name: 'FLIP' },
                    { href: '/programs/earn', name: 'EARN' },
                    { href: '/resources', name: 'Resources' },
                    { href: '/people/apply', name: 'YEI Hiring' },
                  ]}
                />
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Donate to YEI
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  Youth Economics Initiative is a 501(c)(3) non-profit
                  organization.
                </p>
                <div className="mt-4 rounded-md">
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_blank"
                  >
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      defaultValue="99E63279HUDNW"
                    />
                    <button
                      type="submit"
                      className="w-full trans-300 bg-yei-primary-main border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yei-primary-darker focus:outline-none"
                    >
                      <FontAwesomeIcon
                        icon={faPaypal}
                        className="w-5 h-5 mr-2"
                      />
                      Donate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {[
              {
                name: 'Email',
                icon: faEnvelope,
                href: 'mailto:admin@theyei.org',
              },
              {
                name: 'Facebook',
                icon: faFacebook,
                href: 'https://www.facebook.com/youtheconomicsinitiative/',
              },
              {
                name: 'Instagram',
                icon: faInstagram,
                href: 'https://www.instagram.com/the.yei/',
              },
              {
                name: 'Discord',
                icon: faDiscord,
                href: 'https://discord.gg/RC588cv',
              },
              {
                name: 'Linkedin',
                icon: faLinkedin,
                href: 'https://www.linkedin.com/company/31421051',
              },
            ].map((link) => (
              <a
                key={link.href}
                target="_blank"
                href={link.href}
                className="trans-300 text-gray-400 hover:text-gray-300"
                rel="noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © 2022 Youth Economics Initiative Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
