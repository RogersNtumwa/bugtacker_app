import React, { Fragment, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../actions/project";

const ShowProjects = ({ project, handleChange }) => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects);
  const { loading, projects } = projectList;

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <Fragment>
      {!loading && (
        <Form.Group as={Col} controlId="category">
          <Form.Label>Select Project</Form.Label>
          <Form.Control
            as="select"
            name="project"
            value={project}
            onChange={handleChange}
          >
            <Fragment>
              <option>Select Project</option>
              {projects.data.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.title}
                </option>
              ))}
            </Fragment>
          </Form.Control>
        </Form.Group>
      )}
    </Fragment>
  );
};

export default ShowProjects;
