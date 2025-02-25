import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "../../data/jobs.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(jobs);
}