import { Disclosure, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import kebabCase from '../../lib/kebabCase'
import GroupSelect from './GroupSelect'

import routes from '../../data/routes'
import { useRouter } from 'next/router'

export default function Sidebar({ categories, modules }) {
  const router = useRouter()
  const slug = router.query.slug || []
  const kebabCategories = []
  categories.forEach((item) => kebabCategories.push(kebabCase(item)))
  const [categoryIndex, setCategoryIndex] = useState(-1)

  useEffect(() => {
    setCategoryIndex(kebabCategories.indexOf(slug[0]))
  }, [router])
  return (
    <div>
      {categoryIndex !== -1 && categoryIndex !== undefined ? (
        <div className="sm:w-64 min-h-full flex flex-col flex-grow border-r border-gray-200 p-4 bg-white overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 py-6">
            <Link href="/">
            <img
              className="h-12 w-auto cursor-pointer"
              src="/img/logos/yei-logo-full.png"
              alt="Workflow"
            />
            </Link>
          </div>
          <GroupSelect
            routes={routes}
            categoryIndex={categoryIndex}
            onGroupChange={(data) => setCategoryIndex(categories.indexOf(data))}
          />
          <div className="mt-5 flex-grow flex flex-col">
            <nav
              className="flex-1 px-2 space-y-1 bg-white"
              aria-label="Sidebar"
            >
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
                      group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      >
                        <svg
                          className={`
                        ${
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300'
                        } mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
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
                              )}/${kebabCase(item)}/${kebabCase(subItem)}`}
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
      ) : (
        ''
      )}
    </div>
  )
}
