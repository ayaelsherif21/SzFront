import React, { useState } from 'react'
import styles from "../Booking/BB.module.css"
import Payment from './Payment'
import { Link } from 'react-router-dom'
import { differenceInHours, getTime } from 'date-fns';

export default function BB() {
  const [checkIn , setCheckIn] =useState('');
  const [checkOut , setCheckOut] =useState('');
  const [numOfSeats , setNumOfSeats] =useState(1);
  const [phone , setphone] =useState('');


  let numberOfHours =0;
  if(checkIn && checkOut){
    numberOfHours = differenceInHours(new getTime(checkIn)  ,new getTime(checkOut))
  }
  
  function BookThisRoom(){
  const data ={
  checkIn , checkOut , numOfSeats , phone};
}
//and here will put the api 
  


 
  return (
    <>
    	<div id="booking" className={`mt-3 ${styles.section}`}>
  <div className={`${styles.sectionCenter}`}>
    <div className="container">
      <div className="row">
        <div className={`${styles.bookingForm}`}>
          <div className={`${styles.bookingBg}`}>
            <div className={`${styles.formHeader}`}>
              <h2>Make your reservation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
            </div>
          </div>
          <form>
        
                {/* <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel} pe-2`}>Enter your phone</span>
                  <input className={`w-75 ${styles.formControl}`} type="number" min="0" max="11" required />
                </div> */}
            <div className="row">
              <div className="col-md-6">
                <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel}`}>Start From</span>
                  <input className={`${styles.formControl}`} type="time" required 
                  value={checkIn} onChange={ev => setCheckIn(ev.target.value)}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel}`}>End in</span>
                  <input className={`${styles.formControl}`} type="time"  required 
                  value={checkOut} onChange={ev => setCheckOut(ev.target.value)}/>
                </div>
              </div>
            </div>
            
            <div className="row">
                <div className="col-md-9">
            <div className={` ${styles.formGroup}`}>
              <span className={`${styles.formLabel}`}>Room Type</span>
              <select className={`w-100 ${styles.formControl}`} required>
              <span className={`${styles.selectArrow}`} />
                <option value selected hidden>Select room type -</option>
                <option>Meeting Room </option>
                <option>Training/Courses Room </option>
                <option>Silent Room </option>
                <option>Shared Area</option>
              </select>
           
            </div>
            </div>
            <div className="col-md-2">
                <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel}`}>Seats</span>
                  <input className={`w-5 ${styles.formControl}`} type="number"  min="1" max="20" required placeholder="Enter"
                  value={numOfSeats} onChange={ev => setNumOfSeats(ev.target.value)}>
                  </input>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel}`}>Price</span>
                </div>
              </div>
            </div>
         
            <div className={`${styles.formGroup}`}>
                  <label className={`${styles.formLabel} pe-2`}>Enter your phone</label>
                  <input className={`w-75 ${styles.formControl}`} type="tel" required placeholder="Ex: 01200000000"
                   value={phone}  onChange={ev => setphone(ev.target.value)}/>
                </div>
         
            
         
            <div className={`${styles.formBtn}`}>
              <button onClick={BookThisRoom} className={`${styles.submitBtn}`}>cash 
             {numberOfHours > 0 && (
              <span>{numberOfHours }</span>
              // * place.price
             )}
              </button>
              <div className={`py-2 ${styles.separator}`}>
                <hr className={`${styles.line}`}/>
                <p>OR</p>
                <hr className={`${styles.line}`} />
              </div>
              <button className={`${styles.submitBtn}`}>
                <Link to={"/Payment"} className='btn text-white' style={{textDecoration:"none"}}>Pay using credit card</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

