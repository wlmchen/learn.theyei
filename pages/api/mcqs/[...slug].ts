import { getAllMCQScores } from '@/lib/db-admin'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function mcqApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const path = req.query.slug.slice(0, req.query.slug.length - 1)
    const userId = req.query.slug[req.query.slug.length - 1]
    const score = await getAllMCQScores(path, userId)
    res.status(200).json(score)
  } catch (error) {
    res.status(500).json({ error })
  }
}
