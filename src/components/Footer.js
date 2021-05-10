import React from "react";
import "./Footer.scss";
import img from "./img/sigLogoWhite.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {/* <h6>About</h6> */}
              <div className="row">
                <div className="column">
                  <img className='sig' src="../img/sigLogoWhite.png"></img>
                  <div className="row"></div>
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Contact Me</h6>
              <ul className="footer-links">
                <li>
                  <a href="www.gmail.com">pitonmarquise@gmail.com</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/marquisepiton/">
                    Linkedln
                  </a>
                </li>
                <li>
                  <a href="https://github.com/marquisepiton">Github</a>
                </li>
                <li>
                  <a href="https://www.kaggle.com/marquisepiton">Kaggle</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sirquisepiton/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MarquisePiton">Twitter</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <Link to={"/home"}>
                  {" "}
                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <Link to={"/login"}>
                  {" "}
                  <li>
                    <a>Login</a>
                  </li>
                </Link>
                <Link to={"/Stats"}>
                  <li>
                    <a>Stats</a>
                  </li>
                </Link>
                <Link to={"/discussions"}>
                  {" "}
                  <li>
                    <a>Discussions</a>
                  </li>
                </Link>
                <Link to={"/contact"}>
                  {" "}
                  <li>
                    <a>Contact</a>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li>
                    <a>About</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a href="#"> Awesome Inc</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
