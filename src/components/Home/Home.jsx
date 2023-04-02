import React from 'react'
import styles from './Home.module.css'
import homeBg from '../../images/1.jpg'
import serpic from '../../images/7.jpg'
import serpic1 from '../../images/9.jpg'
import serpic2 from '../../images/10.jpg'


export default function Home() {
  return (
    <>  
  <div
        className="bg_image"
        style={{
          backgroundImage: 'url('+homeBg+')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          width:"100%",
          height: "80vh",
          color: "#f5f5f5"
        }}
      >
        <div className={`buttonBg ${styles.butBg}`}>
          <div>
        <h1>SPACE TO ELEVATE WORK</h1>
        <form>
          <div className="inputZone m-auto my-4">
            <label className='urZone' htmlFor="your_zone">ENTER YOUR ZONE</label>
            <input type="text" placeholder="Where do you want to work?" className={`form-control mt-2 ${styles.homeInp}`} name='your_zone'/>
          </div>
          <button className={`btn text-white px-4 py-2`} style={{backgroundColor :"#63ace5"
          }}>Find Your Workspace</button>
          <div className='clearfix'></div>
        </form>
        </div>
        </div>

      </div>
      <div className={`m-3 ${styles.Services}`} id="team">
   
   <div className=" text-center position-relative d-flex justify-content-center align-items-center ">
     <h2 className=" mb-0 position-absolute">Our Services</h2>
     <h3 className=" mb-0">S</h3>
   </div>
   <div className="team">
     <p className="text-center w-50 m-auto">Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna
       imperdiet
       tincidunt
       rhoncus. Sed mollis ligula non massa aliquam faucibus.</p>
   </div>
   <br />
   <div className="container">
     <div className="row">
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden">
           <img src={serpic} className="w-100" />
           <h4 className='my-2'>Shared Workspace</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
           text-center text-white rounded">
             <div>
               <div className="member-cap">
                 <div className="member-name">
                   <h5>Michael Broad</h5>
                   <h6>Web Designer</h6>
                 </div>
                 <br />
                 <p>Professional instructor ,
                   Graduated from the Faculty of Computer Science</p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden ">
           <img src={serpic1} className="w-100 " />
           <h4 className='my-2'>Event Space</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
               text-center text-white rounded">
             <div>
               <div className="member-cap">
                 <div className="member-name">
                   <h5>Jeannette Crow</h5>
                   <h6>Graphic Designer</h6>
                 </div>
                 <br />
                 <p>Professional instructor ,
                   Graduated from the Faculty of Applied Arts
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden">
           <img src={serpic2} className="w-100" />
           <h4 className='my-2'>Private Rooms</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                   text-center text-white rounded">
             <div>
               <div className="member-cap">
                 <div className="member-name">
                   <h5>Martin Lawrence</h5>
                   <h6>Web Developer</h6>
                 </div>
                 <br />
                 <p>Professional instructor ,
                   Graduated from the Faculty of Computer Science</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="row">
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden">
           <img src={serpic} className="w-100" />
           <h4 className='my-2'>Shared Workspace</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
           text-center text-white rounded">
             <div>
             </div>
           </div>
         </div>
       </div>
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden ">
           <img src={serpic1} className="w-100 " />
           <h4 className='my-2'>Event Space</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
               text-center text-white rounded">
             <div>
             </div>
           </div>
         </div>
       </div>
       <div className="col-lg-4">
         <div className="members position-relative overflow-hidden">
           <img src={serpic2} className="w-100" />
           <h4 className='my-2'>Private Rooms</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati.</p>
           <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                   text-center text-white rounded">
             <div>
               
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </div>
   <div>
 
 

   </div>
   
</>
  )
}
