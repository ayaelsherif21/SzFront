import React, { useEffect, useState } from "react";
import CardsUI from "./CardsUI";
import styles from "../Recommendation.module.css";
import img1 from "../../../images/eco.jpg";
import img2 from "../../../images/creativo-3.jpg";
import img3 from "../../../images/workspace2.jpg";
import axios from "../../../api/axios";
// import { Row, Col } from "react-bootstrap";
import { Grid } from "rsuite";

function Cards() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get("api/places/getAllPlaces").then((response) => {
      setCardData(response.data.data.places);
      console.log(response.data.data.places);

      console.log(response.data.data.places[10]._id);
    });
  }, []);

  console.log("number of spaces", cardData.length);
  window.sessionStorage.setItem("spacesNumbers", cardData.length);

  if (!cardData) {
    return <div className="m-lg-3">Loading...</div>;
  }

  return (
    <>
      <div  style={{ display: "flex" }}>
        <Grid className="row row-cols-3 m-auto mt-1" style={{width:"fit-content", display: "flex",marginLeft: "10rem" }}>
          {cardData.map((pace) => (
            <div key={pace.id}>
              <div style={{ display: "flex" ,width: "auto"}}>
                <CardsUI
                  imgsrc={pace.placePhotos}
                  title={pace.placeName}
                  price={pace.hourPrice}
                  vip={pace.vipHourPrice}
                  location={pace.zone}
                  capacity={pace.numberOfSeats}
                  phone={pace.number}
                  id={pace._id}
                />
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Cards;
