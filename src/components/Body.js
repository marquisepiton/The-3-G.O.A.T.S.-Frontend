import React from "react";
import data from "../data/data.json";
import "../components/Body.css"

function Body() {
  // Renders the card information.
  const card = data.home.map((data, index) => {
    return (
      
        <div className="col-sm">
           <div className="card"> 
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 key={index} className="card-title">
                {data.name}
              </h5>
              <p className="card-text">{data.desc}</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
    );
  });
  return (
    <div>
      <div className="container">
        <div className="row">{card}</div>
      </div>
    </div>
  );
}

export default Body;
