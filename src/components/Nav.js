import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <Link className="nav-link" to={"/home"}>
                    The 3 G.O.A.T.S{" "}
                  </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
               
              <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Stats"}>
                    Stats{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/discussions"}>
                    Discussions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About
                  </Link>
                </li>
              </ul>
{/* 
              <a class="navbar-brand" href="www.marquisepiton.com">
      <img src="./img/sig.png" alt="" width="50" height="30" className="d-inline-block align-text-top"/>
      
    </a> */}
              
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default Nav;
