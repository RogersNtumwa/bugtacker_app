import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import AddBug from "../screens/AddBug";
import AddProject from "../screens/AddProject";
import AddRole from "../screens/AddRole";
import AddTeam from "../screens/AddTeam";

import BugDetails from "../screens/BugDetails";
import BugEditScreen from "../screens/BugEditScreen";
import Bugs from "../screens/Bugs";
import Dashboard from "../screens/Dashboard";
import EditProject from "../screens/EditProject";
import EditTeam from "../screens/EditTeam";
import Projects from "../screens/Projects";
import RegisterUser from "../screens/RegisterUser";
import Roles from "../screens/Roles";
import Teams from "../screens/Teams";
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
          <Route path={url + "/register"} component={RegisterUser} exact />
          <Route path={url + "/profile"} component={Userprofile} exact />
          <Route path={url + "/bugs"} component={Bugs} exact />
          <Route path={url + "/bugs/:id"} component={BugDetails} exact />
          <Route path={url + "/newBUg"} component={AddBug} exact />
          <Route
            path={url + "/bugs/:id/edit"}
            component={BugEditScreen}
            exact
          />
          <Route path={url + "/projects"} component={Projects} exact />
          <Route
            path={url + "/projects/:id/edit"}
            component={EditProject}
            exact
          />
          <Route path={url + "/newProject"} component={AddProject} exact />
          <Route path={url + "/roles"} component={Roles} exact />
          <Route path={url + "/newRole"} component={AddRole} exact />
          <Route path={url + "/teams"} component={Teams} exact />
          <Route path={url + "/teams/:id/edit"} component={EditTeam} exact />
          <Route path={url + "/newTeam"} component={AddTeam} exact />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
