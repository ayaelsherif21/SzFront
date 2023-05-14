
import React from "react";
import "./ShowHistory.css";


function formatDateRange(startDate, endDate) {
  if (!startDate || !endDate) {
    return '';
  }
  const start = startDate.toLocaleDateString();
  const end = endDate.toLocaleDateString();
  const diff = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

  if (diff === 0) {
    return `${start}`;
  } else if (diff === 1) {
    return `${start} - ${end} (${diff} day)`;
  } else {
    return `${start} - ${end} (${diff} days)`;
  }
}
function HistoryCard (props) {
  console.log(props.startDate, props.endDate);
  const duration = formatDateRange(props.startDate, props.endDate);
  
  return (
    <div className="card text-left shadow" >
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <p className="card-room"><strong>{props.room}</strong>  in {props.workspaceName}</p>
        <div className="card-footer">
          <div className="card-text text-secondary">{duration}</div>
          <div className="price"> {props.price} EGP </div>
        </div>

      </div>
    </div>
  );
};



export default HistoryCard;





{/* <p className="card-text text-secondry">{props.text}</p>
        <p className="card-text text-secondry">{props.date}</p>
        <p className="card-text text-secondry">{props.description}</p>
        <p className="card-text text-secondry">{props.price}</p>
        <p className="card-text text-secondry">{props.duration}</p> */}