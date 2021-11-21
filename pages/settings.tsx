import Dashboard from '@/components/dashboard/Dashboard'
import Layout from '@/components/global/Layout'
import ConfirmDelete from '@/components/settings/ConfirmDelete'
import FocusError from '@/components/utility/FocusError'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { getAllUserDataIds } from '@/lib/db-admin'
import FirstName from './../components/settings/FirstName'
import Password from './../components/settings/Password'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  // const auth = useAuth()
  const { allUserIds } = await getAllUserDataIds()
  // console.log(allUserIds)

  return { props: { allUserIds } }
}

function settings({ allUserIds }) {
  const auth = useAuth()
  const router = useRouter()
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false)
  const [execDelete, setExecDelete] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const deletePopup = () => {
    setOpenConfirmDelete(true)
  }
  const deleteAccountConfirmed = () => {
    console.log('1/3 re auth done')
    auth.deleteAccount(
      allUserIds.filter((item) => item.userId === auth.user.uid),
      auth.user.uid
    )
    setOpenConfirmDelete(false)
    router.push('/')
  }
  const handleStartDelete = () => setDeleteLoading(true)
  const handleStopDelete = () => setDeleteLoading(false)
  return (
    <>
      {auth.user ? (
        <Layout page="settings" showNav contentLoaded>
          <div className="mt-10 w-full max-w-xl m-auto z-0 px-5 text-left py-8 shadow sm:rounded-lg sm:px-10">
            <h1>Settings</h1>
            <div className="space-y-5 mt-6">
              {auth.user.provider === 'password' ? (
                <>
                  {/* <FirstName /> */}
                  <Password />
                </>
              ) : (
                <div className="rounded-md bg-blue-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <InformationCircleIcon
                        className="h-5 w-5 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 flex-1 md:flex md:justify-between">
                      <p className="text-sm text-blue-700">
                        You can't change your password with a Google account.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {auth.user.provider === 'password' && (
              <>
                <hr className="my-6" />
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Delete your account
                    </h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>
                        Once you delete your account, you will lose all data
                        associated with it.
                      </p>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                        onClick={deletePopup}
                      >
                        Delete account
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            <ConfirmDelete
              open={openConfirmDelete}
              deleteLoading={deleteLoading}
              handleStartDelete={handleStartDelete}
              handleStopDelete={handleStopDelete}
              setDeleteAccount={deleteAccountConfirmed}
              setCloseModal={() => setOpenConfirmDelete(false)}
            />
            {/* {execDelete && <DeleteAccount user={auth.user} />} */}
          </div>
        </Layout>
      ) : (
        <Layout page="settings" showNav>
          <div></div>
        </Layout>
      )}
    </>
  )
}

export default settings
