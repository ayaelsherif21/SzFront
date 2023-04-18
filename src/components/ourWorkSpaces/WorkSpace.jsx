import React from 'react'
import pic1 from '../../images/7.jpg'
// import pic2 from '../../images/8.jpg'
import pic3 from '../../images/9.jpg'
import pic4 from '../../images/10.jpg'
import styles from './Workspace.module.css'
import R1 from '../../images/creativo-3.jpg'
import R2 from '../../images/coworking.jpg'
// import R3 from '../../images/eco.jpg'
// import R4 from '../../images/3.jpg'
// import R5 from '../../images/4.jpg'
export default function WorkSpace() {
    
  return (
   <>
     <div
        className="bg_image"
        style={{
          backgroundImage: 'url('+R2+')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          width:"100%",
          height: "70vh",
          color: "#f5f5f5"
        }}
      >
</div>
<div className={`container ${styles.wsName}`}>
<h2>Majal Coworking space</h2> 
</div>
<div className={`${styles.Rooms}`}>
<div className="container">
<h4 className='my-3'>Rooms</h4>
 <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col-lg-3">
    <div className={`card ${styles.cards}`}>
      <img src={pic4} className={`card-img-top ${styles.cardImg}`} alt="Room1" />
      <div className="card-body">
      <div className="row">
        <div className="col-lg-8">
        <h6 className="card-title">Meeting Room</h6>
        <p className="card-text">8 Seats</p>
        </div>
        {/* <div className="col-lg-4 m-0">
          <p>from</p>
          <h6>100.0</h6>
          <p>EGP/H</p>
        </div> */}
        </div>
    </div>
    <button className={`btn text-white m-auto ${styles.btnCard}`}>Book now</button>    </div>
   
  </div>
  <div className="col-lg-3">
    <div className={`card ${styles.cards}`}>
      <img src={pic1} className={`card-img-top ${styles.cardImg}`} alt="Room1" />
      <div className="card-body">
        <h6 className="card-title">Training/Courses Room</h6>
        <p className="card-text">35 Seats</p>
    </div>
    <button className={`btn text-white m-auto ${styles.btnCard}`}>Book now</button>    </div>
   
  </div>
  <div className="col-lg-3">
    <div className={`card ${styles.cards}`}>
      <img src={R1} className={`card-img-top ${styles.cardImg}`} alt="Room1" />
      <div className="card-body">
        <h6 className="card-title">Shared Area</h6>
        <p className="card-text">15 Seats</p>
    </div>
      <button className={`btn text-white m-auto ${styles.btnCard}`}>Book now</button>
    </div>
   
  </div>
  <div className="col-lg-3">
    <div className={`card ${styles.cards}`}>
      <img src={pic3} className={`card-img-top ${styles.cardImg}`} alt="Room1" />
      <div className="card-body">
        <h6 className="card-title">Silent Room</h6>
        <p className="card-text">5 Seats</p>
    </div>
      <button className={`btn text-white m-auto ${styles.btnCard}`}>Book now</button>
    </div>
   
  </div>
 
</div>
</div>
</div>

<div className="container">
<div className={`${styles.details} my-2`}>
  <h4>About the workspace</h4>
  <div className={`${styles.icon}`}>
      <i class="fa-solid fa-location-dot"></i>
  </div>
  <p className='mt-2'>Address: 50 MohyEldin Abo El-Azz -Dokki</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nostrum porro commodi quos iusto dolore debitis quia quidem dignissimos ut. Nobis porro asperiores maxime voluptatem aliquid autem placeat architecto quia!</p>
</div>
<hr className={`${styles.line}`}></hr>
<div className="row">
<div className="col-lg-6">
  <div className="amenities">
  <h5 className='my-2'>Amenities</h5>
  <div className={`${styles.icon}`}>
  <i class="fa-solid fa-snowflake"></i>
  </div>
  <h6>Air Conditioner</h6>
  <div className={`${styles.icon}`}>
  <i class="fa-solid fa-mosque"></i>
  </div>
  <h6>Prayer room</h6>
  <div className={`${styles.icon}`}>
      <i class="fa-solid fa-wifi"></i>
  </div>
<h6>Wifi</h6>
</div>
  </div>
  <div className="col-lg-6">
    <div className="roles">
      <h5 className='my-2'>Rules</h5>
      <h6>Lorem ipsum dolor sit.</h6>
      <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
      <h6>Lorem ipsum dolor sit amet consectetur.</h6>
   
    </div>
  </div>
  
</div>

</div>
   
   
   </>
  )
}




