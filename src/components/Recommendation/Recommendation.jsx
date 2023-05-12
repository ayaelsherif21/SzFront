import React from "react";
import styles from "../Recommendation/Recommendation.module.css";
import client1 from "../../images/client-1.png";
import client2 from "../../images/client-2.png";
import client3 from "../../images/client-3.png";
import client4 from "../../images/client-4.png";
import client5 from "../../images/client-5.png";
import client6 from "../../images/client-6.png";
import client7 from "../../images/client-7.png";
import client8 from "../../images/client-8.png";
import client9 from "../../images/client-9.png";
import Footer from "../Footer/Footer";
import Cards from "../../components/Recommendation/Cards/Cards"
import Cards from "../Cards/Cards";
import Filter from "./Filter/Filter";

export default function Recommendation() {
  return (
    <>
     {/* cards
     <Cards/>
     <div className="col-2 p-4">
     <Filter />
   </div>
    <div id="reviews" className={` text-center mt-5 ${styles.client}`}>
  <div className=" text-center position-relative d-flex justify-content-center align-items-center">
    <h2 className=" mb-0 position-absolute">Client Reviews</h2>
    <h3 className=" mb-0">C</h3>
  </div>
  <p className="p-2">Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a
    gravida faucibus,
    elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.</p>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client-review p-5">
                <img src={client1} className={`${styles.clientImg}`} />
                <h5>Martin Jack</h5>
                <h6>From Hooli</h6>
                <i className="fas fa-quote-left " />
                <p> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam
                  eget lorem in
                  ex aliquam dapibus. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client2} className={`${styles.clientImg}`} />
                <h5>David Dowsy</h5>
                <h6>From Globex</h6>
                <i className="fas fa-quote-left" />
                <p> Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut
                  suscipit ligula malesuada. Donec dui nulla. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client3} className={`${styles.clientImg}`} />
                <h5>Doglas Kosta</h5>
                <h6>From Soylent</h6>
                <i className="fas fa-quote-left" />
                <p> Vestibulum lectus massa, volutpat ut tristique nec, volutpat in turpis. In
                  vehicula tempus odio. Nullam enim ligula. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client4} className={`${styles.clientImg}`} />
                <h5>Anthony Lee</h5>
                <h6>From Initech</h6>
                <i className="fas fa-quote-left" />
                <p> Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet
                  volutpat sem fringilla ut. Proin viverra scelerisque mollis. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client5} className={`${styles.clientImg}`} />
                <h5>Jane Doris</h5>
                <h6>From Acme</h6>
                <i className="fas fa-quote-left" />
                <p> Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce
                  iaculis cursus ante, vel vestibulum dui sagittis vitae. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client6} className={`${styles.clientImg}`} />
                <h5>Jonathon Doe</h5>
                <h6>From Umbrella</h6>
                <i className="fas fa-quote-left" />
                <p> Cras et est eu tellus fringilla congue. Nunc efficitur libero ut nunc
                  volutpat porttitor. Aliquam in justo at neque. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client7} className={`${styles.clientImg}`} />
                <h5>Shane Catson</h5>
                <h6>From Massive</h6>
                <i className="fas fa-quote-left" />
                <p> Vivamus pellentesque dignissim neque, quis viverra diam venenatis sit amet.
                  Donec dignissim turpis quis libero posuere auctor. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client8} className={`${styles.clientImg}`} />
                <h5>Hugh Tace</h5>
                <h6>From Capital</h6>
                <i className="fas fa-quote-left" />
                <p> Aenean varius accumsan eros, id molestie leo vestibulum a. Ut semper dictum
                  feugiat. Integer tincidunt interdum eros ut accumsan. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="client-review p-5">
                <img src={client9} className={`${styles.clientImg}`} />
                <h5>Chris Wort</h5>
                <h6>From Sylhost</h6>
                <i className="fas fa-quote-left" />
                <p> Morbi viverra ultrices magna vel egestas. Suspendisse rutrum, lacus nec
                  sodales gravida, augue ante sollicitudin sem. </p>
                <i className="fas fa-quote-right" />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true" />
            <span className="visually-hidden bg-dark ">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon " aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
      <div className="ttotta ">
        <div className="col-2 p-4">
          <Filter />
        </div>
        <div className="col-10">
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
}
