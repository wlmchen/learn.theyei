import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { kebabCase } from '@/lib/utils'
import GroupSelect from './GroupSelect'

import routes from '@/data/routes'
import { useRouter } from 'next/router'
import { XIcon, MenuAlt2Icon, BellIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ categories, modules }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const slug = router.query.slug || []
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))
  const [categoryIndex, setCategoryIndex] = useState(-1)

  useEffect(() => {
    setCategoryIndex(kebabCategories.indexOf(slug[0]))
  }, [router])
  return (
    // <div></div>
    // {categoryIndex !== -1 && categoryIndex !== undefined ? (
    //     <div className="sm:w-64 min-h-full flex flex-col flex-grow border-r border-gray-200 p-4 bg-white overflow-y-auto">
    //       <GroupSelect
    //         routes={routes}
    //         categoryIndex={categoryIndex}
    //         onGroupChange={(data) => setCategoryIndex(categories.indexOf(data))}
    //       />
    //       <div className="mt-5 flex-grow flex flex-col">
    //         <nav
    //           className="flex-1 px-2 space-y-1 bg-white"
    //           aria-label="Sidebar"
    //         >
    //           {routes[categoryIndex].children.map((item) => (
    //             <Disclosure
    //               as="div"
    //               key={item}
    //               className="space-y-1"
    //               defaultOpen={kebabCase(item) === slug[1] ? true : false}
    //             >
    //               {({ open }) => (
    //                 <>
    //                   <Disclosure.Button
    //                     className={`${
    //                       open
    //                         ? 'bg-gray-100 text-gray-900'
    //                         : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    //                     }
    //                   group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yei-primary-main`}
    //                   >
    //                     <svg
    //                       className={`
    //                     ${
    //                       open ? 'text-gray-400 rotate-90' : 'text-gray-300'
    //                     } mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
    //                       viewBox="0 0 20 20"
    //                       aria-hidden="true"
    //                     >
    //                       <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
    //                     </svg>
    //                     {item}
    //                   </Disclosure.Button>
    //                   <Transition
    //                     show={open}
    //                     enter="transition duration-100 ease-out"
    //                     enterFrom="transform scale-95 opacity-0"
    //                     enterTo="transform scale-100 opacity-100"
    //                     leave="transition duration-75 ease-out"
    //                     leaveFrom="transform scale-100 opacity-100"
    //                     leaveTo="transform scale-95 opacity-0"
    //                   >
    //                     <Disclosure.Panel className="space-y-1">
    //                       {modules.map((subItem) => (
    //                         <Link
    //                           key={subItem}
    //                           href={`/${kebabCase(
    //                             categories[categoryIndex]
    //                           )}/${kebabCase(item)}/${kebabCase(subItem)}`}
    //                         >
    //                           <span className="cursor-pointer group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
    //                             {subItem}
    //                           </span>
    //                         </Link>
    //                       ))}
    //                     </Disclosure.Panel>
    //                   </Transition>
    //                 </>
    //               )}
    //             </Disclosure>
    //           ))}
    //         </nav>
    //       </div>
    //     </div>
    //   ) : (
    //     ''
    //   )}
    // </div>
    <div>
      {categoryIndex !== -1 && categoryIndex !== undefined ? (
        <div
          className={`fixed md:static h-screen flex overflow-hidden ${
            sidebarOpen ? 'bg-white' : ''
          } transition duration-500`}
        >
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              static
              className="fixed inset-0 flex z-40 md:hidden"
              open={sidebarOpen}
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
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-8 pb-4 bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
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
                  <div className="mt-5 flex-1 h-0 overflow-y-auto space-y-4 px-4">
                    <div className="flex items-center justify-center flex-shrink-0 px-4 my-2">
                      <img
                        className="w-32"
                        src="/img/logos/yei-logo-full.png"
                        alt="Workflow"
                      />
                    </div>
                    <GroupSelect
                      routes={routes}
                      categoryIndex={categoryIndex}
                      onGroupChange={(data) =>
                        setCategoryIndex(categories.indexOf(data))
                      }
                    />
                    <nav className="space-y-1">
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
                      group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yei-primary-main`}
                              >
                                <svg
                                  className={`
                        ${
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300'
                        } mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                {item}
                              </Disclosure.Button>
                              <Transition
                                show={open}
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
                                      href={`/${kebabCase(
                                        categories[categoryIndex]
                                      )}/${kebabCase(item)}/${kebabCase(
                                        subItem
                                      )}`}
                                    >
                                      <span className="cursor-pointer group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
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
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col flex-grow pt-5 pb-4 space-y-4 px-4 overflow-y-auto">
                <div className="flex items-center justify-center flex-shrink-0 px-4 my-2">
                  <img
                    className="w-32"
                    src="/img/logos/yei-logo-full.png"
                    alt="Workflow"
                  />
                </div>
                <GroupSelect
                  routes={routes}
                  categoryIndex={categoryIndex}
                  onGroupChange={(data) =>
                    setCategoryIndex(categories.indexOf(data))
                  }
                />
                <div className="mt-5 flex-1 flex flex-col">
                  <nav className="flex-1 px-2 space-y-1">
                    {routes[categoryIndex].children.map((item) => (
                      <Disclosure
                        as="div"
                        key={item}
                        className="space-y-1"
                        defaultOpen={kebabCase(item) === slug[1] ? true : false}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`${
                                open
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }
                      group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yei-primary-main`}
                            >
                              <svg
                                className={`
                        ${
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300'
                        } mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                              {item}
                            </Disclosure.Button>
                            <Transition
                              show={open}
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
                                    href={`/${kebabCase(
                                      categories[categoryIndex]
                                    )}/${kebabCase(item)}/${kebabCase(
                                      subItem
                                    )}`}
                                  >
                                    <span className="cursor-pointer group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
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
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
              <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
