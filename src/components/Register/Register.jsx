import React , {useState}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Joi from 'joi';
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);


export default function Register() {
  let [user,setUser]=useState({
    userName : "",
    email : "",
    password : "",
    passwordConfirmation : "",
    number : ""
  });
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);
  // let isShownRepeated;
  // let isShown;
  const navigate = useNavigate();
  function goToLogin() {
    let path = "/Login";
    navigate(path);
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
     "https://spacezone-backend.cyclic.app/api/user/signupUser" ,user);
     if(data.status == "success"){
      goToLogin();
      alert("You have been registered, Welcome!");
     }
     else{
     setErrorMsg(data.status);
   }
   setLoading(false);
  }
}
function validateForm(){ 
const schema=Joi.object({
  userName:Joi.string().required().min(3).max(25),
  email:Joi.string().required().email(),
  // {tlds:{allow: ["com", "net", "app" ,"sci","cu","edu","eg"]}}
  password: joiPassword.string().minOfLowercase(1).minOfUppercase(1).minOfNumeric(8).noWhiteSpaces()
  .required()
  .messages({
    'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
    'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
    'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
}),
  // .pattern(new RegExp('^[a-z][0-9]{3}$'))
  passwordConfirmation:joiPassword.string().minOfLowercase(1).minOfUppercase(1).minOfNumeric(8).noWhiteSpaces()
  .required(),
  // Joi.string().required().pattern(new RegExp(/[ -~]*[a-z][ -~]*/)) // at least 1 lower-case
  // .regex(/[ -~]*[A-Z][ -~]*/) // at least 1 upper-case
  // .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/) // basically: [ -~] && [^0-9a-zA-Z], at least 1 special character
  // .regex(/[ -~]*[0-9][ -~]*/) // at least 1 number
  // .min(8), 

  number:Joi.number().required().min(11).max(11).pattern(new RegExp('^01[0-2,5]{1}[0-9]{8}$')).messages({'string.pattern.base': `Phone number must have 11 digits.`})
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
    <div className="w-100 h-100vh" style={{ backgroundColor: "#e7eff6" }}>
      <div className={"container w-50 my-5 m-auto p-5 mt-9"}>
        <div>
          <div className={"Header my-3"}>
            <h1 style={{ color: "#2a4d69" }}>Welcome to the Family</h1>
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
          </div>

          <form onSubmit={submitFormData}>
            <div className="regBox">
              {/*  Name*/}
              <div className="input-group mb-3 ">
                <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="userName"
                />
              </div>

              {/*    email*/}
              <div className="input-group mb-3 ">
                <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>

              {/*    Password*/}
              <div className="input-group mb-3">
                <input
                  onChange={getFormValue}
                  type="password"
                  // type={isShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>

              {/*    Repeat password*/}
              <div className="input-group mb-3">
                <input
                  onChange={getFormValue}
                  type="password"
                  // type={isShownRepeated ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                />
              </div>

              {/*    Phone Number*/}
              <div className="input-group mb-3 ">
                {/*<label htmlFor="tel">Phone Number </label>*/}
                <input
                  onChange={getFormValue}
                  type="tel"
                  maxLength={11}
                  className="form-control"
                  placeholder="Phone Number"
                  name="number"
                />
              </div>

              {/* <div className={"justify-content-between"}>
          {/* <div className={"btn btn-primary m-lg-3"}>Sign Up</div> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Sing Up</button> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Become a partner</button>
          <button type="button" className="btn btn-secondary m-lg-3">Sign in</button> */}
            </div>
            {/* </div> */}

            <button
              className="btn px-5 float-end text-white"
              style={{ backgroundColor: "#63ace5" }}
            >
              Sing Up
              {loading ? (
                <i className="fa fa-spinner fa-spin text-white"></i>
              ) : (
                Register
              )}
            </button>

            <div className="clearfix"></div>
          </form>
        </div>
      {/* </div> */}
     
      <button className="btn px-5 float-end text-white" style={{backgroundColor :"#63ace5"
          }}>Sing Up
       {loading ? <i className='fa fa-spinner fa-spin text-white'></i> : Register}
      </button>
      <div className="clearfix"></div>
      
      
      </div>
    </div>
  );
}
