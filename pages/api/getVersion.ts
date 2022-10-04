import { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const version: string = '1.32';
  res.status(200).json({ version });
};

export default handler;
