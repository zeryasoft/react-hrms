import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";

export default function Candidate() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidate()
      .then((sonuc) => setCandidates(sonuc.data.data));
  }, []);
  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
            <Table.HeaderCell>Tc No</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName} {candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.identityNumber}</Table.Cell>
              <Table.Cell>{candidate.birthYear}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
