import React, { useEffect, useState} from 'react'
import styles from "./Recommendation.module.css";
import Filter from './Filter/Filter'
import Footer from '../Footer/Footer';
import Cards from './Cards/Cards';
export default function Recommendation() {
 
  return (
    <>

        <div className=" row">
          <div className="col-md-2" style={{ fontSize: "12px" }}>
            <Filter />
          </div>
          <div className="col-md-10">
        <div className={`text-center ${styles.client}`}>
          <div className="text-center position-relative d-flex justify-content-center align-items-center">
            <h2 className=" mb-0 position-absolute">Workspaces</h2>
            <h3 className=" mb-0">W</h3>
          </div>
        </div>
        <Cards />
        </div>
      </div>
   
<Footer />
    
    
    </>
  )
}
