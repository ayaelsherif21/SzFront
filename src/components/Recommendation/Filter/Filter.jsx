import React, { useState } from "react";
import { Slider, RangeSlider } from "rsuite";
// import RangeSlider from "rsuit/RangeSlider";
import "rsuite/dist/rsuite.css";

export default function Filter() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(100);

  function handleRange(value) {
    setFirstValue(value[0]);
    setSecondValue(value[10]);
  }
  return (
    <>
      <h2 className="head">Filters</h2>
      <div className="filterBody mt-5">
        <div className="price">
          <h6 className="pirceHead ">Price</h6>
          <div className="pSlider mt-2">
            <RangeSlider defaultValue={[2, 50]} onChange={handleRange} />
          </div>
        </div>
        <div className="rates mt-4">
          <h6 className="ratesHead">Rates</h6>
          <label>
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} /> &up
          </label>
          <br />
          <label>
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} /> &up
          </label>
          <br />

          <label>
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-star"} />
            <i className={"fa fa-star"} /> &up
          </label>
          <br />

          <label>
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-star"} /> &up
          </label>
        </div>
        <div className="features mt-4">
          <h6 className="featuesHead">Features</h6>
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-wifi"} /> Wifi
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-person-through-window"} /> Balcony
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-volume-mute"} /> Silent Rooms
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-people-group"} /> Meeting Rooms
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-gamepad"} /> Arcade Rooms
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-person-chalkboard"} /> Training/Course Rooms
          </label>
          <br />
        </div>
        <div className="avails mt-4">
          <h6 className="availsHead">Available</h6>
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-circle-xmark"} /> Show non-available
          </label>
          <br />
        </div>
        <div className="payment mt-4">
          <h6 className="paymentHead">Payment</h6>
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-sack-dollar"} /> Cash
          </label>
          <br />
          <label htmlFor="">
            <input className={"m-lg-1"} type="checkbox" />
            <i className={"fa fa-credit-card"} /> Credit Card
          </label>
          <br />
        </div>
      </div>
    </>
  );
}
