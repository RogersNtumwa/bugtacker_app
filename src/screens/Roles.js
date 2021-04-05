import React, { useState, useEffect, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getRoles, assignRoleToUser } from "../actions/role";
import ShowUsers from "../components/ShowUsers";

const Roles = () => {
  const [formData, setformData] = useState({});
  const { title } = formData;
  const dispatch = useDispatch();

  const [addRole, setAddRole] = useState(false);

  const rolesList = useSelector((state) => state.roles);
  const { loading, roles } = rolesList;

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const getUsers = () => {
    setAddRole(!addRole);
  };
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(assignRoleToUser(formData));
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>Manage User Roles</h1>
        </Col>
        <Col className="text-right">
          <Link to="/dashboard/newRole">
            <Button className="my-3">
              <i className="fas fa-plus"></i> Add Role
            </Button>
          </Link>
        </Col>
      </Row>
      {!loading && (
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Roles Available</Form.Label>
            <Form.Control
              as="select"
              name="title"
              value={title}
              onChange={handleChange}
              multiple
            >
              {roles.map((role) => (
                <option key={role._id} value={role.title}>
                  {role.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Assign Role to a User"
              onClick={getUsers}
            />
          </Form.Group>

          {addRole && (
            <Fragment>
              <ShowUsers
                handleChange={handleChange}
                field="userID"
                label="Select User"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Fragment>
          )}
        </Form>
      )}
    </Container>
  );
};

export default Roles;
