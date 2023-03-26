import React , {useState}from 'react'
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Ologin() {
    let [user,setUser]=useState({
        email:"",
        password:"",
      });
      let [errorMsg , setErrorMsg] = useState("");
      let [errorList , setErrorList] = useState([]);
      let [loading , setLoading]=useState(false);
      // let isShownRepeated;
      // let isShown;

      const navigate = useNavigate();
      function goToHome(){
        let path='/home';
        navigate(path)
      }
      async function submitFormData(e){
       e.preventDefault();
    //    setLoading(true);
       let validationResult=validateForm();
       console.log(validationResult);
       if(validationResult.error){
        alert('Validation Error')
        setErrorList(validationResult.error.details)
        setLoading(false);
       }
       else{
         let {data} = await axios.post(
         "https://spacezone-backend.cyclic.app/api/owner/loginOwner" ,
          user
         );
         if(data.message == "success"){
            goToHome();
         }
       else{
        setErrorMsg(data.message);
       }
      setLoading(false);
      }
    }
      function validateForm(){ 
    const schema=Joi.object({
      email:Joi.string().required().email({tlds:{allow: ["com", "net"]}}),
      password:Joi.string().required(),
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
            }}>Login</h1>
            {errorMsg ? <div className='alert alert-denger p-1'>{errorMsg}</div> : ""}
            {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
          </div>
          
    <form onSubmit={submitFormData}>
          <div className="regBox">
    
            {/*    email*/}
            <div className="input-group mb-3 ">
              {/* <span className="input-group-text">Email</span> */}
              <input
                  onChange={getFormValue}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name='email'/>
            </div>
    
            {/*    Password*/}
            <div className="input-group mb-3">
              <input
                  onChange={getFormValue}
                  type="text"
                  // type={isShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Your Password"
                  name='password'
              />
              
            </div>
    
    
            {/* <div className={"justify-content-between"}>
              {/* <div className={"btn btn-primary m-lg-3"}>Sign Up</div> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Sing Up</button> */}
              {/* <button type="button" className="btn btn-secondary m-lg-3">Become a partner</button>
              <button type="button" className="btn btn-secondary m-lg-3">Sign in</button> */} 
            </div>
          {/* </div> */}
         
          <button className="btn px-5 float-end text-white text-bold" style={{backgroundColor :"#63ace5"
              }}>Login</button>
          {loading ? <i className='fa fa-spinner fa-spin text-white'></i> : Ologin}
          <div className="clearfix"></div>
          </form>
          
          </div>
        </div>
        </div>
      );
}
