import React from "react";
import "./Card.css";

function Card(props) {
  const card = props.data[1].card.map((data, index) => {
    return (
      <div  className="col-sm">
        <div className="card">
          <img
            data={props.data}
            src={"./img/" + data.img}
            className="card-img-top"
            alt={props.data.name}
          ></img>
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
    <div className="container">
      <div className="row">{card}</div>
    </div>
  );
}

export default Card;
