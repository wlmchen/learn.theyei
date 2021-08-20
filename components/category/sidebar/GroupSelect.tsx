import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { kebabCase } from '@/lib/kebabCase'

export default function GroupSelect({ routes, categoryIndex, onGroupChange }) {
  const router = useRouter()

  let groupList = []
  routes.forEach((item) => {
    groupList.push(item.name)
  })

  const [selected, setSelected] = useState(groupList[categoryIndex])
  return (
    <Listbox
      value={selected}
      onChange={(val) => {
        setSelected(val)
        onGroupChange(val)
      }}
    >
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm">
              <div className="flex items-center">
                <span className="ml-3 block truncate">{selected}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {groupList.map((group, index) => (
                  <Listbox.Option
                    key={index}
                    className={`
                        cursor-default select-none relative py-2 pl-3 pr-9
                      `}
                    value={group}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={`${
                              selected ? 'font-semibold' : 'font-normal'
                            } ml-3 block truncate`}
                          >
                            {group}
                            <span className="sr-only">
                              {' '}
                              is {group.online ? 'online' : 'offline'}
                            </span>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={`
                              absolute inset-y-0 right-0 flex items-center pr-4
                            `}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
