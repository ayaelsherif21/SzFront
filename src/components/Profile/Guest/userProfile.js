import React, { useState } from "react";
import "./Profile.css";
import deleteAccount from "../../../images/deleteAccount.png";
import { Link, Navigate } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import ShowHistory from "./Showhistory/ShowHistory";

// function PGNavigator() {

// }

function UserProfile() {
  let data = ["Guest Name", "GUESTEMAIL@EMAIL.COM"];
  // let elements = [{ name: 'Expand Details', value: 1 },
  // { name: 'Show History', value: 2 },
  // { name: 'Contact US', value: 3 },
  // { name: 'Log out', value: 4 },
  // ];

  // let ProfileDetails = 'This is the details for the user for the meantime';

  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHistoryActive, setIsHistoryActive] = useState(false);

  function hideDeleteBox() {
    var element = document.getElementById("deleteBox");
    element.style.display = "none";
  }

  function showDeleteBox() {
    var element = document.getElementById("deleteBox");
    element.style.display = "flex";
  }

  function showUDetails() {
    setIsDetailActive((current) => !current);
    setIsHistoryActive(false);
  }
  function showHDetails() {
    setIsHistoryActive((current) => !current);
    setIsDetailActive(false);
  }

  return (
    // big container
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
      {/*    left Container*  for the long detailed guest info*/}
      <div className="leftContainer col-3">
        <div className="profilePicture mt-1">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={require("./Profile-Male-PNG.png")}
            alt="Your Picture"
            className="guestPic"
          />
        </div>
        <div className="PGInfo mt-3">
          {data.map(function (value, index, array) {
            return (
              <div className="PGData" key={index}>
                {value}
              </div>
            );
          })}
        </div>
        <div className={"PGButtonHolder mt-4"}>
          {/* {elements.map(function (element, index) {
                        return <button id={element.value} className={"PGbuttons m-lg-1   btn btn-primary "}
                                       key={index} onClick={PGNavigator}>{element.name}</button>
                    })} */}

          <button
            className={"btn btn-primary  m-lg-1 PGButtons"}
            onClick={showUDetails}
          >
            Expand Details
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"}
            onClick={showHDetails}
          >
            Show History
          </button>
          <Link to={"/Contact"} className={"btn btn-primary  m-lg-1 PGButtons"}>
            Contact Us
          </Link>
          <button className={"btn btn-primary  m-lg-1 PGButtons"}>
            Log out
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
            style={{ display: isDetailActive ? "block" : "none" }}
          >
            <UserDetails></UserDetails>
          </div>
          <div
            className="UHistory"
            style={{ display: isHistoryActive ? "block" : "none" }}
          >
            <ShowHistory></ShowHistory>
          </div>
        </div>
      </div>
      {/*
        Right Container* for the history and so on
        This box should show every content of the buttons in the left box
        */}
    </div>
  );
}

export default UserProfile;
