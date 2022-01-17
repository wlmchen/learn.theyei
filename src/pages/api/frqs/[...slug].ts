import { getAllFRQScores } from '@/lib/db-admin'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function slidesApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const path =
      req.query.slug.length === 5
        ? req.query.slug.slice(0, req.query.slug.length - 2)
        : req.query.slug.slice(0, req.query.slug.length - 1)
    const num = parseInt(req.query.slug[req.query.slug.length - 2])
    const userId = req.query.slug[req.query.slug.length - 1]
    const score = await getAllFRQScores(path, num, userId)
    res.status(200).json(score)
  } catch (error) {
    res.status(500).json({ error })
  }
}
