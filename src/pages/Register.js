import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
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
  console.log(formData);
  const handleSubmit = (e) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/register";
    e.preventDefault();
    axios.post(apiUrl, formData)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
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
      <option  key={index} value={data.teamname}>
        {data.teamname}
      </option>
    );
  })
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
      <div className="register">
        <div className="card">
          <div className="header">
            <h1>Register!</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  name="username"
                  id="registerUsername"
                  className="form-control"
                  onChange={handleForm}
                  value={formData.username || ""}
                />
                <label className="form-label" for="registerUsername">
                  Username
                </label>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="registerEmail"
                    className="form-control"
                    onChange={handleForm}
                    value={formData.email || ""}
                  />
                  <label className="form-label" for="registerEmail">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    id="registerPassword"
                    className="form-control"
                    onChange={handleForm}
                    value={formData.password || ""}
                  />
                  <label className="form-label" for="registerPassword">
                    Password
                  </label>
                </div>
                {/* <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="repeatPassword"
                    id="registerRepeatPassword"
                    className="form-control"
                    onChange={handleForm}
                    value={formData.repeatPassword || ""}
                  />
                  <label className="form-label" for="registerRepeatPassword">
                    Repeat password
                  </label>
                </div> */}
        

                <div className="form-outline mb-4">
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      for="inlineFormSelectPref"
                      
                    >
                      Fan Of
                    </label>
                    <select 
                     onChange={handleForm} name="fanof"
                    className="select">{mapPlayers}</select>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      for="inlineFormSelectPref"
                    >
                      Team
                    </label>
                    <select 
                     onChange={handleForm} name="favoriteteam"
                    className="select">{teams}</select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;