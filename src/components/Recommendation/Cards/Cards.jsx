import React, { useEffect, useState} from 'react'
import CardsUI from './CardsUI'
import img1 from "../../../images/eco.jpg";
import img2 from "../../../images/creativo-3.jpg";
import img3 from "../../../images/workspace2.jpg";
import axios from "../../../api/axios";


export default function Cards(){
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
      axios.get("api/places/getAllPlaces").then((response) => {
          setCardData(response.data.data.places);
          console.log(response.data.data.places);
      });
  }, []);
  if (!cardData) {
      return <div>Loading...</div>;
  }
    return(
      <div className="container ">    
      <div className="col-lg-4">
      <div className='container-fluid d-flex align-items-center justify-content-center'
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
                {cardData.map((pace) => (
                    <div key={pace._id}>
                        <CardsUI
                            imgsrc={pace.placePhotos}
                            title={pace.placeName}
                            price={pace.hourPrice}
                            vip={pace.vipHourPrice}
                            location={pace.zone}
                            capacity={pace.numberOfSeats}
                            phone={pace.number}
                        />
                    </div>
                ))}
            </div>

           {/* <div className="col-md-4">
          <CardsUI imgsrc={img2} title="workspace2" date="date" price="price" duration="duration"/>
          </div>

          <div className="col-md-4">
          <CardsUI imgsrc={img3} title="workspace3" date="date" price="price" duration="duration"/>
          </div>  */}
        
          </div>
          </div>  

    )
  }

