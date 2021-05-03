import "./App.css";
import Home from "./pages/Home";


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import * as mdb from "mdb-ui-kit"; // lib

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/home">
            <Home home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Profile profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
