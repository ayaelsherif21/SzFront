import React, { useEffect, useState } from "react";
import "./Spaces.css";
import axios from "../../../../api/axios";
import Cookies from "js-cookie";
import CardsUI from "../../../Recommendation/Cards/Cards";
import { Grid } from "rsuite";
import { Link } from "react-router-dom";

function Spaces(props) {
  const [spaceData, setSpaceData] = useState([]);
  console.log();
  // console.log(Cookies.get("token"));

  useEffect(() => {
    axios
      .get("api/owner/getOwnerPlaces", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        setSpaceData(response.data);
        console.log(response.data);
        // console.log(Cookies.get("token"));
      });
  }, []);

  return (
    <>
      {/*{spaceData.map((spac) => (*/}
      {/*  <div key={spac.id} className="sp">*/}
      {/*    <CardsUI*/}
      {/*      imgsrc={spac.placePhotos}*/}
      {/*      title={spac.placeName}*/}
      {/*      location={spac.zone}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*))}*/}
      <div style={{ display: "flex" }}>
        <Grid
          className="row row-cols-4  mt-1"
          style={{ width: "fit-content", display: "flex", marginLeft: "10rem" }}
        >
          {spaceData.map((spac) => (
            <div key={spac.id}>
              <div style={{ display: "flex", width: "auto" }}>
                <CardsUI
                  imgsrc={spac.placePhotos}
                  title={spac.placeName}
                  price={spac.hourPrice}
                  vip={spac.vipHourPrice}
                  location={spac.zone}
                  capacity={spac.numberOfSeats}
                  phone={spac.number}
                  id={spac._id}
                />
              </div>
            </div>
          ))}
        </Grid>
      </div>
      <Link className={"w-100"} to={`/${props.id}/addSpace`}>
        <button className={`shadow float-left btnnWs`}>Add Space</button>
      </Link>
    </>
  );
}

export default Spaces;
