import React, { useEffect, useState } from "react";
import EmployeeService from "../../services/employeeService";
import { Table } from "semantic-ui-react";

export default function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getEmployee().then(result => setEmployees(result.data));
  }, []);
  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
