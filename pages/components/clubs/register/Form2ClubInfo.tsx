import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function ClubInfo(props) {
  return (
    <div
      id="clubinfo"
      className="trans-150 shadow focus-within:border-yei-primary-main border-transparent border-4  sm:rounded-md sm:overflow-hidden"
    >
      <div className=" bg-white py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Club Information
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <fieldset>
              <legend className="block text-xl font-medium text-gray-700">
                Are you planning to register a <b>pre-existing club</b> or are
                you <b>starting a new chapter</b> at your school?
              </legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <Field
                    id="preexisting"
                    name="clubStatus"
                    type="radio"
                    value="preexisting"
                    className="focus:ring-yei-primary-main h-5 w-5 text-yei-primary-main border-gray-300"
                  />
                  <label htmlFor="preexisting" className="ml-3">
                    <span className="block text-lg text-gray-700">
                      We're a pre-existing club
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <Field
                    id="new"
                    name="clubStatus"
                    type="radio"
                    value="new"
                    className="focus:ring-yei-primary-main h-5 w-5 text-yei-primary-main border-gray-300"
                  />
                  <label htmlFor="new" className="ml-3">
                    <span className="block text-lg text-gray-700">
                      We're starting a new club
                    </span>
                  </label>
                </div>
                <ErrorMessage
                  className="formik-error"
                  component="div"
                  name="clubStatus"
                />
              </div>
            </fieldset>
          </div>

          {props.isStudent && (
            <div className="col-span-3">
              <label
                htmlFor="clubInfo"
                className="block text-xl font-medium text-gray-700"
              >
                We'll also need some info about other officers to get started.
                Let's get their{' '}
                <b>names, emails, grade levels, and positions.</b>
              </label>
              <p className="text-lg my-2 text-gray-500">
                Include at least a <b>Vice President, Treasurer, </b> and your{' '}
                <b>Club Advisor</b>.
              </p>
              <div className="mt-1">
                <Field
                  component="textarea"
                  id="clubInfo"
                  name="clubInfo"
                  rows={3}
                  className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full  border-gray-300 rounded-md"
                />
                <ErrorMessage
                  className="formik-error"
                  component="div"
                  name="clubInfo"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Note: clubs will be allowed to operate without an advisor
                temporarily due to the circumstances surrounding COVID-19.
              </p>
            </div>
          )}

          <div className="col-span-3 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="school"
                className="block text-xl font-medium text-gray-700"
              >
                What school will the club be in?
              </label>
              <Field
                type="text"
                name="school"
                id="school"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main "
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="school"
              />
            </div>
            <div className="col-span-6">
              <p className="text-gray-700 font-medium text-xl mb-1">
                Where is the school located?
              </p>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <Field
                type="text"
                name="address"
                id="address"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main "
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="address"
              />
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                type="text"
                name="city"
                id="city"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main "
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="city"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <Field
                type="text"
                name="state"
                id="state"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main "
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="state"
              />
              <p className="mt-2 text-sm text-gray-500">
                Specify country if international.
              </p>
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal
              </label>
              <Field
                type="text"
                name="zip"
                id="zip"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main "
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="zip"
              />
            </div>
          </div>
        </div>
      </div>
      {!props.isStudent && (
        <div className="sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            {props.children}
          </div>
        </div>
      )}
    </div>
  )
}
