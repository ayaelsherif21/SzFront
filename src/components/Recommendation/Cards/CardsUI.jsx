import React from 'react';
import styles from './Cards.module.css'
import { Link } from 'react-router-dom';

function CardsUI(props) {
  return (
    <div className={`card text-center shadow ${styles.card}`}>
      <div className={`${styles.overflow}`}>
        <img src={props.imgsrc} alt="image1" className={`card-img-top ${styles.cardImg}`} />
      </div>
      <div className={`card-body text-dark ${styles.cardBody}`}>
        <h4 className={`${styles.cardText}`}>{props.title}</h4>
        <p className='cardText text-secondry'>
          {props.text}
        </p>
        <p className='card-text text-secondry'>
          {props.date}
        </p>
        <p className='card-text text-secondry'>
          {props.description}
        </p>
        <p className='card-text text-secondry'>
          {props.price}
        </p>
        <p className='card-text text-secondry'>
          {props.duration}
        </p>

        <Link href='#' to={"/WorkSpace"} className='btn btn-outline-success' 
        style={{borderRadius: "15px"}}>go to your workspace</Link>

      </div>
    </div>
  )
}

export default CardsUI