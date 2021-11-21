import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { kebabCase } from '@/lib/utils'
import {
  BookOpenIcon,
  CheckIcon,
  SelectorIcon,
  XIcon,
} from '@heroicons/react/solid'
import { useAuth } from '@/lib/auth'
import useSWR, { mutate } from 'swr'
import { createSlideProgress, updateSlideProgress } from '@/lib/db'
import fetcher from '@/utils/fetcher'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const options = [
  {
    id: 1,
    name: 'Not Started',
    icon: <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />,
  },
  {
    id: 2,
    name: 'In Progress',
    icon: (
      <BookOpenIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
    ),
  },
  {
    id: 3,
    name: 'Completed',
    icon: <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />,
  },
]

const kebabOptionsNames = []

options.forEach((item) => {
  kebabOptionsNames.push(kebabCase(item.name))
})

export default function SlideSelect({ slug }) {
  const auth = useAuth()
  const { data: slideProgressData } = useSWR(
    auth.user
      ? [`/api/slides/${slug.join('/')}/${auth.user.uid}`, auth.user.token]
      : null,
    fetcher
  )

  const [dataLoading, setDataLoading] = useState(false)

  let newSlideId = ''

  const onCreateSlideProgress = (userProgress) => {
    const newProgress = {
      category: slug[0],
      chapter: slug[1],
      progress: userProgress,
      createdAt: new Date().toISOString(),
      userId: auth.user.uid,
    }
    setDataLoading(true)
    createSlideProgress(newProgress, () => setDataLoading(false))
  }

  const onUpdateSlideProgress = (id, progress) => {
    const newProgress = {
      progress: progress,
      createdAt: new Date().toISOString(),
    }
    updateSlideProgress(id, newProgress)
  }

  const [selected, setSelected] = useState(options[0])
  let lastChoice = ''
  let newSlide = true

  useEffect(() => {
    if (slideProgressData) {
      console.log(slideProgressData, slug.join('/'))
      setSelected(
        options[
          kebabOptionsNames.indexOf(
            slideProgressData.progress[0]?.progress || 'not-started'
          )
        ]
      )
      newSlide = !slideProgressData.progress[0]?.progress
      lastChoice = slideProgressData.progress[0]?.progress || 'not-started'
    }
  }, [slideProgressData])

  const handleChange = (value) => {
    if (kebabCase(value.name) !== lastChoice) {
      setSelected(value)
      console.log(kebabCase(value.name))
      lastChoice = kebabCase(value.name)
      console.log(slideProgressData.progress, newSlide)
      // if (slideProgressData.progress[0]) {
      //   console.log('update', slug, value, slideProgressData)
      //   onUpdateSlideProgress(
      //     slideProgressData.progress[0].id,
      //     kebabCase(value.name)
      //   )
      // } else if (!newSlide) {
      //   console.log('update new slide', slug, value, slideProgressData)
      //   onUpdateSlideProgress(newSlideId, kebabCase(value.name))
      // } else {
      //   onCreateSlideProgress(kebabCase(value.name))
      //   console.log('create')
      //   newSlide = true
      // }
      onCreateSlideProgress(kebabCase(value.name))
    }
  }

  return (
    <>
      {slideProgressData && !dataLoading ? (
        <div className="w-48">
          <Listbox value={selected} onChange={(value) => handleChange(value)}>
            {({ open }) => (
              <>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm">
                    <div
                      className={classNames(
                        selected ? 'font-semibold' : 'font-normal',
                        'flex items-center truncate'
                      )}
                    >
                      <div style={{ marginTop: '2px', marginRight: '8px' }}>
                        {selected.icon}
                      </div>
                      {selected.name}
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
                      className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {options.map((option) => (
                        <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'text-white bg-indigo-600'
                                : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <div
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'flex items-center truncate'
                                )}
                              >
                                <div
                                  style={{
                                    marginTop: '2px',
                                    marginRight: '8px',
                                  }}
                                >
                                  {option.icon}
                                </div>
                                {option.name}
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
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
        </div>
      ) : (
        <div className="w-48">
          <div className="mt-1 relative">
            <div className="h-10 rounded-md w-48 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      )}
    </>
  )
}
