import React, { Fragment, useEffect, useState } from "react";
import { Accordion, Button, Card, Container, Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { bugDetails } from "../actions/bug";

const BugDetails = ({ match }) => {
  const bugData = useSelector((state) => state.bug);
  const { loading, bug } = bugData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bugDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <Fragment>
      <Container>
        <Link className="btn btn-light my-3" to="/dashboard/bugs">
          Go Back
        </Link>
        {loading ? (
          "loading"
        ) : (
          <div>
            <h2>Details for Bug:({bug.data._id}) </h2>
            <Jumbotron>
              <h4 className="title">Title: {bug.data.title}</h4>
              <p>
                <h6>Description:</h6> {bug.data.description}.
              </p>
              <p>
                <h6>Status:</h6>
                {bug.data.status}
              </p>
              <p>
                <h6>Priority:</h6> {bug.data.priority}
              </p>
              <p>
                <h6>Project:</h6> {bug.data.project}
              </p>
              <p>
                <h6>AssignedTo:</h6> {bug.data.assignedTo}
              </p>
              <p>
                <h6>CreatedBy:</h6>
                {bug.data.createdBy}
              </p>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    View attachements
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    {bug.data.attachments.length > 0 ? (
                      <Card.Body>Hello! I'm the body</Card.Body>
                    ) : (
                      <Card.Body>"No attachments found"</Card.Body>
                    )}
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Jumbotron>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default BugDetails;
