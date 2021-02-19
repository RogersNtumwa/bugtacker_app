import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Alert from "./components/Alert";
import Main from "./components/Main";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Main} exact />
    </Router>
  );
}

export default App;
