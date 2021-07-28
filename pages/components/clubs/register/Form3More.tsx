import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function More(props) {
  return (
    <div
      id="more"
      className="trans-150 shadow rounded-md sm:overflow-hidden focus-within:border-yei-primary-main border-transparent border-4 "
    >
      <div className="bg-white  py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            More About You
          </h3>
          <p className="mt-1 text-lg text-gray-500">
            Let's hear a little bit more about yourself.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <label
              htmlFor="econCoursework"
              className="block text-xl font-medium text-gray-700"
            >
              What economics related coursework have you completed?
            </label>
            <p className="text-lg my-2 text-gray-500">
              IB Econ, AP Micro, AP Macro, etc. Include any self studying or
              test scores as well.
            </p>
            <div className="mt-1">
              <Field
                component="textarea"
                id="econCoursework"
                name="econCoursework"
                rows={3}
                className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full  border-gray-300 rounded-md"
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="econCoursework"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <label
              htmlFor="ECs"
              className="block text-xl font-medium text-gray-700"
            >
              What activities do you participate in outside of school?
            </label>
            <p className="text-lg my-2 text-gray-500">
              1000 characters maximum. Include any relevant experiences as well.
            </p>
            <div className="mt-1">
              <Field
                component="textarea"
                id="ECs"
                name="ECs"
                rows={3}
                className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full  border-gray-300 rounded-md"
              />
              <ErrorMessage
                className="formik-error"
                component="div"
                name="ECs"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          {props.children}
        </div>
      </div>
    </div>
  )
}
