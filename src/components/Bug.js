import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Bug = ({ bug }) => {
  let classname = "";
  if (bug.priority === "Low") {
    classname = "Low";
  } else if (bug.priority === "High") {
    classname = "High";
  } else if (bug.priority === "Medium") {
    classname = "Medium";
  }
  return (
    <LinkContainer to={`/dashboard/bugs/${bug._id}`}>
      <tr key={bug._id} className={classname}>
        <td>{bug._id}</td>
        <td>{bug.title}</td>
        <td>{bug.status}</td>
        <td> {bug.description}</td>
        <td>{bug.project}</td>
        <td>{bug.createdAt}</td>
        <td>
          <LinkContainer to={`/dashboard/bugs/${bug._id}/edit`}>
            <Button variant="light" className="btn-sm">
              <i className="fas fa-edit"></i>
            </Button>
          </LinkContainer>
          <Button
            variant="danger"
            className="btn-sm"
            // onClick={() => deletebugHandler(bug._id)}
          >
            <i className="fas fa-trash"></i>
          </Button>
        </td>
      </tr>
    </LinkContainer>
  );
};

export default Bug;
