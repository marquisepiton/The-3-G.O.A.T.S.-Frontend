import React, { useState, useEffect } from "react";
import "./Login.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios";

function Login() {
  // ================================ useState===================================================
  const [formData, setFormData] = useState({});
  const [teamData, setTeamData] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  //================================ Axios calls ==============================================
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
  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md">
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
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
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="loginName"
                      className="form-control"
                    />
                    <label className="form-label" for="loginName">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                    />
                    <label className="form-label" for="loginPassword">
                      Password
                    </label>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="form-check mb-3 mb-md-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="loginCheck"
                          checked
                        />
                        <label className="form-check-label" for="loginCheck">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign in
                  </button>

                  <div className="text-center">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="registerUsername"
                      className="form-control"
                      onChange={handleForm}
                    />
                    <label className="form-label" for="registerUsername">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control"
                      onChange={handleForm}
                      value={FormData || ""}
                    />
                    <label className="form-label" for="registerEmail">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control"
                    />
                    <label
                      className="form-label"
                      for="registerPassword"
                      value={FormData || ""}
                    >
                      Password
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      className="form-control"
                    />
                    <label className="form-label" for="registerRepeatPassword">
                      Repeat password
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <div className="col-12">
                      <label
                        className="visually-hidden"
                        for="inlineFormSelectPref"
                      >
                        Favorite Team
                      </label>
                      <select
                        onChange={handleForm}
                        name="favoriteteam"
                        className="select"
                      >
                        <option>Select one</option>
                        {teams}
                      </select>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <div className="col-12">
                      <label
                        className="visually-hidden"
                        for="inlineFormSelectPref"
                      >
                        Pick from the 3
                      </label>
                      <select
                        onChange={handleForm}
                        name="fanof"
                        className="select"
                      >
                        <option>Select one</option>
                        {mapPlayers}
                      </select>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="registerCheck"
                      checked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label className="form-check-label" for="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-3"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
