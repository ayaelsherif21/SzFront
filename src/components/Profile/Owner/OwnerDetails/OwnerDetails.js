import React from "react";
import { useState } from "react";
import ProfilePic from "../../../../images/client-4.png";
import { Form, Button, Image } from "react-bootstrap";
import  "./OwnerDetails.module.css";
import axios from 'axios';
import Joi from 'joi';



export default function OwnerDetails() {
//   const { joiPasswordExtendCore } = require('joi')
// const joiPassword = Joi.extend(joiPasswordExtendCore);
  
  const [user, setuser] = useState({ userName: '', email: '',
 number:'' ,password:'',passwordConfirmation:'',
  profilePictureUrl:ProfilePic});
  const [image, setImage] = useState('');
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  const [isOwnerEditMode, setIsOwnerEditMode] = useState(true);

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
    setIsOwnerEditMode(false);
  //   let validationResult=validateForm();
  //   console.log(validationResult);
  //   if(validationResult.error){
  //    setErrorList(validationResult.error.details)
  //   }
  //   else{
  //     let {data} = await axios.post(
  //     "url" ,user);
  //     if(data.status == "success"){
  //      alert("You have been registered, Welcome!");
  //     }
  //     else{
  //     setErrorMsg(data.status);
  //   }
  //  }
  };
    // function validateForm(){ 
    //   const schema=Joi.object({
    //     userName:Joi.string().required().min(3).max(25),
    //     email:Joi.string().required().email(),
    //     // {tlds:{allow: ["com", "net", "app" ,"sci","cu","edu","eg"]}}
    //     password: joiPassword.string().minOfLowercase(1).minOfUppercase(1).minOfNumeric(8).noWhiteSpaces()
    //     .required()
    //     .messages({
    //       'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
    //       'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
    //       'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
    //   }),
    //     // .pattern(new RegExp('^[a-z][0-9]{3}$'))
    //     passwordConfirmation:joiPassword.string().minOfLowercase(1).minOfUppercase(1).minOfNumeric(8).noWhiteSpaces()
    //     .required(),
    //     number:Joi.number().required().min(11).max(11).pattern(new RegExp('^01[0-2,5]{1}[0-9]{8}$')).messages({'string.pattern.base': `Phone number must have 11 digits.`})
    //   });
    //   return schema.validate(user,{abortEarly:false});
      
    // }

  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-12">

        {/* <div className={`${styles.ProfilePic} mt-1`}>
          <img
            src={ProfilePic}
            alt="Profile"
            thumbnail
          />
        </div>
        <div className="col-lg-8">
          <input type="file" accept="/image/*" 
             onChange={(event)=>{
              const file = event.target.files[0];
              if(file&&file.type.substring(0,5)==="image"){
                setImage(file);
              }else{
                setImage(null);
              }
             }} />
              <h4>{user.userName}</h4>
              <p>{user.email}</p>
              <p>{user.number}</p>
         </div> */}
        {/* <div className="col-lg-8">
          <h2>{OwnerProfileData.name}</h2>
          <p>{OwnerProfileData.email}</p>
          <p>{OwnerProfileData.phone}</p>
          <p>{OwnerProfileData.bio}</p>
        </div> */}
      </div>
      
      {/* {isOwnerEditMode ? ( */}
        <form className="formRegister " action onSubmit={handleSubmit}>
        <p className="title">Profile Settings </p>
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
        <div className="inputContainer">
        <svg  xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
           <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
           <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
          
          <input placeholder="Full Name" id="userName" className="inputField" type="text" onChange={handleInputChange} 
          name="userName"/>
        </div>
        <div className="inputContainer">
         <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
        </svg>
          <input  placeholder="Phone Number" id="tel" className="inputField" type="tel" 
           onChange={handleInputChange}
           name="number" maxLength={11}/>
        </div>
        <div className="inputContainer">
          <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          <input placeholder="Email" id="email" className="inputField" type="text" onChange={handleInputChange} name="email"/>
        </div>
      <div className="row ">
      <div className="col-lg-6"> 
      <div className="inputContainer">
          <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input placeholder="Password" id="password" className="inputField" type="password" 
           onChange={handleInputChange}
           name="password" />
        </div>
        </div>
        <div className="col-lg-6"> 
        <div className="inputContainer">
          <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input placeholder="Confirm Password" id="password" className="inputField" type="password" 
           onChange={handleInputChange}
           name="passwordConfirmation" />
        </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
          <Button variant="primary" type="submit" className="mr-2 " onClick={() => setIsOwnerEditMode(false)} id="button">
          Save
        </Button>
        </div>
        <div className="col-lg-4">
        <Button variant="secondary" onClick={() => setIsOwnerEditMode(false)} id="button" className="border-black bg-secondary">
          Cancel
        </Button>
          </div>
        </div>
      </div>
       
      </form>
        
      {/* ) : (
        <Button
          variant="primary"
          className="m-3"
          onClick={() => setIsOwnerEditMode(true)}
        >
          Edit
        </Button>
      )} */}
    </div>
    </div>

  );
}
