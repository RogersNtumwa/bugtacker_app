import React, { useState } from "react";
import Button from "../components/Elements/Button";
import InputElement from "../components/Elements/InputElement";
import Bug from "../images/Bug.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="landingPage">
      <img src={Bug} className="App-logo" alt="logo" />
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
