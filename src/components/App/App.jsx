import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Recommendation from "../Recommendation/Recommendation";
import Services from "../Services/Services";
import UserProfile from "../Profile/Guest/userProfile";
import OwnerProfile from "../Profile/Owner/ownerProfile";
import Osignup from "../Owner/Osignup";
import Ologin from "../Owner/Ologin";
import ResetPassword from "../Login/ResetPassword";
import ForgetPassword from "../Login/ForgetPassword";
import "./App.css";
import WorkSpace from "../ourWorkSpaces/WorkSpace";
// import Cards from "../Recommendation/Cards/Cards";
import MeetingRoom from "../ourWorkSpaces/Rooms/MeetingRoom/MeetingRoom";
import { useEffect, useState } from "react";
import Room from "../ourWorkSpaces/Room";
import jwtDecode from "jwt-decode";
import Booking from "../Booking/Booking";
import Payment from "../Booking/Payment";
import BB from "../Booking/BB";

//className="App"
function App() {

  let [loginData, setLoginData]=useState(null);
  function setUserData(){
    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);
    setLoginData(decoded);
    // console.log(loginData)
  }
  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      setUserData()
    }
  },[])
  return (
    <>
      
      <Navbar loginData={loginData} />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Services" element={<Services />}></Route>
          <Route path="MeetingRoom" element={<MeetingRoom/>}/>
          <Route path="Workspace/:spaceId" element={<WorkSpace />}></Route>
          <Route path='/Room/:id' element={<Room />}></Route>
          <Route
            path="Booking/:spaceId/:index/:roomId"
            element={<Booking />}
          ></Route>
          <Route
            path="Booking/SharedArea/:spaceId"
            element={<Booking />}
          ></Route>
          <Route
            path="Booking/SilentRoom/:spaceId"
            element={<Booking />}
          ></Route>
          {/* <Route path="Booking" element={<Booking />}></Route> */}
          <Route path="BB" element={<BB/>}></Route>
          <Route path="Payment" element={<Payment/>}></Route>
          <Route path="Recommendation" element={<Recommendation />}></Route>
          {/* <Route path="Cards" element={<Cards />}></Route> */}
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Login" element={<Login setUserData ={setUserData}/>}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="/ResetPassword" element={<ResetPassword />}></Route>
          <Route path="ForgetPassword" element={<ForgetPassword />}></Route>
          <Route path="UserProfile/" element={<UserProfile />}>
            {" "}
          </Route>
          <Route path="OwnerProfile" element={<OwnerProfile />}></Route>
          <Route path="Osignup" element={<Osignup />}></Route>
          <Route path="Ologin" element={<Ologin />}></Route>
          {/* <Route path={":ownerId/addSpace"} element={<WorkspaceForm />}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      {/*<Footer />*/}
    </>
  );
}

export default App;
