import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, ExternalLinkIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center md:space-x-10 py-3 px-4 sm:px-6 lg:px-8">
        {/* <Link href="/" passHref> */}
        <div className="h-12 w-40 relative cursor-pointer">
          <Image
            src="/img/logos/yei-training-logo.svg"
            alt="YEI Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* </Link> */}
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yei-primary-full">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex items-center md:ml-12">
            <a href="https://theyei.org" target="_blank" rel="noreferrer">
              <span className="text-lg font-medium mr-12 flex items-center cursor-pointer text-gray-500 hover:text-gray-900">
                theyei.org
                <ExternalLinkIcon className="mt-1 ml-2 h-5 w-5" />
              </span>
            </a>
            <Link href="/login" passHref>
              <a className="text-lg font-medium cursor-pointer text-gray-500 hover:text-gray-900">
                Login
              </a>
            </Link>
            <Link href="/signup" passHref>
              <a className="text-lg font-medium cursor-pointer ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="h-12 w-40 relative cursor-pointer">
                  <Image
                    src="/img/logos/yei-training-logo.svg"
                    alt="YEI Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yei-primary-main">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://theyei.org"
                  className="text-lg font-medium flex items-center text-gray-900 hover:text-gray-700"
                >
                  theyei.org
                  <ExternalLinkIcon className="mt-1 ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <Link href="/signup" passHref>
                  <span className="text-lg font-medium cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker">
                    Sign up
                  </span>
                </Link>
                <p className="text-lg font-medium mt-6 text-center text-gray-500">
                  Existing user?{' '}
                  <Link href="/login" passHref>
                    <span className="cursor-pointer text-yei-primary-main hover:text-yei-primary-darker">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
