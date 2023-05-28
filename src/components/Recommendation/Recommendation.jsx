import React, { useEffect, useState} from 'react'
import styles from "./Recommendation.module.css";
import Filter from './Filter/Filter'
import axios from "../../api/axios";
import { Grid } from 'rsuite';
import {MdOutlineChair} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Recommendation() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("api/places/getAllPlaces"); // Replace with the actual API endpoint
          setPlaces(response.data.data.places); // Assuming the response data is an array of places
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>

        <div className=" row">
          <div className="col-md-2" style={{ fontSize: "12px" }}>
            <Filter />
          </div>
          <div className="col-md-10">
          {/* <div className="container "> */}
        <div className={`text-center ${styles.client}`}>
          <div className="text-center position-relative d-flex justify-content-center align-items-center">
            <h2 className=" mb-0 position-absolute">Workspaces</h2>
            <h3 className=" mb-0">W</h3>
          </div>
        </div>
        <Grid className="row m-auto mt-1">
        {places.map((pace) => (
        <div className="col-lg-4">
        <div key={pace._id} className={`my-3 mx-4 shadow ${styles.cardofws}`}>
       <div className={`${styles.cardImgg}`}>
       <img src={pace.placePhotos} alt="image1" className={`w-100 ${styles.imgWs}`}/>
  </div>
  <div className={`${styles.zoneWs}`}>
    <span className={`${styles.innerText}`}>{pace.zone}</span>
  </div>
  <div className={`${styles.contentofCard}`}>
    <div className="tapp ">
    <span className={`${styles.cardTitle}`}>{pace.placeName}</span>
    <span className={`float-end ${styles.priceWs}`}>{pace.hourPrice} <span className={`float-end`} style={{fontSize:"9px" , color:"gray"}}>EGP/HOUR</span></span>

    <hr></hr>
    </div>
    <div className="seatnum "> 
    <span className={` px-2 ${styles.cardSubtitle}`}>4 Rooms and Shared Area </span>
    <div className="d-flex seats">
    <span className={` px-2 ${styles.cardSubtitle}`}> <MdOutlineChair fontSize={16}/> {pace.numberOfSeats} seat </span>
    <span className={` px-1 ${styles.cardSubtitle}`}> <BsTelephone fontSize={12}/>  {pace.number}</span>
    </div>
    <div className="phnum d-flex">
    <Link className='w-100' to={"/WorkSpace"}>
    <button type='submit' className={`shadow float-left ${styles.btnnWs}`}>
  <span className={`${styles.label}`}>More Details </span>
  <span className={`${styles.icon}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={15} height={15}><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" /></svg>
  </span>
</button>
</Link>
    </div>
   

    </div>
    
       </div>
</div>
</div>

   ))}
   </Grid>
          {/* </div> */}
        </div>
      </div>
   
<Footer />
    
    
    </>
  )
}
