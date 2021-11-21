import firebase from './firebase'
// import { db } from './firebase-admin'
const firestore = firebase.firestore()
export function updateUser(uid, data) {
  return firestore.collection('users').doc(uid).update(data)
}
export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export function createSlideProgress(data, callbackFinished) {
  const progress = firestore
    .collection('slides')
    .doc(`${data.category}_${data.chapter}_${data.userId}`)
  progress
    .set(data)
    .then(() => {
      callbackFinished()
    })
    .catch((err) => console.log(err))

  return { progress }
}

export async function updateSlideProgress(id, newValues) {
  return firestore.collection('slides').doc(id).update(newValues)
}

export function createFRQScore(data) {
  const score = firestore.collection('frqs').doc()
  score.set(data)

  return score
}

export function createMCQScore(data) {
  const score = firestore.collection('mcqs').doc()
  score.set(data)

  return score
}
export function removeMCQScore(id) {
  firestore
    .collection('mcqs')
    .doc(id)
    .delete()
    .then(() => {})
    .catch((error) => {
      console.error('Error removing document: ', error)
    })
}

export async function deleteUserData(allUserIds, userId, callback) {
  allUserIds.forEach((item) => {
    if (item.progress) {
      firestore
        .collection('slides')
        .doc(item.id)
        .delete()
        .then(() => console.log('success! dleetion'))
        .catch((error) => console.log('error deleteion', error))
    } else if (item.userChoices) {
      firestore
        .collection('mcqs')
        .doc(item.id)
        .delete()
        .then(() => console.log('success! dleetion'))
        .catch((error) => console.log('error deleteion', error))
    } else if (item.num) {
      firestore
        .collection('frqs')
        .doc(item.id)
        .delete()
        .then(() => console.log('success! dleetion'))
        .catch((error) => console.log('error deleteion', error))
    }
  })
  console.log('we here?', userId)

  firestore
    .collection('users')
    .doc(userId)
    .delete()
    .then(() => {
      callback()
    })
    .catch((error) => console.log('error user deleteion', error))
}
export function saveFRQScore(id, response) {
  return firestore.collection('frqs').doc(id).update({ response: response })
}

export function removeFRQScore(id) {
  firestore
    .collection('frqs')
    .doc(id)
    .delete()
    .then(() => {})
    .catch((error) => {
      console.error('Error removing document: ', error)
    })
}
