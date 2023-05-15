import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css"

export default function ForgetPassword() {
  let [user, setUser] = useState({
    email: "",
  });
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function goToReset(){
    let path='/ResetPassword';
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
     let {data} = await axios.post(
     "https://spacezone-backend.cyclic.app/api/user/forgotPasswordUser" ,
      user
     );
     if(data.status == "success"){
        goToReset();
     }
   else{
    setErrorMsg(data.status);
   }
  setLoading(false);
  }
}
  function validateForm(){ 
const schema=Joi.object({
  email:Joi.string().required().email(),
});
// {tlds:{allow: ["com", "net"]}}
 return schema.validate(user,{abortEarly:false});

  function goToReset() {
    let tokenaya =
      "fa7ea1797f65991f59b9126d1a7feb34b9a01919d8316ec1b82d0669866b54ce";
    let path = "/" + { tokenaya } + "/ResetPassword";
    navigate(path);
  }

  async function submitFormData(e) {
    e.preventDefault();
    setLoading(true);
    let validationResult = validateForm();
    console.log(validationResult);
    if (validationResult.error) {
      alert("Validation Error");
      setErrorList(validationResult.error.details);
      setLoading(false);
    } else {
      let { data } = await axios.post(
        "https://spacezone-backend.cyclic.app/api/user/forgotPasswordUser",
        user
      );
      console.log(data);
      if (data.status == "success") {
        // goToReset();
      } else {
        setErrorMsg(data.status);
      }
      setLoading(false);
    }
  }

  function validateForm() {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
  <form className="form_main" action onSubmit={submitFormData}>
  <p className="heading">Forget Password</p>
  {errorMsg ? (<div className="alert alert-denger p-1 display-inline-block">{errorMsg}</div>) : ("")}
  {errorList.map((error, index) => (<div key={index} className="alert alert-danger p-2 ">{error.message}</div>))}

  <div className="inputContainer">
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
    </svg>
    <input placeholder="Email" id="email" className="inputField py-4" type="text"
    //  onChange={getFormValue}
      name="email"/>
  </div>
  <button id="button">Submit
  {loading ? (<i className="fa fa-spinner fa-spin text-white ps-2"></i>) : (ForgetPassword)}
</button>

</form>
</div>
</div>
    </div>
  );
}
  // <div
    //   className="w-100"
    //   style={{
    //     backgroundColor: "#2a4d69",
    //     height: "100vh",
    //     position: "fixed",
    //     marginTop: "55px",
    //   }}
    // >
    //   <div
    //     className={"container w-50 p-5"}
    //     style={{
    //       backgroundColor: "#fff",
    //       borderRadius: "25px",
    //       marginTop: "50px",
    //     }}
    //   >
    //     <div>
    //       <div className={"Header my-3"}>
    //         <h3
    //           style={{
    //             color: "#2a4d69",
    //           }}
    //         >
    //           Forget Password
    //         </h3>
    //         {errorMsg ? (
    //           <div className="alert alert-denger p-1">{errorMsg}</div>
    //         ) : (
    //           ""
    //         )}
    //         {errorList.map((error, index) => (
    //           <div key={index} className="alert alert-danger p-2">
    //             {error.message}
    //           </div>
    //         ))}
    //       </div>

    //       <form onSubmit={submitFormData}>
    //         <div className="forgetBox">
    //           <div className="input-group mb-3 ">
    //             <input
    //               // onChange={getFormValue}
    //               type="text"
    //               className="form-control"
    //               placeholder="Email"
    //               name="email"
    //             />
    //           </div>
    //           <button
    //             className="btn px-5 float-end text-white text-bold"
    //             style={{
    //               backgroundColor: "#63ace5",
    //             }}
    //           >
    //             Submit
    //           </button>
    //           {loading ? (
    //             <i className="fa fa-spinner fa-spin text-white"></i>
    //           ) : (
    //             ForgetPassword
    //           )}
    //           <div className="clearfix"></div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>