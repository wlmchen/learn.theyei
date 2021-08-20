// import { compareDesc, compareAsc, parseISO } from 'date-fns'

import { db } from './firebase-admin'

export async function getProgress(progressId) {
  const doc = await db.collection('progress').doc(progressId).get()
  const progress = { id: doc.id, ...doc.data() }

  return { progress }
}

export async function getAllProgress(path, userId) {
  try {
    let ref
    if (path.length === 1) {
      ref = db
        .collection('progress')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
        .where('type', '==', path[2])
    } else if (path.length === 3) {
      ref = db
        .collection('progress')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
        .where('type', '==', path[2])
    }

    const snapshot = await ref.get()
    const progress = []

    snapshot.forEach((doc, index) => {
      progress.push({ id: doc.id, ...doc.data() })
    })
    return { progress }
  } catch (error) {
    return { error }
  }
}
