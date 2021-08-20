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
  const site = firestore.collection('slides').doc()
  site.set(data)

  return site
}

export async function updateSlideProgress(id, newValues) {
  return firestore.collection('slides').doc(id).update(newValues)
}
