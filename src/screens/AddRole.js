import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { createRole } from "../actions/role";

const AddRole = ({ history }) => {
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();

  const { title } = formData;

  const roleReducer = useSelector((state) => state.addRole);
  const { success } = roleReducer;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(createRole(formData));
  };

  useEffect(() => {
    if (success) {
      return history.push("/dashboard/roles");
    }
  }, [success, history]);

  return (
    <Fragment>
      <Container>
        <Link to="/dashboard/roles" className="btn btn-light my-3">
          Go Back
        </Link>

        <h1>Add Role</h1>

        <Form onSubmit={onSubmitHandlerHandler}>
          <Form.Group controlId="title">
            <Form.Label>Role Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Team title"
              name="title"
              value={title}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Add Role
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddRole;
