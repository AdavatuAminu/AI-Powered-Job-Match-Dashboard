import { Job } from "../types/job";

interface JobListProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return "bg-green-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-red-500";
};

export default function JobList({ jobs, onJobClick }: JobListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
          onClick={() => onJobClick(job)}
        >
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-600">
            {job.company} - {job.location}
          </p>
          <p className="text-gray-500">{job.salary}</p>
          <div className="mt-2">
            <div className="text-sm">Match Score:</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${getScoreColor(
                  job.matchScore || 0
                )}`}
                style={{ width: `${job.matchScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}