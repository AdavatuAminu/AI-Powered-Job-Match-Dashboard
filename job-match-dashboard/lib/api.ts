import axios from "axios";
import { Job, UserProfile } from "../types/job";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get("/api/jobs");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
};

export const calculateMatchScore = (job: Job, user: UserProfile): number => {
  const matchedSkills = job.requiredSkills.filter((skill) =>
    user.skills.includes(skill)
  );
  return Math.round((matchedSkills.length / job.requiredSkills.length) * 100);
};