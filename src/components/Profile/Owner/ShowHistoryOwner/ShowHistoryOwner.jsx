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
    <div className={`mt-5 shadow historyCard`}
    style={{
     width: "350px",
     height: "150px",
     background:"e5e5e5",
     borderRadius: "40px 0 40px 0",
     marginTop:"10rem",

   }}>
    <HistoryCardOwner bookings={bookingsHistoryForOwner}></HistoryCardOwner>
  </div>
  );
};

export default ShowHistoryOwner;
