import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.scss';
import Alert from "./components/Alert";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      {/* <Alert/> */}
      <Route path="/" component={Login} exact/>
    </Router>
    
  );
}

export default App;
