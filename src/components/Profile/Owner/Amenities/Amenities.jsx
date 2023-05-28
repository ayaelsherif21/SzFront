import React from "react";
import { useState } from "react";
import ProfilePic from "../../../../images/client-4.png";
import { Form, Button, Image } from "react-bootstrap";
import  styless from "./Amenities.module.css"
import  styles from "../OwnerDetails/OwnerDetails.module.css"
import WorkspaceForm from "../WorkspaceForm/WorkspaceForm";
import axios from 'axios';
import Joi from 'joi';



export default function Amenities() {
//   const { joiPasswordExtendCore } = require('joi')
// const joiPassword = Joi.extend(joiPasswordExtendCore);
  
  const [user, setuser] = useState({ userName: '', email: '',
 number:'' ,password:'',passwordConfirmation:'',
  profilePictureUrl:ProfilePic});
  const [image, setImage] = useState('');
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  const [isAmenitiesActive, setisAmenitiesActive] = useState(true);


  const items = ['Projector', 'Printer, Scanner', 'Meeting room ','Common area','Cafeteria'];
  const items1 = ['Outdoor terrace','Green area','Wifi','Office supplies','Free coffee']; 
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setuser((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  // Handle form submission
   function handleSubmit (event) {
    event.preventDefault();
    setisAmenitiesActive(false);
  };
   
  
  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-12">
      </div>
      {isAmenitiesActive ? (
        <form className={`col-md-5 px-5 mt-5 ${styles.ownerForm}`} action onSubmit={handleSubmit}>
          
        <p className={`${styles.titleSetting}`}>Select Your Amenities </p>
          {errorMsg ? (
            <div className="alert alert-denger p-1">{errorMsg}</div>
          ) : (
            ""
          )}
          {errorList.map((error, index) => (
            <div key={index} className="alert alert-danger p-2">
              {error.message}
            </div>
          ))}
        {errorMsg ? (<div className="alert alert-denger p-1 display-inline-block">{errorMsg}</div>) : ("")}
        {errorList.map((error, index) => (<div key={index} className="alert alert-danger p-2 ">{error.message}</div>))}
        
      <div className="row ">
      <div className="col-lg-6"> 
      <div className={`${styles.inputSetting}`}>
          
          <div>
      {items.map((item, index) => (
        <div
        className={`row ${styles.inpField}`}
        key={index}
        style={{
          border: selectedItems.includes(item) ? '2px solid green' : '2px solid black',
          padding: '10px',
          margin: '10px',
          display: 'inline-block',
        }}
        onClick={() => handleItemClick(item)}
        >
          {selectedItems.includes(item) ?<span>&#10004;</span> : null}
          {item}
        </div>
      ))}
          </div>
        </div>
        </div>
        <div className="col-lg-6"> 
        <div className={`${styles.inputSetting}`}>
          
        <div>
      {items1.map((item, index) => (
        <div
        className={`${styles.inpField}`}
                key={index}
        style={{
          border: selectedItems.includes(item) ? '2px solid green' : '2px solid black',
          padding: '10px',
          margin: '10px',
          display: 'inline-block',
        }}
        onClick={() => handleItemClick(item)}
        >
          {selectedItems.includes(item) ?<span>&#10004;</span> : null}
          {item}
        </div>
      ))}
          </div>
        </div>
        </div>
      </div>
        
       <div className="row">
        <Button  type="submit" className={`w-50 mx-5 m-lg-3 ${styless.amaniBtn}`} onClick={() => setisAmenitiesActive(false)} id="button">
          Create Your Workspace 
        </Button>
        <Button variant="secondary" type="submit" className={`w-25 m-lg-3 border-black bg-secondary ${styless.amaniBtn}`} onClick={() => setisAmenitiesActive(false)} >
          Back
        </Button>
        </div>
      </form>
        
      ) : (
        <WorkspaceForm/>
      )}
    </div>
    </div>

  );
}
