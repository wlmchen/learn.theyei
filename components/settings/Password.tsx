import { auth } from '@/lib/firebase-admin'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import FocusError from '../utility/FocusError'
import * as Yup from 'yup'
import { useAuth } from '@/lib/auth'

function Password() {
  const auth = useAuth()
  const [passwordError, setPasswordError] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: '',
      }}
      validationSchema={PasswordSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        auth.reauthUser(
          values.oldPassword,
          () =>
            auth.updatePassword(values.newPassword, () =>
              setPasswordSuccess(true)
            ),
          (val) => {
            setPasswordError(val)
          }
        )
        resetForm({})
        setSubmitting(false)
      }}
    >
      <Form className="space-y-3">
        <div>
          <label
            htmlFor="password"
            className="mb-3 block text-sm font-medium text-gray-700"
          >
            Update Password
          </label>
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-500"
          >
            Old Password
          </label>
          <div className="mt-1">
            <Field
              id="oldPassword"
              name="oldPassword"
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yei-primary-main-main focus:border-yei-primary-main-main sm:text-sm"
              required
            />
            <ErrorMessage
              className="formik-error text-sm"
              component="div"
              name="password"
            />
            {passwordError && (
              <p className="text-red-600 font-bold text-sm mt-2">
                Invalid password.
              </p>
            )}
          </div>
          <label
            htmlFor="password"
            className="block mt-2 text-xs font-medium text-gray-500"
          >
            New Password
          </label>
          <div className="mt-1">
            <Field
              id="newPassword"
              name="newPassword"
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yei-primary-main-main focus:border-yei-primary-main-main sm:text-sm"
              required
            />
            <ErrorMessage
              className="formik-error text-sm"
              component="div"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:text-sm"
          >
            Update Password
          </button>

          {passwordSuccess && (
            <p className="text-green-600 font-bold text-sm mt-2">
              Password updated.
            </p>
          )}
        </div>
        <FocusError />
      </Form>
    </Formik>
  )
}

export default Password

const PasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'Password must be at least six characters long.')
    .required('Password is required.'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least six characters long.')
    .required('Password is required.'),
})
