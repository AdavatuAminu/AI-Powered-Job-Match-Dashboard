import { useState } from "react";
import { Job, UserProfile } from "../types/job";

interface JobDetailsModalProps {
  job: Job | null;
  user: UserProfile;
  onClose: () => void;
}

export default function JobDetailsModal({
  job,
  user,
  onClose,
}: JobDetailsModalProps) {
  const [alert, setAlert] = useState<string | null>(null);

  if (!job) return null;

  const missingSkills = job.requiredSkills.filter(
    (skill) => !user.skills.includes(skill)
  );

  const handleApply = () => {
    if (missingSkills.length > 0) {
      setAlert(`Consider learning: ${missingSkills.join(", ")}`);
    } else {
      setAlert("Application submitted!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-600">
          {job.company} - {job.location}
        </p>
        <p className="text-gray-500">{job.salary}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Required Skills:</h3>
          <ul className="list-disc pl-5">
            {job.requiredSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply Now
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
        {alert && <p className="mt-2 text-sm text-red-500">{alert}</p>}
      </div>
    </div>
  );
}