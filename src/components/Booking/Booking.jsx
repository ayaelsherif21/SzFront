import React from 'react'
import Footer from '../Footer/Footer'
import styles from '../Booking/Booking.module.css'
import Pic from '../../images/10.jpg'
import client2 from "../../images/client-2.png";
import client3 from "../../images/client-5.png";
import { Link } from 'react-router-dom';
export default function Booking() {

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

// checkinElem.setAttribute("min", dateTomorrow);

// checkinElem.onchange = function () {
//     checkoutElem.setAttribute("min", this.value);
// }
    return (
       <>
 <div>
  <div className={`${styles.breadcrumbSection}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={`${styles.breadcrumbText}`}>
            <h2>Our Rooms</h2>
            <div className={`${styles.btOption}`}>
              <a href="./Home">Home</a>
              <span>{">"}</span>
              <span className='ms-2'>Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Section End */}
  {/* Room Details Section Begin */}
  <section className={`spad ${styles.roomDetailsSection}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className={`${styles.roomDetailsItem}`}>
            <img className={`${styles.roomDetailsImg}`} src={Pic} alt />
            <div className={`${styles.rdText}`}>
              <div className={`${styles.rdTitle}`}>
                <h3>Meeting Room</h3>
                <div className={`${styles.rdtRight}`}>
                  <div className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half_alt" />
                  </div>
                  <a href="/BB" >Booking Now</a>
                </div>
              </div>
              <h2>30$<span>/Perhour</span></h2>
              <table>
                <tbody>
                <tr>
                    <td className={`${styles.ro}`}>Seats:</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td className={`${styles.ro}`}>Size:</td>
                    <td>30 ft</td>
                  </tr>
                  <tr>
                    <td className={`${styles.ro}`}>Capacity:</td>
                    <td>Max person 20</td>
                  </tr>
                  <tr>
                    <td className={`${styles.ro}`}>Services:</td>
                    <td>Wifi, Television,...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${styles.reviews}`}>
            <h4>Reviews</h4>
            <div className={`${styles.reviewItem}`}>
              <div className={`${styles.revPic}`}>
                <img src={client2} alt />
              </div>
              <div className={`${styles.revText}`}>
                <span>27 Aug 2019</span>
                <div className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star-half_alt" />
                </div>
                <h5>Brandon Kelley</h5>
                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
                  magnam.</p>
              </div>
            </div>
            <div className={`${styles.reviewItem}`}>
              <div className={`${styles.revPic}`}>
                <img src={client3} alt />
              </div>
              <div className={`${styles.revText}`}>
                <span>27 Aug 2019</span>
                <div className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star-half_alt" />
                </div>
                <h5>Brandon Kelley</h5>
                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
                  magnam.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.reviewAdd}`}>
            <h4>Add Review</h4>
            <form action="#" className={`${styles.raForm}`}>
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name*" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="col-lg-12">
                  <div>
                    <h5>You Rating:</h5>
                    <div className="rating">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star-half_alt" />
                    </div>
                  </div>
                  <textarea placeholder="Your Review" defaultValue={""} />
                  <button type="submit">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={`shadow ${styles.roomBooking}`}>
            <h3>Your Reservation</h3>
            <form action="#">
              <div className={`${styles.checkDate}`}>
                <label htmlFor="date-in">Check In:</label>
                <input type="time" className="date-input" id="date-in" />
                <i className="icon_calendar" />
              </div>
              <div className={`${styles.checkDate}`}>
                <label htmlFor="date-out">Check Out:</label>
                <input type="time" className="date-input" id="date-out" />
                <i className="icon_calendar" />
              </div>
              <div className={`${styles.selectOption}`}>
                <label htmlFor="guest">Guests:</label>
                <select id="guest">
                  <option value>3</option>
                </select>
              </div>
              <div className={`${styles.selectOption}`}>
                <label htmlFor="room">Room:</label>
                <select id="room">
                  <option value>1 Room</option>
                </select>
              </div>
              <button type="submit"><span className='label'>Check Availability</span>
              
              <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
              </button>
            </form>
          </div>
          
        {/* <form action="reservation.php" method="post">
  <div className="elem-group">
    <label htmlFor="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Z\sa-z]{3,20}" required />
  </div>
  <div className="elem-group">
    <label htmlFor="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required />
  </div>
  <div className="elem-group">
    <label htmlFor="phone">Your Phone</label>
    <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" required />
  </div>
  <hr />
  <div className="elem-group inlined">
    <label htmlFor="adult">Adults</label>
    <input type="number" id="adult" name="total_adults" placeholder={2} min={1} required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="child">Children</label>
    <input type="number" id="child" name="total_children" placeholder={2} min={0} required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required />
  </div>
  <div className="elem-group">
    <label htmlFor="room-selection">Select Room Preference</label>
    <select id="room-selection" name="room_preference" required>
      <option value>Choose a Room from the List</option>
      <option value="connecting">Connecting</option>
      <option value="adjoining">Adjoining</option>
      <option value="adjacent">Adjacent</option>
    </select>
  </div>
  <hr />
  <div className="elem-group">
    <label htmlFor="message">Anything Else?</label>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required defaultValue={""} />
  </div>
  <button type="submit">Book The Rooms</button>
</form> */}

        </div>
      </div>
    </div>
  </section>
  {/* Room Details Section End */}
  
</div>

<Footer/>
       </>
    )
}
