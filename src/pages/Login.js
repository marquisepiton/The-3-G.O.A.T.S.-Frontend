import React, { useState, useEffect } from "react";
import "./Login.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "mdb-ui-kit";
import Nav from "../components/Nav";

function Login() {
  //const location = useLocation();
  // ================================ useState===================================================
  const [formData, setFormData] = useState({});
  const [signInData, setSignInData] = useState({});
  const [teamData, setTeamData] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  //================================ Axios calls ==============================================

  const handleLogin = (e) => {
    setSignInData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLoginsubmit = (e) => {
    const apiUrl = e.preventDefault();
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response);
        // SAVE TOKEN
        localStorage.setItem("token", formData);

        // localStorage.setItem("itemName", value);
        // localStorage.getItem("itemName");

        // REDIRECT TO DASHBOARD (USEHISTORY)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForm = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/register";
    e.preventDefault();
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response);
        // SAVE TOKEN
        localStorage.setItem("token", formData);

        // localStorage.setItem("itemName", value);
        // localStorage.getItem("itemName");

        // REDIRECT TO DASHBOARD (USEHISTORY)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Extract team data
  const axiosGetTeam = () => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/team/all";
    axios.get(apiUrl).then(function (response) {
      setTeamData(response.data);
    });
  };
  // Extract player data
  const axiosGetPlayer = () => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/player/all";
    axios.get(apiUrl).then(function (response) {
      setPlayerData(response.data);
    });
  };
  // ================================ useEffect==================================================
  useEffect(axiosGetPlayer, []);
  useEffect(axiosGetTeam, []);
  //useEffect ()
  // ====================================== MAPPING==============================================
  // Map the team data into the scroll component
  const teams = teamData.map((data, index) => {
    return (
      <option key={index} value={data.teamname}>
        {data.teamname}
      </option>
    );
  });
  // Map the player data into the scroll component
  const mapPlayers = playerData.map((data, index) => {
    return (
      <option key={index} value={data.name}>
        {data.name}
      </option>
    );
  });
  // =================================================================================================
  return (
    <div class="container">
      <div class="row">
       
        <div class="col">
        {/* <img src='../img/logo.png'></img> */}
          <div className="login-card">
            <ul className="nav  nav-justified mb-3 " id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="tab-login"
                  data-mdb-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="tab-register"
                  data-mdb-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active "
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form>
                  <h3>Login</h3>
                  <div className="mb-3">
                    <label for="InputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      onChange={handleLogin}
                    ></input>
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="InputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                      onChange={handleLogin}
                    ></input>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    ></input>
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form
                  className="row g-3 needs-validation"
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <h3>Register</h3>
                  <div className="col-md-4">
                    <label for="registerUsername" className="form-label" name>
                      Username
                    </label>
                    <input
                      type="text"
                      id="registerUsername"
                      className="form-control"
                      onChange={handleForm}
                      name="username"
                      required
                    ></input>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4">
                    <label
                      for="registerEmail"
                      className="form-label"
                      onChange={handleForm}
                      value={formData || ""}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control"
                      onChange={handleForm}
                      className="form-control"
                      required
                      name="email"
                    ></input>
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-4">
                    <label
                      className="form-label"
                      for="registerPassword"
                      value={formData || ""}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control"
                      onChange={handleForm}
                      required
                      name="password"
                    />
                  </div>

                  <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">
                      Team
                    </label>
                    <select
                      className="form-select"
                      id="validationCustom04"
                      onChange={handleForm}
                      name="favoriteteam"
                      className="select"
                      required
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>...</option>
                      {teams}
                    </select>
                    <div className="invalid-feedback">
                      Please select a Favorite Team
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">
                      Player
                    </label>
                    <select
                      className="form-select"
                      id="validationCustom04"
                      onChange={handleForm}
                      name="fanof"
                      className="select"
                      required
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>...</option>
                      {mapPlayers}
                    </select>
                    <div className="invalid-feedback">
                      Please select a Favorite Player
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      ></input>
                      <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
