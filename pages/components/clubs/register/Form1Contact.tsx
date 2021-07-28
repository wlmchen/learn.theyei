import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function Contact({ isStudent }) {
  return (
    <div
      id="contact"
      className="trans-150 shadow sm:rounded-md sm:overflow-hidden focus-within:border-yei-primary-main border-transparent border-4 "
    >
      <div className="bg-white  py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Contact
          </h3>
          <p className="mt-1 text-lg text-gray-500">
            The{' '}
            {isStudent
              ? 'chapter president / representative'
              : 'faculty advisor/teacher'}{' '}
            should be filling out this form.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="fName"
              className="block text-lg font-medium text-gray-700"
            >
              First name
            </label>
            <Field
              type="text"
              name="fName"
              id="fName"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
            />
            <ErrorMessage
              className="formik-error"
              component="div"
              name="fName"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="lName"
              className="block text-lg font-medium text-gray-700"
            >
              Last name
            </label>
            <Field
              type="text"
              name="lName"
              id="lName"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
            />
            <ErrorMessage
              className="formik-error"
              component="div"
              name="lName"
            />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email address
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
            />
            <ErrorMessage
              className="formik-error"
              component="div"
              name="email"
            />
            <p className="mt-2 text-sm text-gray-500">
              We will use this address to get in contact once your application
              is approved.
            </p>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="hearAboutUs"
              className="block text-lg font-medium text-gray-700"
            >
              How did you hear about us?
            </label>
            <Field
              type="text"
              name="hearAboutUs"
              id="hearAboutUs"
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
            />
            <ErrorMessage
              className="formik-error"
              component="div"
              name="hearAboutUs"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
