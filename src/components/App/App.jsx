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
import Osignup from '../Owner/Osignup';
import Ologin from '../Owner/Ologin';
import ResetPassword from '../Login/ResetPassword';
import ForgetPassword from '../Login/ForgetPassword';
import WorkSpace from '../ourWorkSpaces/WorkSpace';
import './App.css';
import Footer from '../Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
    
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Workspace' element={<WorkSpace/>}></Route>
          <Route path='Recommendation' element={<Recommendation/>}></Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='Login' element={<Login/>}></Route>
          <Route path='Register' element={<Register/>}></Route>
          <Route path='ResetPassword' element={<ResetPassword/>}></Route>
          <Route path='ForgetPassword' element={<ForgetPassword/>}></Route>
         <Route path='Osignup' element={<Osignup/>}></Route>
         <Route path='Ologin' element={<Ologin/>}></Route>
          <Route path='*' element={<NotFound />}></Route>

        </Routes>
        <Footer/>

    </>
  );
}

export default App;
