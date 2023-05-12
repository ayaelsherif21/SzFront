

import React, { useState } from "react";
import axios from "axios";
import styles from './Contact.module.css'



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send the message to the server
    try {
      await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={`contact ${styles.contact}`} id="contact">
        <div className=" text-center position-relative d-flex justify-content-center align-items-center">
          <h2 className=" mb-0 position-absolute">Get In Touch</h2>
          <h3 className=" mb-0">G</h3>
        </div>
        <p className="text-center w-50 m-auto">Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec
          pretium. Ut nibh elit,
          fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit.</p>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${styles.contInfo}`}>
              <h3 className="lowercase pb-3">Get Answers And Send Your Opinions:</h3>
              <div className={`"${styles.contactContent} clearfix"`}>
                <div className={`${styles.icon}`}>
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className={`${styles.contactText}`}>
                  <h4>Address</h4>
                  <p>1650 Lombard Street, San Francisco, CA 94123</p>
                </div>
              </div>
              <div className={`"${styles.contactContent} clearfix"`}>
                <div className={`${styles.icon}`}>
                <i class="fa-solid fa-phone"></i>
                </div>
                <div className={`${styles.contactText}`}>
                  <h4>Phone</h4>
                  <p>+1 (415) 876-3250 / +1 (415) 876-3251</p>
                </div>
              </div>
              <div className={`"${styles.contactContent} clearfix"`}>
                <div className={`${styles.icon}`}>
                <i class="fa-solid fa-paper-plane"></i>
                </div>
                <div className={`${styles.contactText}`}>
                  <h4>Say Hello</h4>
                  <p>spacezone@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.contactForm} p-3 mb-3`}>
                <div className={`${styles.box}`}>
                  <input type="text" name="name" className="form-control m-10" placeholder="Name" />
                </div>
                <div className={`${styles.box}`}>
                  <input type="email" name="email" className="form-control m-10" placeholder="Email" />
                </div>
                <div className={`${styles.box}`}>
                  <input type="text" name="phone" className="form-control m-10" placeholder="Phone" />
                </div>
                <div className={`${styles.box}`}>
                  <input type="message" name="message" className="form-control m-10" placeholder="Message" />
                </div>
                <div className={`${styles.boxBtn}`}>
                  <button type="submit" onclick="submit();" className={`btn btn-defult text-white`} id="contact-submit">
                    <i className="fas fa-paper-plane px-2" />Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}




















// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./Contact.module.css";
// import Footer from "../Footer/Footer";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // send the message to the server
//     try {
//       await axios.post("/api/contact", {
//         name,
//         email,
//         message,
//       });
//       setSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <>
//       <div className={`contact ${styles.contact}`} id="contact">
//         <div className=" text-center position-relative d-flex justify-content-center align-items-center">
//           <h2 className=" mb-0 position-absolute">Get In Touch</h2>
//           <h3 className=" mb-0">G</h3>
//         </div>
//         <p className="text-center w-50 m-auto">
//           Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec
//           pretium. Ut nibh elit, fermentum vel hendrerit vel, dictum nec velit.
//           Morbi volutpat suscipit.
//         </p>
//         <br />
//         <br />
//         <div className="container">
//           <div className="row">
//             <div className={`col-md-6 ${styles.contInfo}`}>
//               <h3 className="lowercase pb-3">
//                 Get Answers And Send Your Opinions:
//               </h3>
//               <div className={`"${styles.contactContent} clearfix"`}>
//                 <div className={`${styles.icon}`}>
//                   <i class="fa-solid fa-location-dot"></i>
//                 </div>
//                 <div className={`${styles.contactText}`}>
//                   <h4>Address</h4>
//                   <p>1650 Lombard Street, San Francisco, CA 94123</p>
//                 </div>
//               </div>
//               <div className={`"${styles.contactContent} clearfix"`}>
//                 <div className={`${styles.icon}`}>
//                   <i class="fa-solid fa-phone"></i>
//                 </div>
//                 <div className={`${styles.contactText}`}>
//                   <h4>Phone</h4>
//                   <p>+1 (415) 876-3250 / +1 (415) 876-3251</p>
//                 </div>
//               </div>
//               <div className={`"${styles.contactContent} clearfix"`}>
//                 <div className={`${styles.icon}`}>
//                   <i class="fa-solid fa-paper-plane"></i>
//                 </div>
//                 <div className={`${styles.contactText}`}>
//                   <h4>Say Hello</h4>
//                   <p>spacezone@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className={`${styles.contactForm} p-3 mb-3`}>
//                 <div className={`${styles.box}`}>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control m-10"
//                     placeholder="Name"
//                   />
//                 </div>
//                 <div className={`${styles.box}`}>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control m-10"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className={`${styles.box}`}>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="form-control m-10"
//                     placeholder="Phone"
//                   />
//                 </div>
//                 <div className={`${styles.box}`}>
//                   <input
//                     type="message"
//                     name="message"
//                     className="form-control m-10"
//                     placeholder="Message"
//                   />
//                 </div>
//                 <div className={`${styles.boxBtn}`}>
//                   <button
//                     type="submit"
//                     onclick="submit();"
//                     className={`btn btn-defult text-white`}
//                     id="contact-submit"
//                   >
//                     <i className="fas fa-paper-plane px-2" />
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
