import React, { useState } from "react";
import styles from "./ownerPofile.module.css";
import { Link } from "react-router-dom";
import deleteAccount from "../../../images/deleteAccount.png";
import ShowHistoryOwner from "./ShowHistoryOwner/ShowHistoryOwner";
import OwnerDetails from "./OwnerDetails/OwnerDetails";
import WorkspaceForm from "./WorkspaceForm/WorkspaceForm";
import Amenities from "./Amenities/Amenities";
import axios from 'axios';
// import LeftSideBar from "../../Navbar/LeftSideBar";
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

export default function OwnerProfile({children}) {
  let data = ["Owner Name", "OWNER_EMAIL@EMAIL.COM"];
  const[isOpen ,setIsOpen] = useState(true);
  const [isOwnerDetailActive, setIsOwnerDetailActive] = useState(true);
  const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);
  const [isWorkspaceFormActive, setWorkspaceFormActive] = useState(false);

  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          function: () => {
              // setIsOwnerDetailActive((current) => !current);
              setIsOwnerHistoryActive(false);
              setWorkspaceFormActive(false);
              setIsOwnerDetailActive(true);
            },
          name:"Expand Owner Details",
          icon:<FaUserCircle/>
      },
      {
        function:() => {
          // setIsOwnerHistoryActive((current) => !current);
          setIsOwnerDetailActive(false);
          setIsOwnerHistoryActive(false);
          setWorkspaceFormActive(true);
        },
          name:"My Spaces",
          icon:<FaTh fontSize={"15px"}/>
      },
      {
        function:"",
          name:"Add Spaces",
          icon:<CgPlayListAdd/>
      },
      {
        function:() => {
          // setIsOwnerHistoryActive((current) => !current);
          setIsOwnerDetailActive(false);
          setWorkspaceFormActive(false);
          setIsOwnerHistoryActive(true);
        },
          name:"Show History",
          icon:<MdHistory/>
      },
      {
        function:"/Contact",
          name:"Contact Us",
          icon:<MdOutlineConnectWithoutContact/>
      },
      {
        function:"",
          name:"Reports",
          icon:<TbFileReport/>
      },
      {
        function:"",
        name:"Log out",
        icon:<RiLogoutCircleLine />
    },
    {
      function:"showDeleteBox",
      name:"Delete Account",
      icon:<TiDelete/>
  }
  ];

  function hideDeleteBox() {
    const element = document.getElementById("deleteBox");
    element.style.display = "none";
  }

  // function showDeleteBox() {
  //   const element = document.getElementById("deleteBox");
  //   element.style.display = "flex";
  // }

  // function showODetails() {
  //   // setIsOwnerDetailActive((current) => !current);
  //   setIsOwnerHistoryActive(false);
  //   setWorkspaceFormActive(false);
  //   setIsOwnerDetailActive(true);
  // }
  // function showHODetails() {
  //   // setIsOwnerHistoryActive((current) => !current);
  //   setIsOwnerDetailActive(false);
  //   setWorkspaceFormActive(false);
  //   setIsOwnerHistoryActive(true);
  // }

  // function showOSpaces() {
  //   // setIsOwnerHistoryActive((current) => !current);
  //   setIsOwnerDetailActive(false);
  //   setIsOwnerHistoryActive(false);
  //   setWorkspaceFormActive(true);
  // }

  const handleWorkspaceCreate = (workspaceData) => {
    // Send the workspaceData to the backend API for creation
    axios
      .post('/api/workspaces', workspaceData)
      .then((response) => {
        console.log('Workspace created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating workspace:', error);
      });
  };



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
     
        <div className={`col-md-3 mt-3 pt-5 ${styles.leftcontainer}`}>
           <div style={{width: isOpen ? "210px" : "50px"}} className={`shadow ${styles.sidebar}`}>
               <div className={`${styles.topSection}`}>
                   <h1 style={{display: isOpen ? "block" : "none"}} className={`${styles.logo}`}>Your Profile</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={`${styles.bars}`}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className="profilePicture m-auto"> 
          <img
            src={require("../../../images/owner-profile.png")}
            alt="Your Picture"
            className={`m-auto w-25 ${styles.guestPic}`}
            style={{marginLeft: isOpen ? "50px" : "0px"}}
          />
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
                           style={{display: isOpen ? "block" : "none" , textDecoration:"none"}}
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

         
    
      <div className="col-md-4 middleContainer mt-3">
        <div className="historyCards mt-3">
          <div
            className="UDetails"
            style={{ display: isOwnerDetailActive ? "block" : "none" }}
          >
            <OwnerDetails />
          </div>
          <div
            className="OHistory"
            style={{ display: isOwnerHistoryActive ? "block" : "none" }}
          >
            <ShowHistoryOwner/>
          </div>

          <div
            className="OHistory"
            style={{ display: isWorkspaceFormActive ? "block" : "none" }}
          >
            <WorkspaceForm onWorkspaceCreate={handleWorkspaceCreate} />
          </div>

          
        </div>
      </div>
      </div>
    </div>
    
  );
}


    {/* <div className={"PGButtonHolder m-4"}>    


          <button
            className={"btn btn-primary  m-lg-1 PGButtons" } id="button"
            onClick={showODetails}
          >
            Expand Owner Details
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showOSpaces}
          >
            Spaces
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showOSpaces}
          >
            Add Spaces
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showHODetails}
          >
            Show History
          </button>
          <Link to={"/Contact"} className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Contact Us
          </Link>
          <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Log out
          </button>
          <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Reports
          </button>
          <button
            className={"btn btn-danger m-lg-1 PGButtons"} id="button"
            onClick={showDeleteBox}
          >
            Delete Account
          </button>
          
        </div> */}


