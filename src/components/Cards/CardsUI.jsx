import React from "react";
import "./Cards.css";

function CardsUI(props) {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondry">{props.text}</p>
        <p className="card-text text-secondry">{props.date}</p>
        <p className="card-text text-secondry">{props.description}</p>
        <p className="card-text text-secondry">{props.price}</p>
        <p className="card-text text-secondry">{props.duration}</p>

        <a href="Workspace" className="btn btn-outline-success">
          go to your workspace
        </a>
      </div>
    </div>
  );
}

export default CardsUI;
