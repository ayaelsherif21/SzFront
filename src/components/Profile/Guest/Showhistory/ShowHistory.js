import React from "react";
import HistoryCard from "./HistoryCard";
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
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326328413_567063178637548_8872386630205463949_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1NBUA7lzQKsAX_TnzWo&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD5B7YWYz8xpDPZQ6DAq2h_ZRXi75k_IgfD_xpltjmSIw&oe=642476D0",
  },
  {
    id: 2,
    title: "Majal",
    date: "2022-02-15",
    description: "Booked flight to New York",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/46094604_1072153146279462_7101527977812295680_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LvsfI18mJ1QAX9sSVpI&_nc_ht=scontent.fcai19-6.fna&oh=00_AfB6lRttcGCSbRSSfglRC85mO6jmQtr80v5QG1eAqxiMJA&oe=6447E02C",
  },
  {
    id: 3,
    title: "Karem",
    date: "2022-03-10",
    description: "Booked car rental for Los Angeles trip",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/291277391_449184220546476_1452487417180718455_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8tSOPHLZnfYAX-W0gWh&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD4e1-T3lVn4t1-SNYAH3yfQ3NipRzZcYK6FaFw2lCAyQ&oe=64254AF0",
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
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326328413_567063178637548_8872386630205463949_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1NBUA7lzQKsAX_TnzWo&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD5B7YWYz8xpDPZQ6DAq2h_ZRXi75k_IgfD_xpltjmSIw&oe=642476D0",
  },
  {
    id: 2,
    title: "Majal",
    date: "2022-02-15",
    description: "Booked flight to New York",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/46094604_1072153146279462_7101527977812295680_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LvsfI18mJ1QAX9sSVpI&_nc_ht=scontent.fcai19-6.fna&oh=00_AfB6lRttcGCSbRSSfglRC85mO6jmQtr80v5QG1eAqxiMJA&oe=6447E02C",
  },
  {
    id: 3,
    title: "Karem",
    date: "2022-03-10",
    description: "Booked car rental for Los Angeles trip",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/291277391_449184220546476_1452487417180718455_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8tSOPHLZnfYAX-W0gWh&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD4e1-T3lVn4t1-SNYAH3yfQ3NipRzZcYK6FaFw2lCAyQ&oe=64254AF0",
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
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326328413_567063178637548_8872386630205463949_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1NBUA7lzQKsAX_TnzWo&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD5B7YWYz8xpDPZQ6DAq2h_ZRXi75k_IgfD_xpltjmSIw&oe=642476D0",
  },
  {
    id: 2,
    title: "Majal",
    date: "2022-02-15",
    description: "Booked flight to New York",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/46094604_1072153146279462_7101527977812295680_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LvsfI18mJ1QAX9sSVpI&_nc_ht=scontent.fcai19-6.fna&oh=00_AfB6lRttcGCSbRSSfglRC85mO6jmQtr80v5QG1eAqxiMJA&oe=6447E02C",
  },
  {
    id: 3,
    title: "Karem",
    date: "2022-03-10",
    description: "Booked car rental for Los Angeles trip",
    price: "500$",
    duration: "3",
    image:
      "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/291277391_449184220546476_1452487417180718455_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8tSOPHLZnfYAX-W0gWh&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD4e1-T3lVn4t1-SNYAH3yfQ3NipRzZcYK6FaFw2lCAyQ&oe=64254AF0",
  },
];

const ShowHistory = () => {
  return (
    <HistoryCard bookings={bookingHistory}></HistoryCard>
    // <div>
    //   <Row>
    //     {/*<Col>*/}
    //     {/*  <Image src={BookingPic} fluid />*/}
    //     {/*</Col>*/}
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>Booking History</Card.Title>
    //           <ul>
    //             {bookingHistory.map((booking) => (
    //               //
    //               <li key={booking.id}>
    //                 <Image
    //                   className="me-3"
    //                   style={{ height: 100, width: 100 }}
    //                   src={booking.img}
    //                   alt={"This is the history of booking " + booking.id}
    //                 />
    //                 <strong>{booking.date}</strong>: {booking.description}{" "}
    //                 {booking.price} for <span>{booking.duration}</span> Hours
    //               </li>
    //             ))}
    //           </ul>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
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
