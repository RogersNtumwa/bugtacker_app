import React, { useState, Fragment, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/users";

const ShowUsers = ({ assignedTo, handleChange, label, field }) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);
  const { loading, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Fragment>
      {!loading && (
        <Form.Group as={Col} controlId="category">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            as="select"
            name={field}
            value={assignedTo}
            onChange={handleChange}
          >
            <Fragment>
              <option>{label}</option>
              {users.data.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstName}
                  {user.lastName}
                </option>
              ))}
            </Fragment>
          </Form.Control>
        </Form.Group>
      )}
    </Fragment>
  );
};

export default ShowUsers;
