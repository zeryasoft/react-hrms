import React, { useEffect, useState } from "react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitles() {
  const [jobTitles, setJobTitles] = useState([]);
  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitle().then((result) => setJobTitles(result.data));
  }, []);
  return (
    <div>
      <ul>
        {jobTitles.map((jobTitle) => (
          <li key={jobTitle.id}>{jobTitle.title}</li>
        ))}
      </ul>
    </div>
  );
}
