import React, {useEffect, useState} from "react";
import Joi from "joi";
import axios from '../../api/axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import LoginBg from "../../images/11.jpg";
import jwtDecode from "jwt-decode";
import styles from "./Login.module.css";

export default function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [errorMsg, setErrorMsg] = useState("");
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);
  const [userId, setUserId]= useState(null);

  // let isShownRepeated;
  // let isShown;

  const navigate = useNavigate();

  function goToHome() {
    let path = "/Home";
    navigate(path);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId);
    }
  }, []);
  async function submitFormData(e) {
    e.preventDefault();
    // setErrorMsg(Errors(user));
    setLoading(true);
    let validationResult = validateForm();
    console.log(validationResult);
    if (validationResult.error) {
      alert("Validation Error");
      setErrorList(validationResult.error.details)
      setLoading(false);
    }
    else {
      let data = await axios.post(
        "/api/user/loginUser",
        user,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      ).then((e) => {
        alert(`Logging in Welcome ${e.data.data.user.userName}`);
        goToHome()
        const { user } = e.data.data;
        console.log(user);
        window.sessionStorage.setItem("userName", user.userName);
        window.sessionStorage.setItem("userEmail",user.email );
        window.sessionStorage.setItem("userPhone",user.number );
        window.sessionStorage.setItem("userRole", user.role);
        // window.sessionStorage.setItem('token', e.data.token);
        Cookies.set("token", e.data.token);     
        axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`; // this is how you send token in the Authorization as a header
        const decodedToken = jwtDecode(e.data.token);
        setUserId(decodedToken.userId);
        // console.log(sessionStorage.getItem("token"))
        // this is how you get the token every time as it is stored in sessionStorage
        // console.log(e.data.data._id)
        // console.log(decodedToken);

      }).catch((err)=>{
        alert(err.message)
        setLoading(false);
      })
      setLoading(false);
    }
  }
  function validateForm() {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }
  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  return (
    <>
    <div
      className="w-100 h-100vh"
      style={{
        backgroundImage: "url(" + LoginBg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
<div className={`${styles.filterLogin}`}>

    <div className="container">
      <div className="row">
        <div className={`col-lg-12 ${styles.LogCont}`}>
  <form className={`${styles.formMain}`} action onSubmit={submitFormData}>
  <p className={`${styles.heading}`}>Login</p>
  {errorMsg ? (<p className="text-danger display-inline-block">{errorMsg}</p>) : ("")}
  {errorList.map((error, index) => (<p key={index} className=" text-danger ">{error.message}</p>))}
  <p className={`${styles.middelText} text-dark`}>as a guest</p>
  <div className={`${styles.inputContainer}`}>
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className={`${styles.inputIcon}`}>
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
    </svg>
    <input placeholder="Email" id="email" className={`${styles.inputField}`}
    type="text" onChange={getFormValue}
    name="email"
    // onKeyUp={() =>{
    //   trigger("email")
    // }
    // } 
    />
  </div>
{errorMsg.email && ( <small className="text-danger">{errorMsg.email.message}</small>)}
<div className={`${styles.inputContainer}`}>
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className={`${styles.inputIcon}`}>
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
    <input placeholder="Password" id="show-password" className={`${styles.inputField}`} type="password" 
     onChange={getFormValue}
     name="password" />
  </div>
  {/* <small className="text-danger text-start">Password is required</small> */}

  <button id="button" className={`${styles.LastBtn}`}>Login
  {loading ? (<i className="fa fa-spinner fa-spin text-white ps-2"></i>) : (Login)}
</button>
  <div className={`${styles.ForgetPassword} text-end mt-2`}>
   <a href={"/ForgetPassword"} className="text-dark text-decoration-none">Forgot Password?</a>
  </div>
  <div className={`mt-2 ${styles.signupContainer}`}>
    <p className="pt-3">Don't have any account?</p>
    <a href={"/Register"} className={`${styles.btnSignUp}`}>Sign up</a>
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
