import { Routes, Route } from 'react-router-dom';
import logo from '../../logo.svg';
import About from '../About/About';
import Contact from '../ContactUs/Contact';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Recommendation from '../Recommendation/Recommendation';
// import WorkSpace from '../ourWorkSpaces/WorkSpace';
// import Services from '../Services/Services';
//import './App.css';
//className="App"
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          {/* <Route path='Services' element={<Services/>}></Route> */}
          {/* <Route path='Workspace' element={<WorkSpace/>}></Route> */}
          <Route path='Recommendation' element={<Recommendation/>}></Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Register' element={<Register />}></Route>
         <Route path='ownerSignup' element={<ownerSignup/>}></Route>
          <Route path='*' element={<NotFound />}></Route>

        </Routes>

    </>
  );
}

export default App;
