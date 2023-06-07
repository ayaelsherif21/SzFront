// this one when we can get data from database

import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

const HistoryCard = ({bookings}) => {
    return (
        <Container>
            <Row>
                {bookings.map((booking, index) => (
                    <Col md={4} key={index} className="mt-5 card text-left shadow">
                        <div className="overflow">
                            <Image
                                style={{height: 100, width: 100}}
                                src={booking.image}
                                alt={booking.title}
                                fluid
                                className={"card-img-top"}
                            />
                            <div className="card-body text-dark">
                                <p className="card-room"><strong>{booking.title}</strong></p>
                                <div className="card-footer">
                                    <div className="card-text text-secondary">
                                        {booking.duration}
                                    </div>
                                    <div className="price"> {booking.price} EGP </div>
                                    <p>{booking.date}</p>
                                    <p>{booking.description}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HistoryCard;
