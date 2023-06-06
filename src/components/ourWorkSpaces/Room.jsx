import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Room.module.css'
import style from './Workspace.module.css'

import axios from 'axios';
// import WorkSpace from './WorkSpace';
import Room1 from '../../images/7.jpg'
// import Room2 from '../../images/9.jpg'
// import Room3 from '../../images/10.jpg'
export default function Room() {
    const {id} = useParams();
    const [Room , setRoom] = useState(null);
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get(`/Workspace/${id}`).then(response =>{
            setRoom(response.data);
        });
    }, [id]);
    // if(!Room) return '';
  return (
    <div className="container">
         <div className={`${styles.Room}`}>
        Room: {id}
        {/* <h1 className='text-2xl'>{Room.title}</h1> */}
        </div>
        {/* <a className='block font-semibold underline text-black px-2' target='_blank' href={'https://maps.google.com/?q='+Room.address}>Room Address</a> */}
        <a className='block font-semibold underline text-black px-2 mt-2' target='_blank' href='https://maps.google.com/?q='>Room Address</a>
       <div className='grid gap-2 grid-cols-[2fr_fr]'>
        {/* <div>
            {Room.photos?.[0] && (
            <img src={'https://localhost:3000/uploads/'+WorkSpace.photo[0]}/>
            )
            }
        </div> */}
        <div className="row py-3">
        <div className="col-lg-3">
            <img src={Room1} alt="Room1" />
        </div>
       
            {/* <div className="col-lg-3">
            <img src={Room2} alt="Room2" />
            </div> */}
        </div>
        
        {/* <div className='my-4'>{Room.description}</div> */}
        
   <div className='my-2 mb-4'>
   <h3>Description </h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae sed, dicta optio quisquam quidem non facilis voluptatem ipsam deserunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto similique, non ex omnis sapiente provident dignissimos facilis ipsam natus?
  </div>

   </div>
   <div className='row'>
    <div className='col-lg-5'>
       {/* Check-in: {Room.Check_in} */}
      <p>
       Check-in:<br/>
       Check-out:
      </p>
    </div>
    <div className={`col-lg-5 p-4 bg-white shadow rounded-2xl ${styles.priceBox}`}>
      <h6>Price: EGY/HOUR</h6> 
      <button className={`btn text-white w-50 m-auto ${style.btnCard}`}>Book now</button>
    </div>
    
   </div>
   <div>
        <h5>Extra info</h5>
    </div>
    </div>
   
  )
}
