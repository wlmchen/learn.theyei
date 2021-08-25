// import { compareDesc, compareAsc, parseISO } from 'date-fns'

import { db } from './firebase-admin'

export async function getSlideProgress(slideId) {
  const doc = await db.collection('slides').doc(slideId).get()
  const progress = { id: doc.id, ...doc.data() }

  return { progress }
}

export async function getAllSlideProgress(path, userId) {
  try {
    let ref
    if (path.length === 1) {
      ref = db
        .collection('slides')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
    } else if (path.length === 3) {
      ref = db
        .collection('slides')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
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

export async function getAllFRQScores(path, userId) {
  try {
    let ref
    if (path.length === 1) {
      ref = db
        .collection('frqs')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
    } else if (path.length === 3) {
      ref = db
        .collection('frqs')
        .where('userId', '==', userId)
        .where('category', '==', path[0])
        .where('chapter', '==', path[1])
    }

    const snapshot = await ref.get()
    const score = []

    snapshot.forEach((doc, index) => {
      score.push({ id: doc.id, ...doc.data() })
    })
    return { score }
  } catch (error) {
    return { error }
  }
}
