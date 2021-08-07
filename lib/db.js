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

export function createProgress(data) {
  const site = firestore.collection('progress').doc()
  site.set(data)

  return site
}

export async function updateProgress(id, newValues) {
  return firestore.collection('progress').doc(id).update(newValues)
}
