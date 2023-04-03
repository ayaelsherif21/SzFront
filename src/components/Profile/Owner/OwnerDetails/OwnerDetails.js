import React from "react";
import { useState } from "react";
import ProfilePic from "../../../../images/owner-profile.png";
import { Form, Button, Image } from "react-bootstrap";
import "./OwnerDetails.css";
export default function OwnerDetails() {
  // Set up initial profile data
  const [OwnerProfileData, setOwnerProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "0123456789",
    bio: "I love React!",
    profilePictureUrl: ProfilePic,
  });

  // Set up state for edit mode
  const [isOwnerEditMode, setIsOwnerEditMode] = useState(false);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOwnerProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save profile data to server
    setIsOwnerEditMode(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Profile Settings</h1>
      <div className="row">
        <div className="col-lg-4">
          <Image
            src={OwnerProfileData.profilePictureUrl}
            alt="Profile"
            thumbnail
          />
        </div>
        <div className="col-lg-8">
          <h2>{OwnerProfileData.name}</h2>
          <p>{OwnerProfileData.email}</p>
          <p>{OwnerProfileData.phone}</p>
          <p>{OwnerProfileData.bio}</p>
        </div>
      </div>
      {isOwnerEditMode ? (
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={OwnerProfileData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              value={OwnerProfileData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={OwnerProfileData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicBio">
            <Form.Label>Bio:</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={OwnerProfileData.bio}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mr-2 m-lg-3">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsOwnerEditMode(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <Button
          variant="primary"
          className="mt-4"
          onClick={() => setIsOwnerEditMode(true)}
        >
          Edit
        </Button>
      )}
    </div>
  );
}
