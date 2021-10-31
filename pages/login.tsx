import router from 'next/router'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useAuth } from '@/lib/auth'
import FocusError from '@/components/utility/FocusError'
import Layout from '@/components/global/Layout'
import Link from 'next/link'

export default function Login() {
  const auth = useAuth()

  if (auth.user) {
    router.push('/dashboard')
  }

  const [submissionLoading, setSubmissionLoading] = useState(false)

  return (
    <Layout page="login" showNav contentLoaded>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmissionLoading(true)
          auth.signinWithPassword(
            values.email,
            values.password,
            () => setSubmissionLoading(false),
            () => router.push('/dashboard')
          )
          resetForm({})
        }}
      >
        <>
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
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Login to your Account
                </h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <Form className="space-y-3">
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
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          id="password"
                          name="password"
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
                    </div>
                    <br />
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main-main"
                      >
                        Sign In
                      </button>
                    </div>
                    <FocusError />
                  </Form>

                  <Link href="/forgotPassword">
                    <span className="w-full appearance-none text-sm text-center text-yei-primary-main font-semibold pt-4">
                      Forgot your password?
                    </span>
                  </Link>

                  <span className="formik-error text-sm">{auth.authError}</span>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid">
                      <div>
                        <button
                          className="w-full inline-flex items-center justify-center py-4 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={() => {
                            setSubmissionLoading(true)
                            auth.signinWithGoogle(
                              () => setSubmissionLoading(false),
                              () => router.push('/dashboard')
                            )
                          }}
                        >
                          <img
                            className="mr-2"
                            style={{ marginTop: '2px' }}
                            src="./img/logos/google.svg"
                            width="20"
                          />
                          Sign in with Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </Formik>
    </Layout>
  )
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Email required.'),
  password: Yup.string().required('Password is required.'),
})
