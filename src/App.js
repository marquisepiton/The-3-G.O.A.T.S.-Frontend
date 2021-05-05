import "./App.css";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Player from "./pages/Players";
import Discussions from "./pages/Discussions";
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
          <Route exact path={["/home","/"]}>
            <Home home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/players">
            <Player players />
          </Route>
        </Switch>
        <Switch>
          <Route path="/discussions">
            <Discussions discussions />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Profile profile />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contact">
            <Contact Contact />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
