import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";

const Main = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route path={url} component={Dashboard} exact />
    </div>
  );
};

export default Main;
