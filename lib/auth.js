import React, { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'

import firebase from './firebase'
import { createUser } from './db'
import router from 'next/router'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  const handleUser = async (rawUser) => {
    if (rawUser) {
      console.log(rawUser)
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      createUser(user.uid, JSON.parse(JSON.stringify(userWithoutToken)))
      setUser(user)

      cookie.set('yei-training-portal-auth', 'true', {
        expires: 1,
      })

      setLoading(false)
      return user
    } else {
      setUser(false)
      cookie.remove('yei-training-portal-auth')

      setLoading(false)
      return false
    }
  }

  const createWithPassword = async (name, email, password) => {
    setLoading(true)
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setAuthError('')
        handleUser(response.user)
        router.push('/')
      })
      .catch((err) => {
        setAuthError(err.message)
      })

    const user = await firebase.auth().currentUser
    user
      ?.updateProfile({
        displayName: name,
      })
      .then(() => {
        handleUser(user)
      })
  }

  const signinWithPassword = async (email, password) => {
    setLoading(true)
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setAuthError('')
        router.push('/')
      })
      .catch((err) => {
        setAuthError(err.message)
      })
  }

  const signinWithGoogle = (redirect) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        setAuthError('')
        handleUser(response.user)

        if (redirect) {
          Router.push(redirect)
        }
      })
      .catch((err) => {
        setAuthError(err.message)
      })
  }

  const signout = () => {
    Router.push('/')

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    createWithPassword,
    signinWithPassword,
    signinWithGoogle,
    signout,
    authError,
  }
}

const formatUser = async (user) => {
  console.log(user)
  const token = await user.getIdToken()
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  }
}
