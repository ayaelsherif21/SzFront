import React , {useState}from 'react'
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "../Register/Register.css"
import "../Login/Login.css"
import RegBg from "../../images/3.jpg";

export default function Osignup() {
    let [user,setUser]=useState({
      userName : "YoussefOwner",
      password : "123456789",
      passwordConfirmation : "123456789",
      number : "01555176027",
      email : "youssefadel22022@gmail.com"

      });
      let [errorMsg , setErrorMsg] = useState("");
      let [errorList , setErrorList] = useState([]);
      let [loading , setLoading]=useState(false);
      // let isShownRepeated;
      // let isShown;

      const navigate = useNavigate();
      function goToLogin(){
        let path='/login';
        navigate(path)
      }
      async function submitFormData(e){
       e.preventDefault();
       setLoading(true);
       let validationResult=validateForm();
       console.log(validationResult);
       if(validationResult.error){
        setErrorList(validationResult.error.details)
        setLoading(false);
       }
       else{
         let {data} = await axios.post(
         "https://spacezone-backend.cyclic.app/api/owner/signupOwner" ,
          user
         );
         if(data.status == "success"){
         goToLogin();
         }
       else{
        setErrorMsg(data.status);
       }
       setLoading(false);
      }
    }
      function validateForm(){ 
    const schema=Joi.object({
      userName:Joi.string().alphanum().required().min(3).max(25),
      email:Joi.string().required().email({tlds:{allow: ["com", "net"]}}),
      password:Joi.string().required(),
      // .pattern(new RegExp('^[a-z][0-9]{3}$')),
      passwordConfirmation:Joi.string().required(),
      // .pattern(new RegExp('^[a-z][0-9]{3}$'))
      number:Joi.number().required() ,
      // Workspace_Zone:Joi.string().required()
    });
     return schema.validate(user,{abortEarly:false});
    
      }
      function getFormValue(e){
         let myUser={...user};
         myUser[e.target.name]=e.target.value;
         setUser(myUser);
         console.log(myUser);
      }
      return (
        <>
        <div
    className="bgImage"
    style={{
      backgroundImage: "url(" + RegBg + ")",
      width: "100%",
      height:"100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
  
      }}
    >
<div className="filter">      
  <div className="container">
        <div className="row">
          <div className="col-lg-12">
    <form className="formRegister " action onSubmit={submitFormData}>
    <p className="title">Register </p>
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
    <p className='text-dark middelText'>as a owner</p>
    <div className="inputContainer">
      <svg  xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
     <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
     <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
  </svg>

      
      <input placeholder="Full Name" id="userName" className="inputField" type="text" onChange={getFormValue} 
      name="userName"/>
    </div>
    <div className="inputContainer">
      <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
      </svg>
      <input placeholder="Email" id="email" className="inputField" type="text" onChange={getFormValue} name="email"/>
    </div>
    <div className="row">
<div className="col-lg-6"> 
<div className="inputContainer">
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
    <input placeholder="Password" id="password" className="inputField" type="password" 
     onChange={getFormValue}
     name="password" />
  </div>
  </div>
  <div className="col-lg-6"> 

  <div className="inputContainer">
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
    <input placeholder="Confirm Password" id="password" className="inputField" type="password" 
     onChange={getFormValue}
     name="passwordConfirmation" />
  </div>
  </div>
</div>
    <div className="inputContainer">
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
  </svg>
      <input  placeholder="Phone Number" id="tel" className="inputField" type="tel" 
       onChange={getFormValue}
       name="number" maxLength={11}/>
    </div>
    <div className="inputContainer">
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
   <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651"></path>
   <path d="M16 22l5 -5"></path>
   <path d="M21 21.5v-4.5h-4.5"></path>
</svg>
      <input  placeholder="Enter your workspace zone" id="tel" className="inputField" type="text" 
       onChange={getFormValue}
       name="workSpaceZone"/>
    </div>
    <button id="button">Sign Up
    {loading ? (<i className="fa fa-spinner fa-spin text-white ps-2"></i>) : (Osignup)}</button>
    <div className="signupContainer mt-1">
      <p className="pt-3">Already have an acount?</p>
      <a href={"/Ologin"} className="text-white text-decoration-none btnSignUp">Sign in</a>
    </div>
  </form>
  </div>
  </div>
      </div>
      </div>
      </div>
      </>
      );
    }
    
   
    

