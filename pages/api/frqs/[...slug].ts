import { getAllFRQScores } from '@/lib/db-admin'

export default async (req, res) => {
  try {
    const path = req.query.slug.slice(0, 3)
    console.log(path)
    const userId = req.query.slug[3]
    const { score } = await getAllFRQScores(path, userId)
    res.status(200).json({ score })
  } catch (error) {
    res.status(500).json({ error })
  }
}
