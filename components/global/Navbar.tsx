import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'
import { kebabCase } from '@/lib/utils'
const navigation = [{ name: 'Dashboard', href: '/dashboard' }]
const categoryNavigation = [
  { name: 'General', href: '/general' },
  { name: 'Micro', href: '/micro' },
  { name: 'Macro', href: '/macro' },
]
const userNavigation = [
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ page }) {
  const auth = useAuth()
  const router = useRouter()
  // console.log(router.query.slug)
  return (
    <>
      <Disclosure as="nav" className="bg-white z-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link
                      href={`${
                        page === 'login' || page === 'signup'
                          ? '/'
                          : '/dashboard'
                      }`}
                    >
                      <img
                        className="h-10 w-auto"
                        src="/img/logos/yei-training-logo.svg"
                        alt="YEI Logo"
                      />
                    </Link>
                  </div>
                </div>
                {page !== 'signup' && page !== 'login' ? (
                  <>
                    <div className="hidden h-full sm:ml-6 sm:flex sm:items-center ">
                      <div className="hidden h-full sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              kebabCase(item.name) === page
                                ? 'border-yei-primary-main text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'inline-flex items-center px-1 pt-1 border-b-4 text-lg font-medium'
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <Menu
                        as="div"
                        className="z-50 ml-8 relative sm:mr-8 h-full"
                      >
                        {({ open }) => (
                          <div className="h-full">
                            <div className="h-full">
                              <Menu.Button
                                className={classNames(
                                  page === 'general' ||
                                    page === 'macro' ||
                                    page === 'micro'
                                    ? 'border-yei-primary-main text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                  'h-full inline-flex items-center px-1 pt-1 border-b-4 text-lg font-medium'
                                )}
                              >
                                Categories{' '}
                                <ChevronDownIcon
                                  strokeWidth={3}
                                  className="ml-2 h-5 w-5 text-inherit"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                {categoryNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <div
                                        key={item.name}
                                        className="bg-white hover:bg-gray-200 transition-color duration-300"
                                      >
                                        <a
                                          href={item.href}
                                          className="block px-4 py-2 text-md text-gray-700"
                                        >
                                          {item.name}
                                        </a>
                                      </div>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </div>
                        )}
                      </Menu>
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 z-50 relative">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main">
                                <span className="sr-only">Open user menu</span>
                                <div className="rounded-full w-10 h-10 overflow-hidden border-2 border-yei-primary-gray shadow-xl">
                                  <Image
                                    width={40}
                                    height={40}
                                    src={
                                      auth.user?.photoUrl ||
                                      '/img/others/emptyUser.svg'
                                    }
                                    alt="Profile picture"
                                  />
                                </div>
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-6 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <div className="mt-2 mx-4 border-b pb-2 overflow-x-hidden">
                                  <div className="text-sm font-medium text-gray-800">
                                    {auth.user?.name || ''}
                                  </div>
                                  <div className="text-xs font-medium text-gray-500">
                                    {auth.user?.email || ''}
                                  </div>
                                </div>
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <div key={item.name}>
                                        {item.name === 'Sign out' ? (
                                          <button
                                            className="block px-4 py-2 text-md text-gray-700"
                                            onClick={() => auth.signout()}
                                          >
                                            {auth.user ? (
                                              <>{item.name}</>
                                            ) : (
                                              <div className="w-20 bg-gray-200 animate-pulse h-5 rounded-md"></div>
                                            )}
                                          </button>
                                        ) : (
                                          <a
                                            href={item.href}
                                            className="block px-4 py-2 text-md text-gray-700"
                                          >
                                            {item.name}
                                          </a>
                                        )}
                                      </div>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            {page !== 'signup' && page !== 'login' ? (
              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        kebabCase(item.name) === page
                          ? 'bg-indigo-50 border-yei-primary-main text-indigo-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={
                        kebabCase(item.name) === page ? 'page' : undefined
                      }
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-3 border-t border-gray-200">
                  <div className="space-y-1">
                    {categoryNavigation.map((item) => (
                      <div
                        key={item.name}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-full w-10 h-10 overflow-hidden border-2 border-yei-primary-gray shadow-xl">
                        <Image
                          width={40}
                          height={40}
                          src={
                            auth.user?.photoUrl || '/img/others/emptyUser.svg'
                          }
                          alt="Profile picture"
                        />
                      </div>
                    </div>
                    <div className="ml-3 overflow-x-hidden">
                      <div className="text-base font-medium text-gray-800">
                        {auth.user?.name || ''}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {auth.user?.email || ''}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <div key={item.name}>
                        {item.name === 'Sign out' ? (
                          <>
                            {auth.user ? (
                              <button
                                className="block px-4 py-2 text-md text-gray-700"
                                onClick={() => auth.signout()}
                              >
                                {auth.user ? (
                                  <>{item.name}</>
                                ) : (
                                  <div className="w-20 bg-gray-200 animate-pulse h-5 rounded-md"></div>
                                )}
                              </button>
                            ) : (
                              <button className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                <div className="w-20 bg-gray-200 animate-pulse h-5 rounded-md"></div>
                              </button>
                            )}
                          </>
                        ) : (
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            ) : (
              <div></div>
            )}
          </>
        )}
      </Disclosure>
    </>
  )
}
