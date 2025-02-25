import axios from "axios";
import { Job } from "../types/job";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get("/api/jobs");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
};