import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { getProjects, deleteProject } from "../actions/project";
import AdminSearch from "../components/AdminSearch";

const Projects = ({ history, match }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects);
  const { loading, projects } = projectList;

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const deleteProjectHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      dispatch(deleteProject(id));
    }
  };
  const searched = (keyword) => (c) => c.title.toLowerCase().includes(keyword);
  return (
    <Fragment>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>projects List</h1>
          </Col>
          <Col className="text-right">
            <Link to="/admin/projects/add">
              <Button className="my-3">
                <i className="fas fa-plus"></i> Add project
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <AdminSearch keyword={keyword} setKeyword={setKeyword} />
        </Row>
        {loading ? (
          "loading..."
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.data.filter(searched(keyword)).map((project) => (
                <tr key={project._id}>
                  <td>{project._id}</td>
                  <td>{project.title}</td>
                  <td>${project.description}</td>
                  <td>{project.createdDate}</td>
                  <td>
                    <LinkContainer to={`/projects/${project._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteProjectHandler(project._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </Fragment>
  );
};

export default Projects;
