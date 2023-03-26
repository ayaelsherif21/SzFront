import React from "react";
import { useState } from "react";
import ProfilePic from "../Profile-Male-PNG.png";
import { Form, Button, Image } from "react-bootstrap";
import "./UserDetails.css";
import UserProfile from "../userProfile";
export default function UserDetails() {
  // Set up initial profile data
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "0123456789",
    bio: "I love React!",
    profilePictureUrl: ProfilePic,
  });

  // Set up state for edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save profile data to server
    setIsEditMode(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Profile Settings</h1>
      <div className="row">
        <div className="col-lg-4">
          <Image src={profileData.profilePictureUrl} alt="Profile" thumbnail />
        </div>
        <div className="col-lg-8">
          <h2>{profileData.name}</h2>
          <p>{profileData.email}</p>
          <p>{profileData.phone}</p>
          <p>{profileData.bio}</p>
        </div>
      </div>
      {isEditMode ? (
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicBio">
            <Form.Label>Bio:</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mr-2 m-lg-3">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditMode(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <Button
          variant="primary"
          className="mt-4"
          onClick={() => setIsEditMode(true)}
        >
          Edit
        </Button>
      )}
    </div>
  );
}
