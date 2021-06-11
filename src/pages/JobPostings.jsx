import React, { useEffect, useState } from "react";
import JobPostingService from "../services/jobPostingService";
import { Table } from "semantic-ui-react";

export default function JobPosting() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingsService = new JobPostingService();
    jobPostingsService
      .getJobPosting()
      .then((result) => setJobPostings(result.data.data));
  }, []);
  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Bilgisi</Table.HeaderCell>
            <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.jobPostingId}>
              <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
              <Table.Cell>{jobPosting.releaseDate}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
