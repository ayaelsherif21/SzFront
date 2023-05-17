import React, {useState, useEffect, Component} from "react";
import axios from "../../api/axios";
import CardsUI from "./CardsUI";
import img1 from "../../images/1.jpg";
import img2 from "../../images/1.jpg";
import img3 from "../../images/1.jpg";

function Cards() {
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
    return (
        <div className="container-fluid ttotta d-flex justify-content-center mt-5">
            <div className="row">
                <div className="col-md-4" style={{display:"flex"}}>

                    {cardData.map((pace) => (
                        <div key={pace.id}>
                            <div className={"carrd"}>
                                <CardsUI
                                    imgsrc={pace.placePhotos}
                                    name={pace.placeName}
                                    location={pace.zone}
                                    capacity={pace.numberOfSeats}
                                    duration={pace.number}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
