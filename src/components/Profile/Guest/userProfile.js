import React, { useState } from "react";
import styles from "./Profile.module.css";
import deleteAccount from "../../../images/deleteAccount.png";
import { Link, Navigate } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import ShowHistory from "./Showhistory/ShowHistory";
import ProfilePic from "../Guest/Profile-Male-PNG.png";
import axios from '../../../api/axios';


// function PGNavigator() {

// }

function UserProfile() {
  let data = ["Guest Name", "GUESTEMAIL@EMAIL.COM"];
  const [image, setImage] = useState('');

  // let [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });
  // let [errorMsg, setErrorMsg] = useState("");
  // let [errorList, setErrorList] = useState([]);
  // let [loading, setLoading] = useState(false);
  // let elements = [{ name: 'Expand Details', value: 1 },
  // { name: 'Show History', value: 2 },
  // { name: 'Contact US', value: 3 },
  // { name: 'Log out', value: 4 },
  // ];

  // let ProfileDetails = 'This is the details for the user for the meantime';

  const [isDetailActive, setIsDetailActive] = useState(true);
  const [isHistoryActive, setIsHistoryActive] = useState(false);

  function hideDeleteBox() {
    var element = document.getElementById("deleteBox");
    element.style.display = "none";
  }

  function showDeleteBox() {
    setIsDetailActive(false);
    var element = document.getElementById("deleteBox");
    element.style.display = "flex";
  }

  function showUDetails() {
    setIsDetailActive((current) => true);
    setIsHistoryActive(false);
    var element = document.getElementById("deleteBox");
    element.style.display = "none";
  }
  function showHDetails() {
    setIsHistoryActive((current) => true);
    setIsDetailActive(false);
  }

  return (
    // big container
    <div className={`${styles.bigContainer}`}>
      <div id={"deleteBox"} className={`${styles.alerts}`}>
        <div className={`${styles.alertBox}`}>
          <img src={deleteAccount} alt="Delete Account" />
          <div className="txt mt-3">Do you want to delete your Account?</div>
          <div className={`${styles.alertButtons} mt-3`}>
            <button className={"deleteAccount btn btn-danger"}>Delete</button>
            <button className={"btn btn-primary"} onClick={hideDeleteBox}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/*    left Container*  for the long detailed guest info*/}
      <div className={`${styles.leftContainer} col-md-2`}>
        <div className={`${styles.PGButtonHolder}  mt-5 m-auto`}>
          {/* {elements.map(function (element, index) {
                        return <button id={element.value} className={"PGbuttons m-lg-1   btn btn-primary "}
                                       key={index} onClick={PGNavigator}>{element.name}</button>
                    })} */}

          <button
            className="btn btn-primary  m-lg-1" style={{ backgroundColor: "#4b86b4" ,marginTop:"40px"}}
            onClick={showUDetails}
          >
            Account Info
          </button>
          <button
            className="btn btn-primary  m-lg-1" style={{ backgroundColor: "#4b86b4" }}
            onClick={showHDetails}
          >
            Show History
          </button>
          <Link to={"/Contact"} className="btn btn-primary  m-lg-1" style={{ backgroundColor: "#4b86b4" }}
>
            Contact Us
          </Link>
          <button className="btn btn-primary  m-lg-1" style={{ backgroundColor: "#4b86b4" }}
>
            Log out
          </button>
          <button
            className="btn btn-primary  m-lg-1" style={{ backgroundColor: "#4b86b4" }}
            onClick={showDeleteBox}
          >
            Delete Account
          </button>
        </div>
      </div>
      <div className={`${styles.middleContainer} col-md-4 m-auto`}>
        <div>
        <div className={`${styles.historyCards} mt-3`}>
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
      </div>
      {/*
        Right Container* for the history and so on
        This box should show every content of the buttons in the left box
        */}
      <div className={`${styles.rightContainer} col-4`}>
        {/* <h4 className={`${styles.upcoming}`}>upcoming</h4> */}
      </div>  
    </div>
  );
}

export default UserProfile;
