import * as Yup from 'yup'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

import FocusError from '@/components/utility/FocusError'
import Layout from '@/components/global/Layout'
import Link from 'next/link'
import router from 'next/router'
import { useAuth } from '@/lib/auth'

export default function forgotPassword() {
  const auth = useAuth()

  if (auth.user) {
    router.push('/dashboard')
  }

  const [submissionLoading, setSubmissionLoading] = useState(false)

  return (
    <Layout title="Forgot Password" page="forgot-password" showNav contentLoaded>
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
            <div className="sm:mx-auto sm:w-full sm:max-w-md mx-4">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Forgot your password?
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Enter your email below and we'll send you a password reset
                    form to your inbox.
                  </p>
                </div>

                <Form className="space-y-3 mt-4">
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
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main-main"
                    >
                      Submit
                    </button>
                  </div>
                  <FocusError />
                </Form>
              </div>
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
