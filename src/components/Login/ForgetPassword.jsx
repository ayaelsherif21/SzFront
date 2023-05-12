import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router";
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
  email:Joi.string().required().email({tlds:{allow: ["com", "net"]}}),
});
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
    <div
      className="w-100"
      style={{
        backgroundColor: "#2a4d69",
        height: "100vh",
        position: "fixed",
        marginTop: "55px",
      }}
    >
      <div
        className={"container w-50 p-5"}
        style={{
          backgroundColor: "#fff",
          borderRadius: "25px",
          marginTop: "50px",
        }}
      >
        <div>
          <div className={"Header my-3"}>
            <h3
              style={{
                color: "#2a4d69",
              }}
            >
              Forget Password
            </h3>
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
            <div className="forgetBox">
              <div className="input-group mb-3 ">
                <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <button
                className="btn px-5 float-end text-white text-bold"
                style={{
                  backgroundColor: "#63ace5",
                }}
              >
                Submit
              </button>
              {loading ? (
                <i className="fa fa-spinner fa-spin text-white"></i>
              ) : (
                ForgetPassword
              )}
              <div className="clearfix"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
