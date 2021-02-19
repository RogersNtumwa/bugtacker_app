import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../actions/auth";
import Button from "../components/Elements/Button";
import InputElement from "../components/Elements/InputElement";
import Bug from "../images/Bug.png";
import Alert from "../components/Alert";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  useEffect(() => {
    if (isAuthenticated) {
      return history.push("/dashboard");
    }
  }, [isAuthenticated, history]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(userLogin(email, password));
    
  };

  return (
    <div className="landingPage">
      <img src={Bug} className="App-logo" alt="logo" />
      <Alert />
      <form className="form" onSubmit={onSubmitHandler}>
        <h1>Login Here</h1>
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
        <Button type="submit" label="Login" color="blue" />
      </form>
    </div>
  );
};

export default Login;
