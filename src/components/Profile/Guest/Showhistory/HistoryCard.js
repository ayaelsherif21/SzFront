// this one when we can get data from database

import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import styles from "./HistoryCard.module.css"

const HistoryCard = ({bookings}) => {
    return (
        <Container>
            <Row>
                {bookings.map((booking, index) => (
                    <Col md={3} key={index} className={`${styles.Hcard} my-3 mx-3 shadow`}>
                        <div className="overflow">
                            <div className={`${styles.HcardImgg}`}>
                            <Image
                                
                                src={booking.image}
                                alt={booking.title}
                                fluid
                                className={`w-100 ${styles.imgH}`}
                            />
                            
                            </div>
                            <div className="card-body text-dark">
                                {/* <p className="card-room"><strong>{booking.title}</strong></p> */}
                                <div class={`${styles.verticalLine}`}>
                            </div>
                                <div className={`${styles.tapp}`}>
                                
                                    <span className={`${styles.cardTitle}`}>{booking.title}
                                    </span>
                                    
                                    <span className={`float-end ${styles.priceWs}`}>
                                    {booking.price}{" "}
                                    <span
                                        className={`float-end`}
                                        style={{ fontSize: "9px", color: "gray" }}
                                    >
                                        EGP/HOUR
                                    </span>
                                    </span>
                                    <hr></hr>
                                </div>
                                <div className="card-footer">
                                    <div className="card-text text-secondary">
                                        {booking.duration}
                                    </div>
                                    <p>{booking.date}</p>
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
