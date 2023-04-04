import React from "react";
import aboutpic from "../../images/2.jpg";
import styles from "./About.module.css";

export default function About() {
  return (
    // <div className={`about ${styles.about}`}>
    //     <div className='text-center position-relative d-flex justify-content-center align-items-center'>
    //         <h2 className='mb-0 position-absolute'>About Us</h2>
    //         <h3 className='mb-0'>A</h3>
    //     </div>
    // </div>
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-5 mx-5">
            <p>
              Pellentesque vel elit egestas, pretium est ac, convallis orci.
              Vivamus sem nisl, tristique vel ringilla vitae, efficitur at eros.
              Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis
              gravida pulvinar. Phasellus vel eros porta, blandit dui ac,
              viverra felis.
            </p>
            <p>
              Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna
              posuere volutpat. Mauris ut dui sit amet elit fermentum fermentum.
              Fusce tincidunt diam at bibendum porta.
            </p>
            <p>
              Aliquam nunc felis, sagittis eu purus non, interdum vehicula urna.
              Vivamus congue diam sapien, eu pellentesque ipsum ultricies quis.
            </p>
            <p>
              Pellentesque vel elit egestas, pretium est ac, convallis orci.
              Vivamus sem nisl, tristique vel ringilla vitae, efficitur at eros.
              Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis
              gravida pulvinar. Phasellus vel eros porta, blandit dui ac,
              viverra felis.
            </p>
            <p>
              Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna
              posuere volutpat. Mauris ut dui sit amet elit fermentum fermentum.
              Fusce tincidunt diam at bibendum porta.
            </p>
          </div>
          <div className="col-md-6">
            <img className="w-100 h-100" src={aboutpic} alt="About Pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
