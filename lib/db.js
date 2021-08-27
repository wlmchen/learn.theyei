import firebase from './firebase'
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

export function createSlideProgress(data) {
  const progress = firestore.collection('slides').doc()
  progress.set(data)

  return progress
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
export function saveFRQScore(id, response) {
  return firestore.collection('frqs').doc(id).update({ response: response })
}

export async function updateFRQScore(id, newValues) {
  return firestore.collection('frqs').doc(id).update(newValues)
}
