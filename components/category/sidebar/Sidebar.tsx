import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { kebabCase } from '@/lib/utils'
import GroupSelect from './GroupSelect'

import routes, { categories, kebabCategories } from '@/data/routes'
import { useRouter } from 'next/router'
import { XIcon, MenuAlt2Icon, BellIcon } from '@heroicons/react/solid'
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CogIcon,
  MenuIcon,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ children, modules }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const slug = router.query.slug || []
  const [categoryIndex, setCategoryIndex] = useState(-1)

  useEffect(() => {
    setCategoryIndex(kebabCategories.indexOf(slug[0]))
    setSidebarOpen(false)
  }, [router])
  return (
    <>
      {categoryIndex !== -1 && categoryIndex !== undefined ? (
        <div className="w-full h-screen flex justify-center overflow-hidden bg-gray-100">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="z-50 absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 flex flex-col pt-5">
                    <div className="flex py-5 justify-center flex-shrink-0 px-4">
                      <Link href="/dashboard">
                        <img
                          className="w-44 cursor-pointer"
                          src="/img/logos/yei-training-logo.svg"
                          alt="YEI Logo"
                        />
                      </Link>
                    </div>
                    <div className="w-full px-5 mb-5">
                      <GroupSelect
                        routes={routes}
                        categoryIndex={categoryIndex}
                        onGroupChange={(data) =>
                          setCategoryIndex(categories.indexOf(data))
                        }
                      />
                    </div>
                    <div className="h-full relative overflow-y-auto ">
                      <nav className="w-full absolute flex-1 px-2 bg-white space-y-1">
                        {routes[categoryIndex].children.map((item) => (
                          <Disclosure
                            as="div"
                            key={item}
                            className="space-y-1"
                            defaultOpen={
                              kebabCase(item) === slug[1] ? true : false
                            }
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={`${
                                    open
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                  }
                      group w-full flex items-center justify-between px-2 py-2 text-left text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yei-primary-main`}
                                >
                                  {item}
                                  <ChevronRightIcon
                                    className={`
                        ${
                          open ? 'text-gray-500 rotate-90' : 'text-gray-400'
                        } ml-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                                  />
                                </Disclosure.Button>
                                <Transition
                                  show={kebabCase(item) === slug[1] || open}
                                  enter="transition duration-100 ease-out"
                                  enterFrom="transform scale-95 opacity-0"
                                  enterTo="transform scale-100 opacity-100"
                                  leave="transition duration-75 ease-out"
                                  leaveFrom="transform scale-100 opacity-100"
                                  leaveTo="transform scale-95 opacity-0"
                                >
                                  <Disclosure.Panel className="space-y-1">
                                    {modules.map((subItem) => (
                                      <Link
                                        key={subItem}
                                        href={`/category/${kebabCase(
                                          categories[categoryIndex]
                                        )}/${kebabCase(item)}/${kebabCase(
                                          subItem
                                        )}`}
                                      >
                                        <span
                                          className={`cursor-pointer group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium  rounded-md hover:text-gray-900 hover:bg-gray-50 ${
                                            slug[1] === kebabCase(item) &&
                                            slug[2] === kebabCase(subItem)
                                              ? 'text-yei-primary-main'
                                              : 'text-gray-600'
                                          }`}
                                        >
                                          {subItem}
                                        </span>
                                      </Link>
                                    ))}
                                  </Disclosure.Panel>
                                </Transition>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <Link href="/settings">
                    <div className="border-t hover:bg-gray-100 bg-white border-gray-300 text-sm text-gray-500 py-4 px-5 cursor-pointer">
                      <span className="flex items-center">
                        <CogIcon className="h-6 w-6 mr-2" />
                        Settings
                      </span>
                    </div>
                  </Link>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="w-64 hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-full">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                <div className="flex-1 flex flex-col pt-5">
                  <div className="flex py-5 justify-center flex-shrink-0 px-4">
                    <Link href="/dashboard">
                      <img
                        className="w-48 cursor-pointer"
                        src="/img/logos/yei-training-logo.svg"
                        alt="YEI Logo"
                      />
                    </Link>
                  </div>
                  <div className="w-full px-5 mb-5">
                    <GroupSelect
                      routes={routes}
                      categoryIndex={categoryIndex}
                      onGroupChange={(data) =>
                        setCategoryIndex(categories.indexOf(data))
                      }
                    />
                  </div>
                  <div className="h-full relative overflow-y-auto ">
                    <nav className="w-full absolute flex-1 px-2 bg-white space-y-1">
                      {routes[categoryIndex].children.map((item) => (
                        <Disclosure
                          as="div"
                          key={item}
                          className="space-y-1"
                          defaultOpen={
                            kebabCase(item) === slug[1] ? true : false
                          }
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={`${
                                  open
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }
                      group w-full flex items-center justify-between px-2 py-2 text-left text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yei-primary-main`}
                              >
                                {item}
                                <ChevronRightIcon
                                  className={`
                        ${
                          open ? 'text-gray-500 rotate-90' : 'text-gray-400'
                        } ml-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                                />
                              </Disclosure.Button>
                              <Transition
                                show={kebabCase(item) === slug[1] || open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <Disclosure.Panel className="space-y-1">
                                  {modules.map((subItem) => (
                                    <Link
                                      key={subItem}
                                      href={`/category/${kebabCase(
                                        categories[categoryIndex]
                                      )}/${kebabCase(item)}/${kebabCase(
                                        subItem
                                      )}`}
                                    >
                                      <span
                                        className={`cursor-pointer group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium  rounded-md hover:text-gray-900 hover:bg-gray-50 ${
                                          slug[1] === kebabCase(item) &&
                                          slug[2] === kebabCase(subItem)
                                            ? 'text-yei-primary-main'
                                            : 'text-gray-600'
                                        }`}
                                      >
                                        {subItem}
                                      </span>
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </Transition>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </nav>
                  </div>
                </div>
                <Link href="/settings">
                  <div className="border-t hover:bg-gray-100 bg-white border-gray-300 text-sm text-gray-500 py-4 px-5 cursor-pointer">
                    <span className="flex items-center">
                      <CogIcon className="h-6 w-6 mr-2" />
                      Settings
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
              <button
                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              {children}
            </main>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
