import { auth } from '@/lib/firebase-admin'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import FocusError from '../utility/FocusError'
import * as Yup from 'yup'
import { useAuth } from '@/lib/auth'

function FirstName() {
  const auth = useAuth()
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={NameSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        auth.signinWithPassword(values.name)
        resetForm({})
        setSubmitting(false)
      }}
    >
      <Form className="space-y-3">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <div className="mt-1">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Jane"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yei-primary-main-main focus:yei-primary-main-main sm:text-sm"
              required
            />
            <ErrorMessage
              className="formik-error text-sm"
              component="div"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:text-sm"
          >
            Save
          </button>
        </div>
        <FocusError />
      </Form>
    </Formik>
  )
}

export default FirstName

const NameSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Name too long.').required('Name required.'),
})
