import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "../../data/jobs.json";

const mockUserSkills = ["React", "JavaScript", "CSS"];

const generateAIMatchScore = (requiredSkills: string[]): number => {
  const matchedSkills = requiredSkills.filter((skill) =>
    mockUserSkills.includes(skill)
  );
  const baseScore = (matchedSkills.length / requiredSkills.length) * 70;
  const aiFactor = Math.random() * 30;
  const totalScore = Math.round(baseScore + aiFactor);
  return Math.min(totalScore, 100);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const enrichedJobs = jobs.map((job: any) => ({
    ...job,
    matchScore: generateAIMatchScore(job.requiredSkills),
  }));
  res.status(200).json(enrichedJobs);
}