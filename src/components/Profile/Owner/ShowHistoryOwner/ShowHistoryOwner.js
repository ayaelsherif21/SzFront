import React from "react";
import HistoryCardOwner from "./HistoryCardOwner";

const ShowHistoryOwner = () => {
  let bookingsHistoryForOwner = [
    {
      id: 1,
      name: "Guest Name",
      date: "2023-01-01",
      description: "The name, and the type of the booked property",
      price: "100",
      duration: "3",
      paymentMethod: "cash",
    },
  ];
  return (
    <HistoryCardOwner bookings={bookingsHistoryForOwner}></HistoryCardOwner>
  );
};

export default ShowHistoryOwner;
