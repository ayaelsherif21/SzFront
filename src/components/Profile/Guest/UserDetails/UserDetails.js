import React from "react";
import { useState , useEffect  } from "react";
import ProfilePic from "../Profile-Male-PNG.png";
import { Form, Button, Image } from "react-bootstrap";
import styles from "./UserDetails.module.css";
import axios from 'axios';
// import { useDropzone } from "react-dropzone";
import Joi from "joi";

export default function UserDetails({ userId }) {
  // Set up initial profile data
  // const [user, setuser] = useState({
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   number: "0123456789",
  //   bio: "I love React!",
  //   profilePictureUrl: ProfilePic,
  // });
const [user, setuser] = useState({ userName: '', email: '',
 number:'' ,password:'',passwordConfirmation:'',
  profilePictureUrl:ProfilePic, gender:'male'});
  // Set up state for edit mode
  const [isEditMode, setIsEditMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [image, setImage] = useState('');
  const[fileUrl,setFileUrl]=useState(null)

  
  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setuser((prevuser) => ({
      ...prevuser,
      [name]: value,
    }));
  };

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    number: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    password: Joi.string().min(8).required(),
    passwordConfirmation: Joi.ref('password'),
  });
  // Handle form submission
  const handleSubmit = async(event) => {
    // event.preventDefault();
    // // TODO: Save profile data to server
    // setIsEditMode(false);
    event.preventDefault();
    const { error } = schema.validate(user, { abortEarly: false });
    if (error) {
      const errorMessage = error.details.map((err) => err.message).join(', ');
      setErrorMessage(errorMessage);
    // return;
    }else{
      setIsEditMode(false);
      setErrorMessage('');
      const formData = new FormData()
      formData.append('image',image)
      axios.post('url', formData).then((res)=>{
        console.log(res)
      })
    }

  

    // if (user.userName === '') {
    //   setErrorMessage('Please enter your name.');
    //   alert("Please enter your name.");
    // } else if (user.email === '') {
    //   setErrorMessage('Please enter your email.');
    //   alert('Please enter your email.');

    // } else if (user.password !== user.passwordConfirmation) {
    //   alert("Passwords do not match");
    // } 
    // else {
    //   setIsEditMode(false);
    //   setErrorMessage('');
    //   const formData = new FormData()
    //   formData.append('image',image)
    //   axios.post('url', formData).then((res)=>{
    //     console.log(res)
    //   })
    
      // axios.post("https://spacezone-backend.cyclic.app/api/user/signupUser", user)
      //   .then(response => {
      //     console.log('User data updated successfully!');
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    // }

    
  };
 
  return (
    <div className="container">  
      <div className="col-lg-3">
        <div className={`${styles.ProfilePic} mt-1`}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            className={`${styles.ProfilePic}`} src={ProfilePic}
            alt="Your Picture"
            thumbnail
          />
        </div>
      </div> 
        <div className="col-lg-8">
          <input type="file" accept="/image/*" 
             onChange={(event)=>{
              const file = event.target.files[0];
              if(file&&file.type.substring(0,5)==="image"){
                setImage(file);
              }else{
                setImage(null);
              }
             }} />
              <h4>{user.userName}</h4>
              <p>{user.email}</p>
              <p>{user.number}</p>
         </div>
         
          
        {/* </div> 
       </div> */}
      {isEditMode ? (
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="formBasicName">
            <Form.Label className={`${styles.font} m-auto mt-2 `}>Name:</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleInputChange}
              placeholder="your name"
            />
          </Form.Group>


          <Form.Group controlId="formBasicEmail">
            <Form.Label className={`${styles.font} `}>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="email"

            />
          </Form.Group>

          <Form.Group controlId="formBasicnumber">
            <Form.Label className={`${styles.font} `}>number:</Form.Label>
             <Form.Control
              type="tel"
              name="number"
              value={user.number}
              onChange={handleInputChange}
              placeholder="your phone"

            />
          </Form.Group>
          <div className="row">
          <div className="col-lg-6">
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={`${styles.font} `}>New Password:</Form.Label>
             <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="password"

            />
          </Form.Group>
          </div>
          <div className="col-lg-6">
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className={`${styles.font} `}>Confirm Password:</Form.Label>
             <Form.Control
              type="password"
              name="passwordConfirmation"
              value={user.passwordConfirmation}
              onChange={handleInputChange}
              placeholder="password Confirmation"

            />
          </Form.Group>
          <div className="button me-2 float-end my-3">
          <Button variant="primary" type="submit"  onClick={() => setIsEditMode(false)} className="me-2">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditMode(false)}>
            Cancel
          </Button>
          </div>
          </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-6">
            <Form.Group controlId="formBasicMale">
            <Form.Label className={`mt-4 ${styles.font} `}>Male:</Form.Label>
            <input type="radio" name="gender" value="male" checked={user.gender === 'male'} onChange={handleInputChange} />
          </Form.Group>
            </div>
            <div className="col-lg-6">
            <Form.Group controlId="formBasicFemale">
          <Form.Label className={`${styles.font} `}>Female:</Form.Label>
          <input type="radio" name="gender" value="female" checked={user.gender === 'female'} onChange={handleInputChange} />
          </Form.Group>
            </div>
          </div> */}
        </Form>
        
      ) : (
      <Button
        variant="primary"
        className="mt-2"
        onClick={() => setIsEditMode(true)}
      >
        Edit
      </Button>
    )} 
    </div>
  );
}


{/* <h1 className={`my-4 ${styles.profileSettings}`}></h1> */}
      {/* <div className="row"> */}
        {/* <div className="col-lg-3"> */}
          {/* <img className={`${styles.ProfilePic}`} src={user.profilePictureUrl} alt="Profile" thumbnail /> */}
          {/* <input type="file" accept="/image/*" 
             onChange={(event)=>{
              const file = event.target.files[0];
              if(file&&file.type.substring(0,5)==="image"){
                setImage(file);
              }else{
                setImage(null);
              }
             }} /> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="row">
        <div className="col-lg-8"> */}
