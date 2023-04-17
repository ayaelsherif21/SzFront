// this one when we can get data from database

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HistoryCard = ({ bookings }) => {
  return (
    <Container>
      <Row>
        {bookings.map((booking, index) => (
          <Col md={4} key={index} className="mt-5">
            <Image
              style={{ height: 100, width: 100 }}
              src={booking.image}
              alt={booking.title}
              fluid
            />
            <p>{booking.title}</p>
            <p>{booking.date}</p>
            <p>{booking.description}</p>
            <p>cost: {booking.price}</p>
            <p>duration : {booking.duration} hours</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HistoryCard;
