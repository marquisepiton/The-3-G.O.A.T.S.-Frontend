import React from "react";
import "./Footer.css";
import img from "./img/sigLogoWhite.png";


function Footer() {
  return (
    <div>
      <div className="foot">
        <div className="bg-secondary text-white text-center">
          <div className="container p-3">
            <div className="row">
              <img src={img}></img>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Stats
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Players
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ BackgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ BackgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac;" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca;" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333;" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div className="text-center p-3">
            © 2021 Copyright:
            <a className="text-white" href="https://github.com/marquisepiton">
              Thank You Awesome Inc.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
