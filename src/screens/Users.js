import React, { useState, useEffect, Fragment } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import { getUsers } from "../actions/users";
import AdminSearch from "../components/AdminSearch";

const Users = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);
  const { loading, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteProjectHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      // dispatch(deleteProject(id));
    }
  };
  const searched = (keyword) => (c) =>
    c.firstName.toLowerCase().includes(keyword);
  return (
    <Fragment>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>User List</h1>
          </Col>
          <Col className="text-right">
            <Link to="/dashboard/register">
              <Button className="my-3">
                <i className="fas fa-plus"></i> Add user
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
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>TEAMS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.data.filter(searched(keyword)).map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.team}</td>
                  <td></td>
                  <td>
                    <LinkContainer to={`/dashboard/users/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteProjectHandler(user._id)}
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

export default Users;
