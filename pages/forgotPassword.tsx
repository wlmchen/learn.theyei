import router from 'next/router'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useAuth } from '@/lib/auth'
import FocusError from '@/components/utility/FocusError'
import Layout from '@/components/global/Layout'
import Link from 'next/link'

export default function forgotPassword() {
  const auth = useAuth()

  if (auth.user) {
    router.push('/dashboard')
  }

  const [submissionLoading, setSubmissionLoading] = useState(false)

  return (
    <Layout page="login" showNav contentLoaded>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmissionLoading(true)
          auth.forgotPassword(values.email, () => setSubmissionLoading(false))
          resetForm({})
        }}
      >
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          {submissionLoading || !auth ? (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center mx-auto sm:max-w-md">
                <div
                  style={{ borderTopColor: 'transparent' }}
                  className="w-12 h-12 border-4 border-yei-primary-main border-solid rounded-full animate-spin"
                ></div>
              </div>
            </div>
          ) : (
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Update your email
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Change the email address you want associated with your
                  account.
                </p>
              </div>
              <Form className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="im@batman.com"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yei-primary-main-main focus:yei-primary-main-main sm:text-sm"
                        required
                      />
                      <ErrorMessage
                        className="formik-error text-sm"
                        component="div"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Send Email
                </button>
              </Form>
            </div>
          )}
        </div>
      </Formik>
    </Layout>
  )
}

const ResetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Email required.'),
})
