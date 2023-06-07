import React from "react";
import "./BecomePartner.css"; // Import CSS file for component styling
import partnerPhoto from "../../images/4.jpg";
import { Link } from "react-router-dom"; // Import partner photo

const BecomePartner = () => {
  return (
    <div className="become-partner">
      <div className="partner-photo">
        <img src={partnerPhoto} alt="Partner" />
      </div>
      <div className="partner-info">
        <h2>Become Our Partner</h2>
        <p>Join us and be a part of our success story.</p>
        {/*<Link to={"Osignup"}>*/}
        <button
          onClick={() => {
            window.location.replace("Osignup");
          }}
          className="btn btn-primary"
        >
          Get Started
        </button>
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default BecomePartner;
