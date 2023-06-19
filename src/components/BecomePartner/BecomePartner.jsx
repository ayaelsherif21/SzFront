// import React from "react";
// import "./BecomePartner.css"; // Import CSS file for component styling
// import partnerPhoto from "../../images/4.jpg";
// import { Link } from "react-router-dom"; // Import partner photo

// const BecomePartner = () => {
//   return (
//     <div className="become-partner">
//       <div className="partner-photo">
//         <img src={partnerPhoto} alt="Partner" />
//       </div>
//       <div className="partner-info">
//         <h2>Become Our Partner</h2>
//         <p>Join us and be a part of our success story.</p>
//         {/*<Link to={"Osignup"}>*/}
//         <button
//           onClick={() => {
//             window.location.replace("Osignup");
//           }}
//           className="btn btn-primary"
//         >
//           Get Started
//         </button>
//         {/*</Link>*/}
//       </div>
//     </div>
//   );
// };

// export default BecomePartner;
import React from "react";
import "./BecomePartner.css"; // Import CSS file for component styling
import { Link } from "react-router-dom";

const BecomePartner = () => {
  return (
    <div className="become-partner">
      <div className="partner-photo ">
        <img src="https://i.ibb.co/VTSK2kN/Office-Jobs-Clipart-Hd-PNG-Jobs-Overtime-Office-Computer-Job-Clipart-Business-Go-To-Work-PNG-Image-F.jpg" alt="Partner" />
        <div >
        <div className="partner-info mt-5">
        <h5>Become Our Partner</h5>
        <p>Join us and be a part of our success story.</p>
        <Link to={"Osignup"}>
        <button
          onClick={() => {
            window.location.replace("Osignup");
          }}
          className="btn btn-primary"
        >
          Get Started
        </button>
        </Link>
        </div>
        </div>
      </div>

    </div>
  );
};

export default BecomePartner;