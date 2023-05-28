import React , { useEffect, useState } from "react";
import axios from '../../api/axios';
import styles from "./Home.module.css";
import Services from "../Services/Services";
import homeBg from "../../images/1.jpg";
// import serpic from "../../images/7.jpg";
// import serpic1 from "../../images/9.jpg";
// import serpic2 from "../../images/10.jpg";
import Footer from "../Footer/Footer";
import SearchBar from "./SearchBar/SearchBar";
import { SearchResultsList } from "./SearchBar/SearchResultsList";

export default function Home() {
  const [results, setResults] = useState([]);

  async function getAllPlaces(){
    let {data} = await axios.get("api/places/getAllPlaces")
    console.log(data)
  }
  useEffect(()=>{
    getAllPlaces()
  },[])
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
                <div>
                <div className="search-bar-container">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
              </div>
                </div>
                {/* <input
                  type="text"
                  placeholder="Where do you want to work?"
                  className={`form-control mt-2 ${styles.homeInp}`}
                  name="your_zone"
                /> */}
              </div>
              <button className={`btn text-white px-4 py-2 ${styles.homebtn}`}>Find Your Workspace</button>
              
              </form>
          </div>
        
        </div>
        <Services />
        {/* <div className={`${styles.addWS}`}>
          <div className={`container ${styles.addWS}`}>
           <div className={`row py-4`}>
             <div className={`col-lg-6 col-lg-offset-1 py-4 text-center ${styles.TextBox}`}>
            <h3 className="lowercase">If you want to add your place</h3>
             </div>
          <div className="col-lg-6 text-center">
            <a href="/Osignup" className={`btn btn-default`}>Add your workspace</a>
          </div>
        </div>
      </div>

     

        </div> */}
        <Footer></Footer>
      </div>
    </>
  );
}
