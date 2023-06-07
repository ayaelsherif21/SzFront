import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css"
 
export default function ResetPassword() {
  let [user, setUser] = useState({
    password: "",
    passwordConfirmation: "",
  });
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function goToLogin(){
    let path='/Login';
    navigate(path)
  }
  async function submitFormData(e){
   e.preventDefault();
   setLoading(true);
   let validationResult=validateForm();
   console.log(validationResult);
   if(validationResult.error){
    alert('Validation Error')
    setErrorList(validationResult.error.details)
    setLoading(false);
   }
   else{
     let {data} = await axios.patch(
     "https://spacezone-backend.cyclic.app/api/user/resetPasswordUser/:Token" ,
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
  password:Joi.string().required(),
  passwordConfirmation:Joi.string().required()
});
 return schema.validate(user,{abortEarly:false});
  }


  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  

  return (
    <>
       <div className="container">
      <div className="row">
      <div className={`col-lg-12 mt-4 ${styles.LogCont}`}>
      <form className={`${styles.formMain}`} action onSubmit={submitFormData}>
      <p className={`${styles.heading}`}>Reset Password</p>
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
  <div className={`${styles.inputContainer}`}>
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className={`${styles.inputIcon}`}>
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
    <input placeholder="Password" id="show-password" className={`${styles.inputField}`} type="password" 
     onChange={getFormValue}
     name="password" />
  </div>
  <div className={`${styles.inputContainer}`}>
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className={`${styles.inputIcon}`}>
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
    <input placeholder="Confirm Password" id="show-password" className={`${styles.inputField}`} type="password" 
     onChange={getFormValue}
     name="confirm-password" />
  </div>
  <button id="button">Submit
  {loading ? (<i className="fa fa-spinner fa-spin text-white ps-2"></i>) : (ResetPassword)}</button>
</form>
</div>
</div>
    </div>
    
    </>

  );
}