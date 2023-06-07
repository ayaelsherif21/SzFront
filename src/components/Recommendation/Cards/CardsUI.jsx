import React from "react";
// import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
import styles from "../Recommendation.module.css";
import { MdOutlineChair } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function CardsUI(props) {
  console.log(props);
  return (

    <div className="col-lg-4">
      <div key={props._id} className={`my-3 mx-4 shadow ${styles.cardofws}`}>
        <div className={`${styles.cardImgg}`}>
          <img
            src={props.imgsrc[0]}
            alt="image1"
            className={`w-100 ${styles.imgWs}`}
          />
        </div>
        <div className={`${styles.zoneWs}`}>
          <span className={`${styles.innerText}`}>{props.location}</span>
        </div>
        <div className={`${styles.contentofCard}`}>
          <div className="tapp ">
            <span className={`${styles.cardTitle}`}>{props.title}</span>
            <span className={`float-end ${styles.priceWs}`}>
              {props.price}{" "}
              <span
                className={`float-end`}
                style={{ fontSize: "9px", color: "gray" }}
              >
                EGP/HOUR
              </span>
            </span>

            <hr></hr>
          </div>
          <div className="seatnum ">
            <span className={` px-2 ${styles.cardSubtitle}`}>
              4 Rooms and Shared Area{" "}
            </span>
            <div className="d-flex seats">
              <span className={` px-2 ${styles.cardSubtitle}`}>
                {" "}
                <MdOutlineChair fontSize={16} /> {props.capacity} seat{" "}
              </span>
              <span className={` px-1 ${styles.cardSubtitle}`}>
                {" "}
                <BsTelephone fontSize={12} /> {props.phone}
              </span>
            </div>
            <div className="phnum d-flex">
              <Link className="w-100" to={`/WorkSpace/${props.id}`}>
                <button
                  type="submit"
                  className={`shadow float-left ${styles.btnnWs}`}
                >
                  <span className={`${styles.label}`}>More Details </span>
                  <span className={`${styles.icon}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={15}
                      height={15}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsUI;
