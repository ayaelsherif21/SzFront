import React , {useState}from 'react'
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router';

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
        <div className='w-100 h-100vh' style={{backgroundColor :"#e7eff6"
      }}>
        <div className={"container w-50 my-5 m-auto p-5 mt-9"} >
          <div>
          <div className={"Header my-3"}>
            <h1 style={{color :"#2a4d69"
            }}>Welcome to the Family</h1>
            {errorMsg ? <div className='alert alert-denger p-1'>{errorMsg}</div> : ""}
            {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
          </div>
          
    <form onSubmit={submitFormData}>
          <div className="regBox">
            {/*  Name*/}
            <div className="input-group mb-3 ">
              {/* <span className="input-group-text">Name</span> */}
              <input
                onChange={getFormValue}
                type="text"
                className=" me-3 form-control"
                placeholder="Name"
                name="userName" />
                {/* <input
                onChange={getFormValue}
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="Name" /> */}
            </div>
    
            {/*    email*/}
            <div className="input-group mb-3 ">
              {/* <span className="input-group-text">Email</span> */}
              <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name='email'/>
            </div>
    
            {/*    Password*/}
            <div className="input-group mb-3">
              {/* <span className="input-group-text">Password</span> */}
              <input
                  onChange={getFormValue}
                  type="text"
                  // type={isShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  name='password'
              />
            </div>
    
            {/*    Repeat password*/}
            <div className="input-group mb-3">
              {/* <span className="input-group-text">Repeat Password</span> */}
              <input
               onChange={getFormValue}
                  type="text"
                  // type={isShownRepeated ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm Password"
                  name='passwordConfirmation'
              />
            </div>
    
            {/*    Phone Number*/}
            <div className=" mb-3 ">
              {/* <label className='mb-2'>Phone Number</label> */}
              <input
               onChange={getFormValue}
                  type="Number"
                  className="form-control"
                  placeholder="Phone Number"
                  name='number'/>
            </div>
            <div className=" mb-3 ">
              {/* <label className='mb-2'>Phone Number</label> */}
              {/* <input
               onChange={getFormValue}
                  type="Number"
                  className="form-control"
                  placeholder="Workspace Zone"
                  name='Workspace_Zone'/> */}
            </div>
    
            {/* <div className={"justify-content-between"}>
              {/* <div className={"btn btn-primary m-lg-3"}>Sign Up</div> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Sing Up</button> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Become a partner</button>
              <button type="button" className="btn btn-secondary m-lg-3">Sign in</button> */} 
            </div>
          {/* </div> */}
         
          <button className="btn px-5 float-end text-white text-bold" style={{backgroundColor :"#63ace5"
              }}>Sing Up</button>
          {loading ? <i className='fa fa-spinner fa-spin text-white'></i> : Osignup}
          <div className="clearfix"></div>
          </form>
          
          </div>
        </div>
        </div>
      );
    }
    
    // export default Register;
    

