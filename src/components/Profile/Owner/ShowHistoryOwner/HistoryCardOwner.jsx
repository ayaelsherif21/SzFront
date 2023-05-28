// this one when we can get data from database

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bookWs from "../../../../images/7.jpg"
const HistoryCardOwner = ({ bookings }) => {
  return (
   <div className="container">
      <div className="row">
        {bookings.map((booking, index) => ( 
          <Col md={12} key={index} className="history">
            <div className="row">
            <div className="col-lg-6">
              <img className="mt-3 w-100 h-100" src={bookWs} alt="" />
            </div>
            <div className="col-lg-6 bookContant" style={{
              fontSize:"12px",
              marginTop:"15px",
            }}>
            <span>Booker: {booking.name}</span>
            <span>Check in: {booking.date}</span>
            <span>{booking.description}</span>
            <span>cost: {booking.price}</span>
            <span>duration : {booking.duration} hours</span>
            <span>Payment : {booking.paymentMethod} L.E</span>
            </div>
            </div>
          </Col>
        ))}
        </div>
        </div>
  );
};

export default HistoryCardOwner;
