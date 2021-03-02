import React, { Fragment, useEffect, useState } from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
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
        {!loading && <h3>Details for Bug:({bug.data._id}) </h3>}

        <Accordion>
          <Card>
            <Card.Header></Card.Header>
          </Card>
        </Accordion>
      </Container>
    </Fragment>
  );
};

export default BugDetails;
