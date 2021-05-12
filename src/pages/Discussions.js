import React, { useState, useEffect } from "react";
import Data from "../data/data.json";
import Header from "../components/Header";
import axios from "axios";
import "./Discussions.scss";

function Discussions() {
  const event = new Date();
  const [formData, setFormData] = useState({});
  const [threadData, setThreadData] = useState([]);

  const handleSubmit = (e) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/discussions/create";
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

  const axiosGetThread = () => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/discussions";
    axios
      .get(apiUrl)
      .then(function (response) {
        console.log(response.data);
        setThreadData(response.data);
      })
      .catch(function (error) {
        console.log(error);
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

        <>
      <div key={index} href="#" class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            {" "}
            <div style={{ color: "black" }} class="text-big" data-abc="true">
              {data.title}
            </div>
            <div class="text-muted small mt-1">
              Created on: {data.created_at} &nbsp;·&nbsp;{" "}
              <a class="text-muted" data-abc="true">
                Jimmy
              </a>
            </div>
          </div>

          <div class="d-none d-md-block col-4">
            <div class="row no-gutters align-items-center">
              <div class="col-4">12</div>
              <div class="media col-8 align-items-center">
                {" "}
                <img src="../" alt="" class="d-block ui-w-30 rounded-circle" />
                <div class="media-body flex-truncate ml-2">
                  <div class="line-height-1 text-truncate">1 day ago</div>{" "}
                  <a class="text-muted small text-truncate" data-abc="true">
                    by Marquise piton
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <hr class="m-0"/>
      </>
    );
  });

  return (
    <>
      <Header data={Data.discussions} />

      <button
        type="button"
        className="thread-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New Thread
      </button>

      <div   class="card-header pl-0 pr-0">
        <div class="row no-gutters w-100 align-items-center">
          <div class="col ml-3">Topics</div>
          <div class="col-4 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-4">Replies</div>
              <div class="col-8">Last update</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div style={{ color: "black" }} className="modal-dialog">
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
                    className=" btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>{" "}
                  <button
                    className="thread-button"
                    type="submit"
                    name="submit"
                    id="submit"
                  >
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
