import "./App.css";
import { Nav } from "./components";
import Register from "./pages/Register"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/register">
            <Register register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
