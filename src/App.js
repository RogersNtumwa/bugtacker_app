import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Alert from "./components/Alert";
import Main from "./components/Main";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
