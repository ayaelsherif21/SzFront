import React, {useEffect, useState} from "react";
import styles from "./Reviews.module.css";
import client3 from "../../../images/client-5.png";
import axios from "../../../api/axios";
import AddReviews from "./AddReviews";

var userNames = []

function Reviews(props) {
    const pathSegments = window.location.pathname.split('/');
    const spaceId = pathSegments[pathSegments.length - 1];
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        axios.get(`api/places/getFeedBacks/${spaceId}`).then((response) => {

            setFeedback(response.data.data);
            // console.log(response.data.data[0].userID);
            console.log("before ")
        });
    }, []);
    //

    console.log(feedback);


    let counter = 0;
    return (<>
        <div className={`${styles.reviews}`}>
            <h4>Reviews</h4>
            {feedback.map((feed) => (<div className={`${styles.reviewItem}`}>
                <div className={`${styles.revPic}`}>
                    <img src={client3} alt/>
                </div>
                <div className={`${styles.revText}`}>
                    <div className="rating">
                        {feed.feedbackNumber === 1 ? <i className="fa fa-star"/> : <></>}
                        {feed.feedbackNumber === 2 ?
                            <div><i className="fa fa-star"/><i className="fa fa-star"/></div> : <></>}
                        {feed.feedbackNumber === 3 ?
                            <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                className="fa fa-star"/></div> : <></>}
                        {feed.feedbackNumber === 4 ?
                            <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                className="fa fa-star"/><i className="fa fa-star"/></div> : <></>}
                        {feed.feedbackNumber === 5 ?
                            <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                className="fa fa-star"/><i className="fa fa-star"/><i
                                className="fa fa-star"/></div> : <></>}
                    </div>
                    <h5>{feed.userName}</h5>
                    <p>{feed.feedbackText}</p>
                </div>
            </div>))}
        </div>
        <AddReviews/>
    </>);
}

export default Reviews;