import React, {useEffect, useState} from "react";
import styles from "./Profile.module.css";
import deleteAccount from "../../../images/deleteAccount.png";
import {Link} from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import ShowHistory from "./Showhistory/ShowHistory";
import axios from "../../../api/axios";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserCircle,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
    
  }from "react-icons/fa";
  import {RiLogoutCircleLine} from "react-icons/ri";
  import {CgPlayListAdd} from "react-icons/cg";
  import {MdOutlineConnectWithoutContact} from "react-icons/md";
  import {MdHistory} from "react-icons/md";
  import {TiDelete} from "react-icons/ti";
  import {TbFileReport} from "react-icons/tb";
  import { NavLink } from 'react-router-dom';
import Cookies from "js-cookie";
// function PGNavigator() {

// }

function UserProfile({children}) {

    const [isUserDetailActive, setIsUserDetailActive] = useState(true);
    const [isUserHistoryActive, setIsUserHistoryActive] = useState(false);
    const [userData, setUserData] = useState([]);
    let data = [userData.userName, userData.email];
  const[isOpen ,setIsOpen] = useState(true);
    useEffect(() => {
        axios.get("api/user/me", {headers: {Authorization: `Bearer ${Cookies.get("token")}`}}).then((e) => {
            // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
            setUserData(e.data.data)
            console.log(userData);
            {
                Cookies.getItem("token")
            }
        });
    }, [])
   
    function showUDetails() {
        setIsUserDetailActive((current) => true);
        setIsUserHistoryActive(false);
    }
    function showHDetails() {
        setIsUserHistoryActive((current) => true);
        setIsUserDetailActive(false);
    }
    function hideDeleteBox() {
        var element = document.getElementById("deleteBox");
        element.style.display = "none";
    }

const toggle = () => {setIsOpen (!isOpen)};
  const menuItem = [
    {function: () => { setIsUserDetailActive((current) => true);
        setIsUserHistoryActive(false);
    },
    name: "Account Info",
      icon: <FaUserCircle />,
},

   { function: () => {setIsUserHistoryActive((current) => true);
    setIsUserDetailActive(false);
},
    name: "Show History",
      icon: <MdHistory />,
    },
   {
    function: () => {var element = document.getElementById("deleteBox");
    element.style.display = "block";},
    name: "Delete Account",
    icon: <TiDelete />,
    },

]

// function hideDeleteBox() {
//     var element = document.getElementById("deleteBox");
//     element.style.display = "none";
// }

// function showDeleteBox() {
//     var element = document.getElementById("deleteBox");
//     element.style.display = "block";
// }


return (
    
    <div className="bigContainer">
      <div className={`row`}>
      {/* <div id={"deleteBox"} className="alerts">
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
      </div> */}
     
        <div className={`col-md-3   ${styles.leftcontainer}`}>
           <div style={{width: isOpen ? "190px" : "50px"}} className={`shadow ${styles.sidebar}`}>
               <div className={`${styles.topSection}`}>
                   <h1 style={{display: isOpen ? "block" : "none"}} className={`${styles.logo}`}>Your Profile</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={`${styles.bars}`}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className="profilePicture m-auto">
              <center>
                <img
                  src={require("../../../images/owner-profile.png")}
                  alt="Your Picture"
                  className={`m-auto w-25 ${styles.guestPic}`}
                  style={{ marginLeft: isOpen ? "50px" : "0px" }}
                />
              </center>
            </div>
        <div className="PGInfo m-auto mt-1">
          {data.map(function (value, index) {
            return (
              <div style={{display: isOpen ? "block" : "none"}}  className={`${styles.PGData}`} key={index}>
                {value}
              </div>
            );
          })}
        </div>
               
        {menuItem.map((item)=>(
                          <NavLink  className={`${styles.leftBtns}`} activeclassName={`${styles.active}`}>
                           <div className={`${styles.icon}`}>{item.icon}</div>
                           <button
                           style={{display: isOpen ? "block" : "none" ,
                            textDecoration:"none",
                            border: "0",
                            backgroundColor: "transparent",
                          }}
                            className={`${styles.btnss}`} id="button"
                            onClick={item.function}
                          >
                           {item.name}
                          </button>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>

         
    
      <div className="col-md-4 middleContainer ">
        <div className="historyCards mt-3">
          <div
            className="UDetails"
            style={{ display: isUserDetailActive ? "block" : "none" }}
          >
            <UserDetails />
          </div>
          
          <div
            className="OHistory"
            style={{ display: isUserHistoryActive ? "block" : "none" }}
          >
            <ShowHistory/>
          </div>

         

          
        </div>
      </div>
      </div>
    </div>
    
  );



    // return (
    //     // big container
    //     <div className={`${styles.bigContainer}`}>
    //         <div id={"deleteBox"} className={`${styles.alerts}`}>
    //             <div className={`${styles.alertBox}`}>
    //                 <img src={deleteAccount} alt="Delete Account"/>
    //                 <div className="txt mt-3">Do you want to delete your Account?</div>
    //                 <div className={`${styles.alertButtons} mt-3`}>
    //                     <button className={"deleteAccount btn btn-danger"}>Delete</button>
    //                     <button className={"btn btn-primary"} onClick={hideDeleteBox}>
    //                         Cancel
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //         {/*    left Container*  for the long detailed guest info*/}
    //         <div className={`col-md-3 mt-3 pt-5 ${styles.leftcontainer}`}>
    //        <div style={{width: isOpen ? "210px" : "50px"}} className={`shadow ${styles.sidebar}`}>
    //            <div className={`${styles.topSection}`}>
    //                <h1 style={{display: isOpen ? "block" : "none"}} className={`${styles.logo}`}>Your Profile</h1>
    //                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={`${styles.bars}`}>
    //                    <FaBars onClick={toggle}/>
    //                </div>
    //            </div>
    //            <div className="profilePicture m-auto"> 
    //       <img
    //         src={require("../../../images/owner-profile.png")}
    //         alt="Your Picture"
    //         className={`m-auto w-25 ${styles.guestPic}`}
    //         style={{marginLeft: isOpen ? "50px" : "0px"}}
    //       />
    //     </div>
    //     <div className="PGInfo m-auto mt-1">
    //       {data.map(function (value, index) {
    //         return (
    //           <div style={{display: isOpen ? "block" : "none"}}  className={`${styles.PGData}`} key={index}>
    //             {value}
    //           </div>
    //         );
    //       })}
    //     </div>
               
    //     {menuItem.map((item)=>(
    //                       <NavLink  className={`${styles.leftBtns}`} activeclassName={`${styles.active}`}>
    //                        <div className={`${styles.icon}`}>{item.icon}</div>
    //                        <button
    //                        style={{display: isOpen ? "block" : "none" ,
    //                         textDecoration:"none",
    //                         border: "0",
    //                         backgroundColor: "transparent",
    //                       }}
    //                         className={`${styles.btnss}`} id="button"
    //                         onClick={item.function}
    //                       >
    //                        {item.name}
    //                       </button>
    //                    </NavLink>
    //                ))
    //            }
    //        </div>
    //        <main>{children}</main>
    //     </div>
    //         <div className={`${styles.middleContainer} col-md-4 m-auto`}>
    //             <div>
    //                 <div className={`${styles.historyCards} mt-3`}>
    //                     <div
    //                         className="UDetails"
    //                         style={{display: isDetailActive ? "block" : "none"}}
    //                     >
    //                         <UserDetails></UserDetails>
    //                     </div>
    //                     <div
    //                         className="UHistory"
    //                         style={{display: isHistoryActive ? "block" : "none"}}
    //                     >
    //                         <ShowHistory></ShowHistory>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/*
    //     Right Container* for the history and so on
    //     This box should show every content of the buttons in the left box
    //     */}
    //         <div className={`${styles.rightContainer} col-4`}>
    //             {/* <h4 className={`${styles.upcoming}`}>upcoming</h4> */}
    //         </div>
    //     </div>
    // );
}

export default UserProfile;
