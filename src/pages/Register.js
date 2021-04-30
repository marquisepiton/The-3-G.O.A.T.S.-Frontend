import React,{useState} from 'react';
import { Switch } from "react-router";
import "./Register.css";

function Register(props) {
  const [formData, setFormData] = useState({})

  const handleForm = (e) => {

    setFormData(previousState => (
      {
        ...previousState,
        [e.target.name]: e.target.value
      }
    ))

    

  }
  return (
    <div className="container">
      <div className="register">
        <div className="card">
          <div className="header">
            <h1>Register!</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  name='username'
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
                <div className="form-outline mb-4">
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
