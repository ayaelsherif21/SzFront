import React, { Component } from "react";
import CardsUI from "./CardsUI";
import img1 from "../../images/deleteAccount.png";
import img2 from "../../images/deleteAccount.png";
import img3 from "../../images/deleteAccount.png";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid ttotta d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col-md-4">
            <CardsUI
              imgsrc={img1}
              title="workspace1"
              date="date"
              price="price"
              duration="duration"
            />
          </div>

          <div className="col-md-4">
            <CardsUI
              imgsrc={img2}
              title="workspace2"
              date="date"
              price="price"
              duration="duration"
            />
          </div>

          <div className="col-md-4">
            <CardsUI
              imgsrc={img3}
              title="workspace3"
              date="date"
              price="price"
              duration="duration"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
