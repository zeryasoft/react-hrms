import React, { useEffect, useState } from "react";
import ResumeService from "../services/resumeService";
import { Table } from "semantic-ui-react";

export default function Resumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getResume().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>GitHub Link</Table.HeaderCell>
            <Table.HeaderCell>Linked Link</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Updated Date</Table.HeaderCell>
            <Table.HeaderCell>Photo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.candidateId}>
              <Table.Cell>{resume.githubLink}</Table.Cell>
              <Table.Cell>{resume.linkedLink}</Table.Cell>
              <Table.Cell>{resume.description}</Table.Cell>
              <Table.Cell>{resume.createdDate}</Table.Cell>
              <Table.Cell>{resume.updatedDate}</Table.Cell>
              <Table.Cell><img src={resume.photo} className="logo"/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
