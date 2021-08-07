import { getAllProgress } from '../../../lib/db-admin'

export default async (req, res) => {
  try {
    const path = req.query.slug.slice(0, 3)
    const userId = req.query.slug[3]
    const { progress } = await getAllProgress(path, userId)
    res.status(200).json({ progress })
  } catch (error) {
    res.status(500).json({ error })
  }
}
