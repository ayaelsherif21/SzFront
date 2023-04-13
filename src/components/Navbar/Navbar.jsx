import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-light text-white ${styles.navBg}`}>
<div className="container-fluid">
  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className={`navbar-toggler-icon ${styles.togglerIcon}`} />
  </button>
<<<<<<< Updated upstream
  <a className="navbar-brand text-white" href="#">SPACE ZONE</a>
  <div className={`collapse navbar-collapse  ${styles.items}`} id="navbarTogglerDemo03">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item active">
  <Link className="nav-link text-white" to="Home">Home <span className="sr-only">(current)</span></Link>
</li>
<li className="nav-item">
  <Link className="nav-link text-white" to="About">About</Link>
</li>
{/* <li className="nav-item">
  <Link className="nav-link" to="WorkSpace">Workspaces</Link>
</li> */}
<li className="nav-item">
  <Link className="nav-link text-white" to="Recommendation">Recommendation</Link>
</li>
<li className="nav-item">
  <Link className="nav-link text-white" to="WorkSpace">WorkSpace</Link>
</li>
<li className="nav-item">
  <Link className="nav-link  text-white" to="Contact">Contact Us</Link>
</li>
</ul>
<ul className='list-unstyled d-flex mb-lg-0'>
<div className="social-Links d-flex align-items-center">
  <i className='fab fa-facebook'></i>
  <i className='fab fa-instagram mx-3'></i>
  <i className='fab fa-twitter'></i>

</div>
<li className="nav-item mx-2">
  <Link className="nav-link" to="Login">Login</Link>
</li>
<li className="nav-item mx-2">
  <Link className="nav-link" to="Register">Register</Link>
</li>
{/* <li className="nav-item mx-2">
  <Link className="nav-link" to="Osignup">Owner Signup</Link>
</li>
<li className="nav-item mx-2">
  <Link className="nav-link" to="Ologin">Owner Login</Link>
</li>
<li className="nav-item mx-2">
  <Link className="nav-link" to="ResetPassword">Reset</Link>
</li> */}
<li className="nav-item mx-2">
  <Link className="nav-link" to="Login">Logout</Link>
</li>
</ul>
=======
  <div className={`collapse navbar-collapse  ${styles.items}`} id="navbarSupportContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active ">
        <Link className="nav-link text-white" to="Home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="About">About</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link text-white" to="Services">Services</Link>
      </li> */}
      {/* <li className="nav-item">
        <Link className="nav-link" to="WorkSpace">Workspaces</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link text-white" to="Recommendation">Recommendation</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link  text-white" to="Contact">Contact Us</Link>
      </li>
    </ul>
    <ul className='list-unstyled d-flex mb-lg-0'>
      <div className="social-Links d-flex align-items-center">
        <i className='fab fa-facebook'></i>
        <i className='fab fa-instagram mx-3'></i>
        <i className='fab fa-twitter'></i>

      </div>
      <li className="nav-item mx-2">
        <Link className="nav-link" to="Login">Login</Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link" to="Register">Register</Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link" to="Osignup">Owner</Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link" to="Login">Logout</Link>
      </li>
    </ul>
>>>>>>> Stashed changes
  </div>
</div>
</nav> 

//    <nav className={`navbar navbar-expand-lg fixed-top navbar-light ${styles.navBg}`}>
//     <div className="container-fluid">
//   <a className="navbar-brand  text-white" href="#">SPACE ZONE</a>

//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportContent" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon" />
//   </button>
//   <div className={`collapse navbar-collapse  ${styles.items}`} id="navbarSupportContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item active ">
//         <Link className="nav-link text-white" to="Home">Home <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link text-white" to="About">About</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link text-white" to="Services">Services</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="WorkSpace">Workspaces</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link text-white" to="Recommendation">Recommendation</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link  text-white" to="Contact">Contact Us</Link>
//       </li>
//     </ul>
//     <ul className='list-unstyled d-flex mb-lg-0'>
//       <div className="social-Links d-flex align-items-center">
//         <i className='fab fa-facebook'></i>
//         <i className='fab fa-instagram mx-3'></i>
//         <i className='fab fa-twitter'></i>

//       </div>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="Login">Login</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="Register">Register</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="Osignup">Owner Signup</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="Ologin">Owner Login</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="ResetPassword">Reset</Link>
//       </li>
//       <li className="nav-item mx-2">
//         <Link className="nav-link" to="Login">Logout</Link>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

  )
}
