import React, {useEffect, useState} from "react";
import styles from "./Profile.module.css";
import deleteAccount from "../../../images/deleteAccount.png";
import {Link} from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import ShowHistory from "./Showhistory/ShowHistory";
import axios from "../../../api/axios";
import Cookies from "js-cookie";
// function PGNavigator() {

// }

function UserProfile() {

    const [isDetailActive, setIsDetailActive] = useState(false);
    const [isHistoryActive, setIsHistoryActive] = useState(false);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("api/user/me", {headers: {Authorization: `Bearer ${Cookies.get("token")}`}}).then((e) => {
            // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
            setUserData(e.data.data)
            console.log(userData);
            {
                Cookies.getItem("token")
            }
        });
    }, []);

    function hideDeleteBox() {
        var element = document.getElementById("deleteBox");
        element.style.display = "none";
    }

    function showDeleteBox() {
        var element = document.getElementById("deleteBox");
        element.style.display = "block";
    }

    function showUDetails() {
        setIsDetailActive((current) => true);
        setIsHistoryActive(false);
    }

    function showHDetails() {
        setIsHistoryActive((current) => true);
        setIsDetailActive(false);
    }

    let data = [userData.userName, userData.email];


    return (
        // big container
        <div className={`${styles.bigContainer}`}>
            <div id={"deleteBox"} className={`${styles.alerts}`}>
                <div className={`${styles.alertBox}`}>
                    <img src={deleteAccount} alt="Delete Account"/>
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
            <div className={`${styles.leftContainer} col-2`}>
                <div className={`${styles.PGButtonHolder}  mt-5 m-auto`}>
                    {data.map(function (value, index, array) {
                        return (
                            <div className="PGData" key={index}>
                                {value}
                            </div>
                        );
                    })}

                    <button
                        className="btn btn-primary  m-lg-1" style={{backgroundColor: "#4b86b4", marginTop: "40px"}}
                        onClick={showUDetails}
                    >
                        Account Info
                    </button>
                    <button
                        className="btn btn-primary  m-lg-1" style={{backgroundColor: "#4b86b4"}}
                        onClick={showHDetails}
                    >
                        Show History
                    </button>
                    <Link to={"/Contact"} className="btn btn-primary  m-lg-1" style={{backgroundColor: "#4b86b4"}}
                    >
                        Contact Us
                    </Link>
                    <button className="btn btn-primary  m-lg-1" style={{backgroundColor: "#4b86b4"}}
                    >
                        Log out
                    </button>
                    <button
                        className="btn btn-primary  m-lg-1" style={{backgroundColor: "#4b86b4"}}
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
                            style={{display: isDetailActive ? "block" : "none"}}
                        >
                            <UserDetails></UserDetails>
                        </div>
                        <div
                            className="UHistory"
                            style={{display: isHistoryActive ? "block" : "none"}}
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
