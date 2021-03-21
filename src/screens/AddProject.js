import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { createProject } from "../actions/project";

const AddProject = ({ history }) => {
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();

  const { title, description } = formData;

  const projectReducer = useSelector((state) => state.addProject);
  const { success } = projectReducer;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(createProject(formData));
  };
  useEffect(() => {
    if (success) {
      return history.push("/dashboard/projects");
    }
  }, [success, history]);

  return (
    <Fragment>
      <Container>
        <Link to="/dashboard/projects" className="btn btn-light my-3">
          Go Back
        </Link>

        <h1>Add Product</h1>

        <Form onSubmit={onSubmitHandlerHandler} encType="multipart/form-data">
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Title"
              name="title"
              value={title}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product description"
              name="description"
              value={description}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Add Project
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddProject;
