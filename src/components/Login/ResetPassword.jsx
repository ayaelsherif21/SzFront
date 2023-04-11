import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ResetPassword() {
  let [user,setUser]=useState({
    password:"",
    passwordConfirmation:""
  });
  let [errorMsg , setErrorMsg] = useState("");
  let [errorList , setErrorList] = useState([]);
  let [loading , setLoading]=useState(false);


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
  function getFormValue(e){
     let myUser={...user};
     myUser[e.target.name]=e.target.value;
     setUser(myUser);
     console.log(myUser);
  }
  return (
    <div className='w-100' style={{backgroundColor :"#2a4d69",
    height:"100vh",
    position:"fixed",
    marginTop:"55px"
   
      }}>
        <div className={"container w-50 my-5 m-auto p-5 mt-20"} style={{backgroundColor :"#fff",
        borderRadius:"25px",
       
        }} >
          <div>
          <div className={"Header my-3"}>
            <h3 style={{color :"#2a4d69"
            }}>Reset Password</h3>
            {errorMsg ? <div className='alert alert-denger p-1'>{errorMsg}</div> : ""}
            {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
          </div>
          
    <form onSubmit={submitFormData}>
          <div className="resetBox">
    
            {/*    Password*/}
            <div className="input-group mb-3">
              <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="New Password"
                  name='password'
              />
              
            </div>
            <div className="input-group mb-3">
              <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                  name='passwordConfirmation'
              />
            </div>
    
          <button className="btn px-5 float-end text-white text-bold" style={{backgroundColor :"#63ace5"
              }}>Submit</button>
          {loading ? <i className='fa fa-spinner fa-spin text-white'></i> : ResetPassword}
          <div className="clearfix"></div>
    </div>
          </form>
          
          </div>
        </div>
        </div>
  );
}
