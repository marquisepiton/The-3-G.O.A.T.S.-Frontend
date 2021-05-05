import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="Container">
      <div className="text-center">
        <nav className="nav-bar">
          <Link to={"/home"}><li>The 3 G.O.A.T.S</li></Link>
          <Link to={"/login"}><li>Login</li></Link>
          <Link to={"/players"}><li>Players</li></Link>
          <Link to={"/discussions"}><li>Discussions</li></Link>
          <Link to={"/contact"}><li>Contact Me</li></Link>
          <Link to={"/about"}><li>About</li></Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
