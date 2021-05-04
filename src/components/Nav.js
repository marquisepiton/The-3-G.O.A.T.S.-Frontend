import React from "react";
import { Container } from "react-bootstrap";
import "./Nav.scss";

function Nav() {
  return (
    <div className="Container">
      <div className="text-center">
        <nav className="nav-bar">
          <li>The 3 G.O.A.T.S</li>
          <li>Login</li>
          <li>Players</li>
          <li>Discussions</li>
          <li>Contact Me</li>
          <li>About</li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
