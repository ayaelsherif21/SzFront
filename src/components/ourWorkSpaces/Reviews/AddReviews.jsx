import {React} from "react";
import styles from "./Reviews.module.css";

function AddReviews() {
    return (<>
        <div className={`${styles.reviewAdd}`}>
            <h4>Add Review
                <div className="rating">
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                </div>
            </h4>

            <form action="#" className={`${styles.raForm}`}>
                <div className="row" style={{marginBottom:"15px"}}>
                    <div className="col-lg-6">
                        <textarea placeholder="Your Review" defaultValue={""}/>
                        <button type="submit">Submit Now</button>
                    </div>
                </div>
            </form>
        </div>
    </>);
}

export default AddReviews;
