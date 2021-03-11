import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import BugDetails from "../screens/BugDetails";
import BugEditScreen from "../screens/BugEditScreen";
import Bugs from "../screens/Bugs";
import Dashboard from "../screens/Dashboard";
import Projects from "../screens/Projects";
import Roles from "../screens/Roles";
import Userprofile from "../screens/Userprofile";
import Users from "../screens/Users";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = ({ match, history }) => {
  const { url } = match;

  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  useEffect(() => {
    if (!isAuthenticated) {
      return history.push("/");
    }
  }, [isAuthenticated, history]);

  return (
    <Fragment>
      <div className="dashboard">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Route path={url} component={Dashboard} exact />
          <Route path={url + "/users"} component={Users} exact />
          <Route path={url + "/profile"} component={Userprofile} exact />
          <Route path={url + "/bugs"} component={Bugs} exact />
          <Route path={url + "/bugs/:id"} component={BugDetails} exact />
          <Route
            path={url + "/bugs/:id/edit"}
            component={BugEditScreen}
            exact
          />
          <Route path={url + "/projects"} component={Projects} exact />
          <Route path={url + "/roles"} component={Roles} exact />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
