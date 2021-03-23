import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projectDetails, updateProject } from "../actions/project";
import { PROJECT_UPDATE_RESET } from "../actions/types";

const EditProject = ({ match, history }) => {
  const projectId = match.params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const projectdata = useSelector((state) => state.project);
  const { loading, project } = projectdata;

  const projectupdate = useSelector((state) => state.editProject);
  const { loading: loadingUpdate, success } = projectupdate;

  useEffect(() => {
    if (success) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      history.push("/dashboard/projects");
    } else {
      if (!project.title || project._id !== projectId) {
        dispatch(projectDetails(projectId));
      } else {
        setTitle(project.title);
        setDescription(project.description);
      }
    }
  }, [dispatch, history, project, projectId, success]);

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProject({
        _id: projectId,
        title,
        description,
      })
    );
  };

  return (
    <Fragment>
      <Container>
        <Link to="/dashboard/projects" className="btn btn-light my-3">
          Go Back
        </Link>

        <h1>Edit Prject</h1>
        {loadingUpdate && "Update pending"}
        {loading ? (
          "loading"
        ) : (
          <Form onSubmit={onSubmitHandlerHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </Container>
    </Fragment>
  );
};

export default EditProject;
