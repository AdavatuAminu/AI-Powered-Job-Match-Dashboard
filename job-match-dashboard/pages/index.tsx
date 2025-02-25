import { useState, useEffect } from "react";
import JobList from "../components/JobList";
import JobDetailsModal from "../components/JobDetailsModal";
import { fetchJobs } from "../lib/api";
import { Job, UserProfile } from "../types/job";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const user: UserProfile = { skills: ["React", "JavaScript", "CSS"] };

  useEffect(() => {
    const loadJobs = async () => {
      const jobData = await fetchJobs();
      if (jobData.length === 0) {
        console.warn("No jobs fetched from API");
      }
      setJobs(jobData);
    };
    loadJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        AI-Powered Job Match Dashboard
      </h1>
      {jobs.length > 0 ? (
        <JobList jobs={jobs} onJobClick={setSelectedJob} />
      ) : (
        <p className="text-center text-gray-500">No jobs available</p>
      )}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          user={user}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}