import React, { useState } from 'react';
import moment from 'moment';


export default function Oprofile(props) {
  const [guestName, setGuestName] = useState('');
  const [currentBooking, setCurrentBooking] = useState(null);
  const [bookings, setBookings] = useState([]);

  function handleCheckIn() {
    if (currentBooking !== null) {
      alert('Cannot check in another guest until the current booking is checked out.');
      return;
    }

    setCurrentBooking({ guestName, checkInTime: moment() });
    setGuestName('');
  }

  function handleCheckOut() {
    if (currentBooking === null) {
      alert('Cannot check out without a current booking.');
      return;
    }

    setCurrentBooking(prevBooking => ({
      ...prevBooking,
      checkOutTime: moment(),
    }));

    setBookings(prevBookings => [...prevBookings, currentBooking]);
    setCurrentBooking(null);
  }

  function calculateWeeklyBenefit() {
    const currentWeek = moment().isoWeek();
    let benefit = 0;

    bookings.forEach(booking => {
      if (moment(booking.checkOutTime).isoWeek() === currentWeek) {
        benefit += props.benefitPerWeek;
      }
    });

    return benefit;
  }

  return (
    <div>
      <h2>{props.ownerName}</h2>
      <div>
        <label htmlFor="guest-name">Guest Name:</label>
        <input
          type="text"
          id="guest-name"
          value={guestName}
          onChange={e => setGuestName(e.target.value)}
        />
      </div>
      <button onClick={handleCheckIn}>Check In</button>
      <button onClick={handleCheckOut}>Check Out</button>
      <p>Weekly Benefit: {calculateWeeklyBenefit()}</p>
    </div>
  );
}


