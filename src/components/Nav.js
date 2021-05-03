import React from "react";
import img from "./img/logo.png"


function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
          <a class="navbar-brand" href="#">
            <img
              src={img}
              height="50"
              width="50"
              alt=""
              loading="lazy"
            />
            The 3 G.O.A.T.S
          </a>
      
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Stats
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Players
                </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Lebron James
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Kobe Bryant
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Micheal Jordan
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact me
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
