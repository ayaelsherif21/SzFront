import React from 'react';
import styles from './Cards.module.css'
import { Link } from 'react-router-dom';

function CardsUI(props) {
  return (
  
 <div className="container">
  <div className="row d-flex">
    < div className="col-lg-4">
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

        <Link href='#' to={"/WorkSpace"} className={`btn mt-2 ${styles.btnWs}`} 
        style={{borderRadius: "20px",   textDecoration:"none" , backgroundColor:"#4b86b4" ,color:'white' , padding:"10px 15px 10px 15px"}}>go to your workspace</Link>

      </div>
    </div>
    </div>
  </div>
</div> 
  )
}

export default CardsUI;




/*<div className="slider">
//        <div className={`${styles.wrapper}`}>
//   <i id="left" className="fa-solid fa-angle-left" />
//   <ul className={`carousel ${styles.carousel}`}>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-1.jpg" alt="img" draggable="false" /></div>
//       <h2>Blanche Pearson</h2>
//       <span>Sales Manager</span>
//     </li>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-2.jpg" alt="img" draggable="false" /></div>
//       <h2>Joenas Brauers</h2>
//       <span>Web Developer</span>
//     </li>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-3.jpg" alt="img" draggable="false" /></div>
//       <h2>Lariach French</h2>
//       <span>Online Teacher</span>
//     </li>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-4.jpg" alt="img" draggable="false" /></div>
//       <h2>James Khosravi</h2>
//       <span>Freelancer</span>
//     </li>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-5.jpg" alt="img" draggable="false" /></div>
//       <h2>Kristina Zasiadko</h2>
//       <span>Bank Manager</span>
//     </li>
//     <li className={`${styles.card}`}>
//       <div className={`${styles.img}`}><img src="images/img-6.jpg" alt="img" draggable="false" /></div>
//       <h2>Donald Horton</h2>
//       <span>App Designer</span>
//     </li>
//   </ul>
//   <i id="right" className="fa-solid fa-angle-right" />
// </div>

//     </div>*/
