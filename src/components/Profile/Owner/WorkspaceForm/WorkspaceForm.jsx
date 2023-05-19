// import React, { useState } from 'react';
// import { Form, Button, Image } from "react-bootstrap";


// function WorkspaceForm() {
//   const [name, setName] = useState('');
//   const [space, setSpace] = useState({ spaceName: '', description: ''});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // onSubmit({ name, description });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSpace((prevuser) => ({
//       ...prevuser,
//       [name]: value,
//     }));
//   };
// //onChange={(e) => setName(e.target.value)}
//   return (
//     <form onSubmit={handleSubmit}>
//        <Form.Group controlId="formBasicName">
//             <Form.Label>Name:</Form.Label>
//             <Form.Control
//               type="text"
//               name="spaceName"
//               value={space.spaceName}
//               onChange={handleChange}

//             />
//           </Form.Group>
//       <label>
//         Description:
//         <textarea value={space.description} onChange={handleChange} />
//       </label>
//       <button type="submit">Add Workspace</button>
//     </form>
//   );
// }

// export default WorkspaceForm;


import React, { useState, useRef } from 'react';
import { Form, Button, Image } from "react-bootstrap";
import axios from '../../../../api/axios';
import './WorkspaceForm.css'
import Amenities from '../Amenities/Amenities';

const WorkspaceForm = ({ onWorkspaceCreate }) => {
  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    description: '',
    privacy: '',
    city:'',
    StreetName:'',
    BUildingName:'',
    additionalDirection:'',
  });
  const [isAmenitiesActive, setAmenitiesActive] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const fileInputRef = useRef(null);
  const handleUpload = () => {
    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    if (file) {
    formData.append('image', file);
  
    axios
      .post('/upload-url', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        // Handle successful upload
        console.log('Image uploaded!', response.data);
      })
      .catch(error => {
        // Handle upload error
        console.error('Error uploading image:', error);
      });
    }
  };
  const handleSelectFile = () => {
    fileInputRef.current.click();
  };
 

 function showAmenities(){
  setAmenitiesActive(true);
 }

  const handleInputChange = (e) => {
    setWorkspaceData({
      ...workspaceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the callback function passed as a prop to handle workspace creation
    onWorkspaceCreate(workspaceData);
    // Clear the form inputs
    setWorkspaceData({
      name: '',
      description: '',
      privacy: '',
      number:'',
    });
  };

  
  return (
    <div>
     
    {/* <form onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicName">
            <Form.Label>Workspace Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={workspaceData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description:</Form.Label>
            <textarea
              name="description"
              value={workspaceData.description}
              onChange={handleInputChange}
            />
          </Form.Group>

         <Form.Group controlId="formBasicDescription">
            <Form.Label>Privacy:</Form.Label>
            <select
              name="privacy"
              value={workspaceData.privacy}
              onChange={handleInputChange}
            >
              <option value="">Select Privacy</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </Form.Group>
      <Button variant="primary" type="submit" className=" m-lg-3" style={{ backgroundColor:"#4b86b4" }}>Create Workspace</Button>
    </form> */}
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
   {showForm?(
    <form className="formRegister "  onSubmit={handleSubmit}>
     <p className="title">Workspace Info </p>
     <input type="file" ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUpload} />
      <button onClick={handleSelectFile}>Upload</button>
    {/* {errorMsg ? (
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
  {errorList.map((error, index) => (<div key={index} className="alert alert-danger p-2 ">{error.message}</div>))} */}
  <div className="inputContainer">
  <svg  xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
     <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
     <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
  </svg>
    <input placeholder="Name" id="name" className="inputField" type="text" value={workspaceData.name}
     onChange={handleInputChange} name="name" 
    />
  </div>

  <div className="inputContainer">
   <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-black icon icon-tabler icon-tabler-user-circle inputIcon" width="24" height="24" viewBox="0 0 35 35" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
  </svg>
    <input  placeholder="Phone Number" id="tel" className="inputField" type="tel" 
     value={workspaceData.number} onChange={handleInputChange}
     name="number" maxLength={11}/>
  </div>
  
   <div className="row ">
    <div className="col-lg-12"> 
     <div className="inputContainer">
        <textarea
              className="inputFieldd"
              placeholder="Description"
              name="description"
              value={workspaceData.description}
              onChange={handleInputChange}
            />
      </div>
    </div>

    <div className="col-lg-6"> 
      <div className="inputContainer">
       <select
         className="iinputField"
          name="privacy"
          value={workspaceData.city}
          onChange={handleInputChange}
        >
          <option value="">City</option>
          <option value="public">Doki</option>
          <option value="private">Giza</option>
        </select>
      </div>
    </div>
    <div className="col-lg-6"> 
      <div className="inputContainer">
      <input placeholder="Street name"  className="iinputField"
       type="text" value={workspaceData.StreetName}
     onChange={handleInputChange} 
    name="StreetName"/>
      </div>
    </div>
    <div className="col-lg-6"> 
      <div className="inputContainer">
      <input placeholder="Building name" className="iinputField"
       type="text" value={workspaceData.BUildingName}
     onChange={handleInputChange} 
    name="BUildingName"/>
      </div>
    </div>

    <div className="col-lg-6"> 
      <div className="inputContainer">
      <input placeholder="Additional Direction" className="iinputField"
       type="text" value={workspaceData.additionalDirection}
     onChange={handleInputChange} 
    name="additionalDirection"/>
      </div>
    </div>
    </div>
  
      <button id="button" onClick={() => setShowForm(false)}>Save and Next
      </button>
    </form>
   ):( <Amenities/>
   )}
    </div>
    
    </div>
    </div>
    </div>
    // </div>
  );
};

export default WorkspaceForm;
