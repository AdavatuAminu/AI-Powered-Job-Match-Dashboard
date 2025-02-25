export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    requiredSkills: string[];
    matchScore?: number;
  }
  
  export interface UserProfile {
    skills: string[];
  }