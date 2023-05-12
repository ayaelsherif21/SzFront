// this one when we can get data from database

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HistoryCardOwner = ({ bookings }) => {
  return (
    <Container>
      <Row>
        {bookings.map((booking, index) => (
          <Col md={4} key={index} className="mt-5">
            <p>Booker: {booking.name}</p>
            <p>Check in: {booking.date}</p>
            <p>{booking.description}</p>
            <p>cost: {booking.price}</p>
            <p>duration : {booking.duration} hours</p>
            <p>Payment : {booking.paymentMethod} L.E</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HistoryCardOwner;
