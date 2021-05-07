import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-sm">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">Menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to={"/home"}>
            <li className="nav-item">The 3 G.O.A.T.S</li>
          </Link>
          <Link to={"/login"}>
            <li className="nav-item">Login</li>
          </Link>
          <Link to={"/Stats"}>
            <li className="nav-item">Stats</li>
          </Link>
          <Link to={"/discussions"}>
            <li className="nav-item">Discussions</li>
          </Link>
          <Link to={"/contact"}>
            <li className="nav-item">Contact Me</li>
          </Link>
          <Link to={"/about"}>
            <li className="nav-item">About</li>
          </Link>
          </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
