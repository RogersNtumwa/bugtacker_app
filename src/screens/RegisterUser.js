import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../actions/auth";
import InputElement from "../components/Elements/InputElement";
import Alert from "../components/Alert";
import { Button, Container } from "react-bootstrap";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData));
  };

  return (
    <Container>
      <form className="form" onSubmit={onSubmitHandler}>
        <Alert />
        <h1>Add New User</h1>
        <InputElement
          type="text"
          label="FirstName"
          name="firstName"
          onChange={onChangeHandler}
          value={firstName}
        />
        <InputElement
          type="text"
          label="LastName"
          name="lastName"
          onChange={onChangeHandler}
          value={lastName}
        />
        <InputElement
          type="text"
          label="Email address"
          name="email"
          onChange={onChangeHandler}
          value={email}
        />
        <InputElement
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegisterUser;
