import React from "react";
import aboutpic from "../../images/2.jpg";
import styles from "./About.module.css";
import Footer from "../Footer/Footer";
import aboutPic from "../../images/about-left-image.png"
import { FcLikePlaceholder } from "react-icons/fc";
import aboutPic1 from "../../images/building.png"
import aboutPic2 from "../../images/location.png"
import aboutPic3 from "../../images/affection.png"


export default function About(props) {
  return (
    <div id="about" className={`${styles.about}`}>
         <div className="text-center position-relative d-flex justify-content-center align-items-center">
          <h2 className="mb-0 position-absolute">About Us</h2>
          <h3 className="mb-0">A</h3>
          </div>
      <div className="container">
     <div className="row">
  <div className="col-lg-6 align-self-center">
    <div className={`${styles.leftPic}`}>
      <img className={`${styles.picOfAbout}`} src={aboutPic} alt="Two Girls working together" />
    </div>
  </div>
  <div className="col-lg-6">
    <div className={`${styles.sectioHeading}`}>
      <h4>
"Elevate Your Workspace Experience: Seamlessly Connect with Ideal Spaces on SpaceZone."</h4>
      <p>Space Zone aims to revolutionize how people find and connect with their ideal spaces, making every moment spent in these places memorable and productive. <br/> The team has built a comprehensive database of diverse venues, considering different preferences and requirements.</p>
    
      <div className="row">
        <div className="col-lg-4">
          <div className={`${styles.factItem}`}>
            <div className="count-area-content">
            <div className="icon">
                <img className="w-25 h-25 m-auto" src={aboutPic1} alt />
              </div>           
                 <div className={`${styles.countDigit}`}>2800</div>
              <div className={`${styles.countTitle}`}>co-workspace</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={`${styles.factItem}`}>
            <div className="count-area-content">
              <div className="icon">
                <img className="w-25 h-25" src={aboutPic2} alt />
              </div>
              <div className={`${styles.countDigit}`}>300</div>
              <div className={`${styles.countTitle}`}> Zone</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={`${styles.factItem}`}>
            <div className="count-area-content">
              <div className="icon">
                <img className="w-25 h-25" src={aboutPic3} alt />
              </div>
              <div className={`${styles.countDigit}`}>1000</div>
              <div className={`${styles.countTitle}`}>Happy Guest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );















//   return (
//     <>
//       <div className={`about ${styles.about}`}>
//         <div className="text-center position-relative d-flex justify-content-center align-items-center">
//           <h2 className="mb-0 position-absolute">About Us</h2>
//           <h3 className="mb-0">A</h3>
//         </div>

//         {/* <p className="text-center w-50 m-auto">Pellentesque elementum libero enim, eget gravida nunc laoreet et. Nullam ac
//   enim
//   auctor, fringilla risus at, imperdiet turpis. Pellentesque elementum libero enim.</p> */}
//       </div>
//       <br></br>
//       <div className="container ">
//         <div className="row">
//           <div className="col-md-5 mx-5">
//           <p>
// Welcome to our website! We are a group of five ambitious students from the Faculty of Science who have personally experienced the challenges of finding a suitable space to work on our graduation project. Fueled by our own frustrations, we embarked on a journey to create a solution that would make it easier for others to find the places they need and love.

// Our initial struggles inspired us to launch this platform, accompanied by a user-friendly mobile application, which aims to streamline the process of finding the perfect location for various purposes. Whether you're searching for a peaceful study spot, a cozy café to meet friends, or a conducive environment to work on your own projects, our platform is here to assist you.

// We understand the importance of having the right space to foster creativity, productivity, and collaboration. With our extensive research and passion for creating meaningful connections, we have developed a comprehensive database of diverse venues, taking into account various preferences and requirements. Our goal is to provide you with a hassle-free experience and help you discover the ideal places that suit your needs.

// As a team of dedicated individuals, we are committed to continuously improving and expanding our platform to ensure that it remains a valuable resource for our users. We welcome your feedback and suggestions, as they are essential in shaping the future of our website and mobile application.

// Join us on this exciting journey as we revolutionize the way people find and connect with their perfect spaces. Let us be your trusted companion in your quest for the ideal environment, making every moment spent in these places truly memorable and productive.

// Thank you for choosing our platform, and we look forward to assisting you in discovering the spaces that inspire and empower you.

// The Team at Space Zone
// </p>

//           </div>
//           <div className="col-md-5">
//             <img className="w-100 h-100" src={aboutpic} alt="About Pic" />
//           </div>
          
//         </div>
      
//       </div>
//       <div className={"mt-5"} style={{justifyContent:"center",backgroundColor:"lightgray", placeContent:"space-between"}}>
//           <div className={`container m-auto homeUsInfo ${styles.homeUsInfo}`} >
//           <div className="row ">
//           <div className="col-lg-4 text-center">
//               2800<br></br>
//               co-workspace
//             </div>
//             <div className={`col-lg-3 text-center homeUsInfo ${styles.homeUsInfo}`}>
//             300<br></br>
//             Zone
//             </div>
//             <div className={`col-lg-4 text-center homeUsInfo ${styles.homeUsInfo}`}>
//             1000<br></br>
//             Happy Guest
//             </div>
          
//           </div>
          
//           </div>
        
//         </div>
//         </>
//   );
}
