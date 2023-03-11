import React from "react";
import "./Profile.css";


function UserProfile() {
    let elements = ['Expand Details', 'Edit ', 'Show History', 'Contact US'];
    let data = ['Guest Name','GUESTEMAIL@EMAIL.COM', 'GUESTRANK'];




    let ProfileDetails = 'This is the details for the user for the meantime';
    return (
        // big container
        <div className="bigContainer">
        {/*    left Container*  for the long detailed guest info*/}
            <div className="leftContainer col-3">
                <div className="profilePicture mt-1">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={require('./Profile-Male-PNG.png')} alt="Your Picture" className="guestPic"/>
                </div>
                <div className="PGInfo mt-3">
                    {data.map(function (value, index, array){
                        return <div className="PGData" key={index}>{value}</div>
                    })}
                </div>
                <div className={"PGButtonHolder mt-4"}>
                    {elements.map(function(value, index) {
                        return <button className={"PGbuttons m-lg-1   btn btn-primary "} key={index}>{value}</button>
                    })}
                </div>

            </div>
            <div className="rightContainer col-10">
                <div className="historyCards mt-5">This is the historty for the guest</div>
            </div>
        {/*
        Right Container* for the history and so on
        This box should show every content of the buttons in the left box

        */}

        </div>
    );
}

export default UserProfile;