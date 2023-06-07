import React from "react";
import HistoryCard from "./HistoryCard";
import img1 from "../../../../images/4.jpg"

const bookingHistory = [

    {
        id: 1,
        title: "El Door El tany",
        date: "2022-01-01",
        description: "Booked hotel room in Paris",
        price: "500",
        duration: "3",
        paymentMethod: "cash",

        // image: require("../Profile-Male-PNG.png"),
        image:
        img1,
    },
    {
        id: 2,
        title: "Majal",
        date: "2022-02-15",
        description: "Booked flight to New York",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 3,
        title: "Karem",
        date: "2022-03-10",
        description: "Booked car rental for Los Angeles trip",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 1,
        title: "El Door El tany",
        date: "2022-01-01",
        description: "Booked hotel room in Paris",
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
        description: "Booked flight to New York",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 3,
        title: "Karem",
        date: "2022-03-10",
        description: "Booked car rental for Los Angeles trip",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 1,
        title: "El Door El tany",
        date: "2022-01-01",
        description: "Booked hotel room in Paris",
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
        description: "Booked flight to New York",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
    {
        id: 3,
        title: "Karem",
        date: "2022-03-10",
        description: "Booked car rental for Los Angeles trip",
        price: "500$",
        duration: "3",
        image:
        img1,
    },
];

const ShowHistory = () => {
    return (
        <HistoryCard bookings={bookingHistory}></HistoryCard>
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
