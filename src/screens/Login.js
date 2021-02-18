import React from "react";
import Button from "../components/Elements/Button";
import InputElement from "../components/Elements/InputElement";

const Login = () => {
  return (
    <form>
      <h1>Login Here</h1>
      <InputElement type="text" label="Email address" />
      <InputElement type="password" label="Password" />
      <Button type="submit" label="Login" color="blue" />
    </form>
  );
};

export default Login;
