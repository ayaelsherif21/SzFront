import React , {useState}from 'react'
import Joi from 'joi';
import axios from 'axios';
export default function Osignup() {
    let [user,setUser]=useState({
        Name:"",
        Email:"",
        Password:"",
        Repeat_Password:"",
        Phone_Number:""
      });
      let [errorMsg , setErrorMsg] = useState("");
      let [errorList , setErrorList] = useState([]);
      let [loading , setLoading]=useState(false);
      // let isShownRepeated;
      // let isShown;
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
         "https://routeegypt.herokuapp.com/signup" ,
          user
         );
         if(data.message == "success"){
          alert("go to login");
         }
       else{
        setErrorMsg(data.message);
       }
       setLoading(false);
      }
    }
      function validateForm(){ 
    const schema=Joi.object({
      Name:Joi.string().alphanum().required().min(3).max(25),
      Email:Joi.string().required().email({tlds:{allow: ["com", "net"]}}),
      Password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),
      Repeat_Password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),
      Phone_Number:Joi.number().required() 
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
                placeholder="Enter Your First Name"
                name="Name" />
                <input
                onChange={getFormValue}
                type="text"
                className="form-control"
                placeholder="Enter Your Last Name"
                name="Name" />
            </div>
    
            {/*    email*/}
            <div className="input-group mb-3 ">
              {/* <span className="input-group-text">Email</span> */}
              <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name='Email'/>
            </div>
    
            {/*    Password*/}
            <div className="input-group mb-3">
              {/* <span className="input-group-text">Password</span> */}
              <input
                  onChange={getFormValue}
                  type="text"
                  // type={isShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Your Password"
                  name='Password'
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
                  name='Repeat_Password'
              />
            </div>
    
            {/*    Phone Number*/}
            <div className=" mb-3 ">
              {/* <label className='mb-2'>Phone Number</label> */}
              <input
               onChange={getFormValue}
                  type="Number"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  name='Phone_Number'/>
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
    

