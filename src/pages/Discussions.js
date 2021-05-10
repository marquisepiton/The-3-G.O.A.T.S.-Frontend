import React, { useState, useEffect } from "react";
import Data from "../data/data.json";
import Header from "../components/Header";
import axios from "axios";

function Discussions() {
  const [formData, setFormData] = useState({});
  const [threadData, setThreadData] = useState([]);

  const handleSubmit = (e) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/discussions/create";
    e.preventDefault();
    axios.post(apiUrl,formData).then((response) => {

        console.log(response);


    })
    .catch((error) => {
      console.log(error);


      
    });
  };

  const axiosGetThread = (accept, content, accessControlAllowOrigin, authorization) => {
      let token = "";
      let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${token}`
      };
    let data = {};
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/discussions";
    axios({
        method:"get",
        apiUrl,
        data,
        headers,
        })
        .then(function (response) {
            console.log(response.data);
      setThreadData(response);
    });
  };

  console.log(formData);

  const handleForm = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  //useEffect(handleSubmit, []);
  useEffect(axiosGetThread, []);

  console.log(threadData);

  const mapThread = threadData.map((data, index) => {
    return (
      <div>
        <a
          key={index}
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <a />
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{data.title}</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">{data.content}</p>
          <small>...</small>
        </a>
      </div>
    );
  });

  return (
    <>
      <Header data={Data.discussions} />

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New Thread
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create A New Thread
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    for="titleInput"
                    className="form-label"
                    value={formData || ""}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    aria-describedby="eHelp"
                    onChange={handleForm}
                    name="title"
                  />
                  <div id="instructions" className="form-text">
                    A title for the thread.
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    for="body"
                    className="form-label"
                    value={formData || ""}
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    onChange={handleForm}
                    name="content"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    I will be respectful.
                  </label>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>{" "}
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {mapThread}
    </>
  );
}

export default Discussions;
