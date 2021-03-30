import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { createTeam } from "../actions/team";

const AddTeam = ({ history }) => {
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();

  const { teamName } = formData;

  const teamReducer = useSelector((state) => state.addTeam);
  const { success } = teamReducer;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(createTeam(formData));
  };
  
  useEffect(() => {
    if (success) {
      return history.push("/dashboard/teams");
    }
  }, [success, history]);

  return (
    <Fragment>
      <Container>
        <Link to="/dashboard/teams" className="btn btn-light my-3">
          Go Back
        </Link>

        <h1>Add Team</h1>

        <Form onSubmit={onSubmitHandlerHandler}>
          <Form.Group controlId="title">
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Team Name"
              name="teamName"
              value={teamName}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Add Team
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddTeam;
