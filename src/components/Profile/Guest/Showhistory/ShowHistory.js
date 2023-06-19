import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios"
import HistoryCard from "./HistoryCard";
import Cookies from "js-cookie";
import img1 from "../../../../images/4.jpg"
import Logo from "../../../../images/SpaceZone.svg";
import "./ShowHistory.css"
const bookingHistoryCard = [
    {
        id: 1,
        title: "El Door El tany",
        date: "2022-01-01",
        price: "500$",
        duration: "3",
        // image: require("../Profile-Male-PNG.png"),
        image:
        img1,
    },
    {
        id: 2,
        title: "Majal",
        date: "2022-02-15",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 3,
        title: "Karem",
        date: "2022-03-10",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    
];

const ShowHistory = () => {
    const [pendingBookings, setPendingBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [HisData, setHisData] = useState([]);

//
useEffect(() => {
    axios.get("api/user/getMyBookings", {headers: {Authorization: `Bearer ${Cookies.get("token")}`}}).then((e) => {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
        setHisData(e.data.data)
        console.log(HisData);
        {
           
            console.log( Cookies.getItem("token"))
        }
    });
}, [])

    return (
       <div> 
        <div>
            <p className="BookingTitle">Upcoming</p>
                {/* {upcomingBookings.length === 0 ? (
                    <div className="noBook" >
                        <img src={Logo} alt="Space Logo" className="imgBo"/>
                       <p>You have no upcoming bookings</p>
                    </div>
        ) : ( */}
            <HistoryCard bookings={bookingHistoryCard}></HistoryCard>
        {/* )} */}
            <hr></hr>
        </div>
        <div>
        <p className="BookingTitle">Pending </p>
                {pendingBookings.length === 0 ? (
            <div className="noBook" >
                <img src={Logo} alt="Space Logo" className="imgBo"/>
                <p>You have no pending bookings</p>
            </div>
        ) : (
            // <ul>
            // {pendingBookings.map((booking) => (
            //     <li key={booking.id}>
            //     Room: {booking.room}
            //     <br />
            //     Date: {booking.date}
            //     <br />
            //     Time: {booking.time}
            //     </li>
            // ))}
            // </ul>
            <HistoryCard bookings={bookingHistoryCard}></HistoryCard>
        )}
             {/* <HistoryCard bookings={bookingHistoryCard}></HistoryCard> */}
            <hr></hr>
        </div>
        <div>
            <p className="BookingTitle">History</p>
            {/* <HistoryCard bookings={bookingHistoryCard}></HistoryCard> */}
                {bookingHistory.length === 0 ? (
            <div className="noBook" >
                <img src={Logo} alt="Space Logo" className="imgBo"/>
                <p>You have no booking bookings</p>
            </div>
        ) : (
            // <ul>
            // {bookingHistory.map((booking) => (
            //     <li key={booking.id}>
            //     Room: {booking.room}
            //     <br />
            //     Date: {booking.date}
            //     <br />
            //     Time: {booking.time}
            //     </li>
            // ))}
            // </ul>
            <HistoryCard bookings={bookingHistoryCard}></HistoryCard>
        )}
        </div>
    </div>
    );
};

export default ShowHistory;

// this one when we can get data from database
//
// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
//
// const ShowHistory = ({ bookings }) => {
//
//   return (
//     <Container>
//       <Row>
//         {bookings.map((booking, index) => (
//           <Col md={4} key={index}>
//             <Image src={booking.image} alt={booking.title} fluid />
//             <p>{booking.title}</p>
//             <p>{booking.date}</p>
//             <p>{booking.description}</p>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };
//
// export default ShowHistory;
