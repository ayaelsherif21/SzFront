import React, { useState } from "react";
import "./ownerPofile.css";
import { Link } from "react-router-dom";

import deleteAccount from "../../../images/deleteAccount.png";
import ShowHistoryOwner from "./ShowHistoryOwner/ShowHistoryOwner";
import OwnerDetails from "./OwnerDetails/OwnerDetails";
function OwnerProfile() {
  let data = ["Owner Name", "OWNER_EMAIL@EMAIL.COM"];

  const [isOwnerDetailActive, setIsOwnerDetailActive] = useState(false);
  const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);

  function hideDeleteBox() {
    const element = document.getElementById("deleteBox");
    element.style.display = "none";
  }

  function showDeleteBox() {
    const element = document.getElementById("deleteBox");
    element.style.display = "flex";
  }

  function showODetails() {
    // setIsOwnerDetailActive((current) => !current);
    setIsOwnerHistoryActive(false);
    setIsOwnerDetailActive(true);
  }
  function showHODetails() {
    // setIsOwnerHistoryActive((current) => !current);
    setIsOwnerDetailActive(false);
    setIsOwnerHistoryActive(true);
  }

  function showOSpaces() {}

  return (
    <div className="bigContainer">
      <div id={"deleteBox"} className="alerts">
        <div className="alertBox">
          <img src={deleteAccount} alt="Delete Account" />
          <div className="txt mt-3">Do you want to delete your Account?</div>
          <div className="alertButtons mt-3">
            <button className={"deleteAccount btn btn-danger"}>Delete</button>
            <button className={"btn btn-primary"} onClick={hideDeleteBox}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="leftContainer col-3">
        <div className="profilePicture mt-1">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={require("../../../images/owner-profile.png")}
            alt="Your Picture"
            className="guestPic"
          />
        </div>
        <div className="PGInfo mt-3">
          {data.map(function (value, index) {
            return (
              <div className="PGData" key={index}>
                {value}
              </div>
            );
          })}
        </div>
        <div className={"PGButtonHolder mt-4"}>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"}
            onClick={showODetails}
          >
            Expand Owner Details
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"}
            onClick={showOSpaces}
          >
            Show Spaces
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"}
            onClick={showHODetails}
          >
            Show History
          </button>
          <Link to={"/Contact"} className={"btn btn-primary  m-lg-1 PGButtons"}>
            Contact Us
          </Link>
          <button className={"btn btn-primary  m-lg-1 PGButtons"}>
            Log out
          </button>
          <button className={"btn btn-primary  m-lg-1 PGButtons"}>
            Reports
          </button>
          <button
            className={"btn btn-danger m-lg-1 PGButtons"}
            onClick={showDeleteBox}
          >
            Delete Account
          </button>
        </div>
      </div>
      <div className="rightContainer col-9">
        <div className="historyCards mt-5">
          <div
            className="UDetails"
            style={{ display: isOwnerDetailActive ? "block" : "none" }}
          >
            <OwnerDetails></OwnerDetails>
          </div>
          <div
            className="OHistory"
            style={{ display: isOwnerHistoryActive ? "block" : "none" }}
          >
            <ShowHistoryOwner></ShowHistoryOwner>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;
