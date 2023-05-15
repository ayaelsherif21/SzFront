import React from "react";
import styles from "./Home.module.css";
import Services from "../Services/Services";
import homeBg from "../../images/1.jpg";
import serpic from "../../images/7.jpg";
import serpic1 from "../../images/9.jpg";
import serpic2 from "../../images/10.jpg";
import Footer from "../Footer/Footer";

export default function Home() {

  return (
    <>
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(" + homeBg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <div className={`buttonBg ${styles.butBg}`}>
          <div>
            <h1>SPACE TO ELEVATE WORK</h1>
            <form>
              <div className="inputZone m-auto my-4">
                <label className="urZone" htmlFor="your_zone">
                  ENTER YOUR ZONE
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to work?"
                  className={`form-control mt-2 ${styles.homeInp}`}
                  name="your_zone"
                />
              </div>
              <button
                className={`btn text-white px-4 py-2`}
                style={{ backgroundColor: "#63ace5" }}
              >
                Find Your Workspace
              </button>
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
        <Services />
        <Footer></Footer>
      </div>
    </>
  );
}
