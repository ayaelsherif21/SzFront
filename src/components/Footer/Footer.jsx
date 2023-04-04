import React from "react";
import styles from "../Footer/Footer.module.css";
import footerPic from "../../images/dotted-map.png";
// import logo from '../../images/szlogo.png'
export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div
          className={`${styles.footerwidgets}`}
          style={{
            backgroundColor: "#2a4d69",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "55vh",
            color: "#f5f5f5",
            position: "relative",
            clear: "both",
            padding: "50px",
            backgroundImage: "url(" + footerPic + ")",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mb-5">SPACE ZONE</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className={`${styles.widget}`}>
                  <h5>Contact Info</h5>
                  <div className={`${styles.textwidget}`}>
                    <p>
                      1650 Lombard Street,
                      <br />
                      San Francisco, CA 94123
                    </p>
                    <p>
                      +1 (415) 876-3250
                      <br />
                      spacezone@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`${styles.widget}`}>
                  <h5>Useful Links</h5>
                  <div className={`${styles.textwidget}`}>
                    <ul className={`${styles.footerlist}`}>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`${styles.widget}`}>
                  <h5>About Us</h5>
                  <div className={`${styles.textwidget}`}>
                    <ul className={`${styles.footerlist}`}>
                      <li>
                        <a href="#">Company Information</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Reviews</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className={`${styles.widget}`}>
                  <h5>Social Madia</h5>
                  <div className={`${styles.tags}`}>
                    <a href="#" className={`${styles.tag}`}>
                      Facebook
                    </a>
                    <a href="#" className={`${styles.tag}`}>
                      Youtube
                    </a>
                    <a href="#" className={`${styles.tag}`}>
                      Twitter
                    </a>
                    <a href="#" className={`${styles.tag}`}>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footerend}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={`${styles.footersocial}`}>
                  <a href="#" title="twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" title="twitter">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" title="twitter">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" title="twitter">
                    <i className="fab fa-dribbble" />
                  </a>
                  <a href="#" title="twitter">
                    <i className="fab fa-pinterest-square" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <p className={`${styles.copyright}`}>
                  Copyright © 2023
                  <a className="mx-2" href="#">
                    Space Zone
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
