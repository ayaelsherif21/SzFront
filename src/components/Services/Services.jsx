import React from "react";
import serpic from "../../images/7.jpg";
import serpic1 from "../../images/9.jpg";
import serpic2 from "../../images/10.jpg";
import styles from "./Services.module.css";
import Footer from "../Footer/Footer";

export default function Services() {
  return (
    <>
      <div className={`${styles.Services}`} id="team">
        <div className=" text-center position-relative d-flex justify-content-center align-items-center">
          <h2 className=" mb-0 position-absolute">Our Services</h2>
          <h3 className=" mb-0">S</h3>
        </div>
        <br />
        <div className="team">
          <p className="text-center w-50 m-auto">
            Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna
            imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam
            faucibus.
          </p>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="members position-relative overflow-hidden">
                <img src={serpic} className="w-100" />
                <h4 className="my-2">Shared Workspaces</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, obcaecati.
                </p>
                <div
                  className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
          text-center text-white rounded"
                >
                  <div>
                    <div className="member-cap">
                      <div className="member-name">
                        <h5>Michael Broad</h5>
                        <h6>Web Designer</h6>
                      </div>
                      <br />
                      <p>
                        Professional instructor , Graduated from the Faculty of
                        Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="members position-relative overflow-hidden ">
                <img src={serpic1} className="w-100 " />
                <h4 className="my-2">Event Space</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, obcaecati.
                </p>
                <div
                  className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
              text-center text-white rounded"
                >
                  <div>
                    <div className="member-cap">
                      <div className="member-name">
                        <h5>Jeannette Crow</h5>
                        <h6>Graphic Designer</h6>
                      </div>
                      <br />
                      <p>
                        Professional instructor , Graduated from the Faculty of
                        Applied Arts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="members position-relative overflow-hidden">
                <img src={serpic2} className="w-100" />
                <h4 className="my-2">Private Rooms</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, obcaecati.
                </p>
                <div
                  className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                  text-center text-white rounded"
                >
                  <div>
                    <div className="member-cap">
                      <div className="member-name">
                        <h5>Martin Lawrence</h5>
                        <h6>Web Developer</h6>
                      </div>
                      <br />
                      <p>
                        Professional instructor , Graduated from the Faculty of
                        Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Footer />*/}
    </>
  );
}

{
  /* <div 
className='bgImg'
// style={{
//   backgroundImage: 'url('+serpic+')',
//   backgroundColor: "rgba(0, 0, 0, 0.199)",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: 'no-repeat',
//   width:"100%",
//   height: "100vh",
 
//   }}
  
  >
  <div className={`services mt-5 ${styles.back}`}>
    <div className=" text-center position-relative d-flex justify-content-center align-items-center">
      <h2 className={`mb-0 position-absolute ${styles.title}`}>Services</h2>
      <h3 className={` mb-0 ${styles.bigLetter}`}>S</h3>
    </div>
    <p className={`text-center w-50 m-auto ${styles.par}`}>Nullam ac enim auctor, fringilla risus at, imperdiet turpis. Pellentesque
      elementum libero
      enim, eget gravida nunc laoreet et. Pellentesque elementum libero enim.</p>
    <br />
    <br />
    <br />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-crop-alt" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="service-text">
              <h3 className={`${styles.sertxt}`}>Rooms</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-code" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="service-text">
              <h3>Meeting Room</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-camera-retro" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="service-text">
              <h3>Study Area</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-magic" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="service-text">
              <h3>Open Area</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-poll" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="service-text">
              <h3>Fast Food</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-2">
            <div className={`${styles.icon}`}>
              <i className="fas fa-cog" />
            </div>
          </div>
          <div className="col-md-10">
            <div className={`${styles.ser}`}>
              <h3>Drinks</h3>
              <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                utroque dissentias ut.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
{
  /* ***** Preloader Start *****
<div id="js-preloader" className="js-preloader">
  <div className="preloader-inner">
    <span className="dot" />
    <div className="dots">
      <span />
      <span />
      <span />
    </div>
  </div>
</div> */
}

{
  /* <div className="services_section layout_padding">
  <div className="container">
    <h1 className="services_taital">our services</h1>
    <p className="many_taital">There are many variations of passages of Lorem Ipsum </p>
    <div className="services_section2 layout_padding">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="icon_1"><img src={serpic} /></div>
          <h2 className="furnitures_text">Furnitures</h2>
          <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
          <div className="read_bt_main">
            <div className="read_bt"><a href="#">Read More</a></div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="icon_1"><img src={serpic} /></div>
          <h2 className="furnitures_text">office</h2>
          <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
          <div className="read_bt_main">
            <div className="read_bt"><a href="#">Read More</a></div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="icon_1"><img src={serpic} /></div>
          <h2 className="furnitures_text">Home</h2>
          <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
          <div className="read_bt_main">
            <div className="read_bt"><a href="#">Read More</a></div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="icon_1"><img src={serpic} /></div>
          <h2 className="furnitures_text">badroom</h2>
          <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
          <div className="read_bt_main">
            <div className="read_bt"><a href="#">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
