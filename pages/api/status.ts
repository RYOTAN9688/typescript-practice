import { NextApiRequest, NextApiResponse } from 'next'

const statusApi = (req: NextApiRequest, res: NextApiResponse): void => {
  const result =
    typeof req.query.id === 'string' ? getStatus(req.query.id) : listStatuses()

  res.status(200).json(result ?? {})
}

type Status = { id: string; body: string; auther: string; createdAt: Date }

const statuses: Status[] = [
  {
    id: '2',
    body: 'inviting coworker',
    auther: 'jack',
    createdAt: new Date(2021, 10, 14),
  },
  {
    id: '1',
    body: 'just setting up my app ',
    auther: 'jack',
    createdAt: new Date(2021, 10, 13),
  },
]

export const getStatus = (id: string): Status | undefined =>
  statuses.find((d) => d.id === id)

export const listStatuses = (): Status[] => statuses

export default statusApi
