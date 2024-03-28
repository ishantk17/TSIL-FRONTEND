// In your Main.jsx file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import GreenForm from '../components/GreenForm';
import GreenFormSubmit from '../components/GreenFormSubmit';
import Ewaybill from '../components/Ewaybill';
import Temp2 from '../components/Temp2';
import Dashboard from './Dashboard';
import Pdffill from './Pdffill';
import Verify from './Verify';
import AuthorizationForm from '../components/AuthorizationForm';
import Payment from '../components/Payment';
import Grpdfalldoc from '../components/Grpdfalldoc';
import Ewaybillgrpalldoc from '../components/Ewaybillgrpalldoc';
import DocUpload from "../components/DocUpload";
import Trip from '../components/Trip';
import VehicleTracking from '../components/VehicleTracking';
import Ewayauth from '../components/Ewayauth';
import Temp23 from '../components/Temp23';
import VehicleRc  from '../components/VehicleRc';
import TrackAuth from '../components/TrackAuth';
import UserDropDown from '../components/UserDropDown';
import TrackVehicle from '../components/TrackVehicle';
import DocumentLibrary from '../components/DocumentLibrary';
import GreenLogistic from '../components/GreenLogistic';
import LoadingPage from '../components/LoadingPage';
import Existinguser from '../components/ExistingUser';
import Misreport from '../components/MisReport';
import Intransitmsi from '../components/InTransitMis';
import MisMain from '../components/MisMain';
import AboutUs from '../components/AboutUs';
import CustomerGreenCell from '../components/CustomerGreenCell';
import ContactUs from '../components/ContactUs';
import { useLocation as useRouteLocation } from 'react-router-dom'
import HomeDropdown from '../components/HomeDropdown';
import Product from "../pages/Product"
import HomeNew from './HomeNew';
import { useState } from 'react';
import NavbarNew from '../components/NavbarNew';
function Main() {
  const [formData,setFormData]=useState({});
  const [greenFormInfo,setGreenFormInfo]=useState({});
  const [userBtn,setUserBtn]=useState(false);
  const [loginData, setLoginData] = useState({
    Phone: "",
    MobileOtp: "",
    isVerified: null,
    auth:true
  });
  const [user,setUser]=useState({});
  const [userCollection,setUserCollection]=useState([])
  const isHomePage = window.location.pathname === '/';
  return (
    <div className='flex flex-col relative'>
     
      <Router>
        {/* { loginData.auth &&  */}
        {/* */}
        {/* } */}
        <Navbar userBtn={userBtn} setUserBtn={setUserBtn} loginData={loginData} setLoginData={setLoginData} user={user}userCollection={userCollection}/>
        <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/LoadingPage" element={<LoadingPage />} />
          <Route path="/Auth" element={<HomePage loginData={loginData} setLoginData={setLoginData} user={user} setUser={setUser} userCollection={userCollection} setUserCollection={setUserCollection} />} />
          <Route path="/green-form" element={<GreenForm formData={formData} greenFormInfo={greenFormInfo} setGreenFormInfo={setGreenFormInfo} />} />
          <Route path="/GreenFormSubmit" element={<GreenFormSubmit  formData={formData}  greenFormInfo={greenFormInfo} />} />
          <Route path="/temp2" element={<Temp2 formData={formData} setFormData={setFormData}/>} />
          <Route path="/temp23" element={<Temp23 formData={formData} greenFormInfo={greenFormInfo}/>} />
          <Route path="/ewaybill" element={<Ewaybill />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<GreenLogistic  />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/pdffill" element={<Pdffill />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/AuthorizationForm" element={<AuthorizationForm  />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/grpdfalldoc" element={<Grpdfalldoc />} />
          <Route path="/Ewaybillgrpalldoc" element={<Ewaybillgrpalldoc />} />
          <Route path="/docupload" element={<DocUpload />} />
          <Route path="/vehicleTracking" element={<VehicleTracking />} />
          <Route path="/Trip" element={<Trip />} />
          <Route path="/ewayauth" element={<Ewayauth />} />
          <Route path="/VehicleRc" element={<VehicleRc />} />
          <Route path="/TrackAuth" element={<TrackAuth />} />
          <Route path="/Trackvehicle" element={<TrackVehicle />} />
          <Route path="/Documentlibrary" element={<DocumentLibrary />} />
          
          <Route path="/Existinguser" element={<Existinguser />} />
          <Route path="/Misreport" element={<Misreport />} />
          <Route path="/Intransitmsi" element={<Intransitmsi />} />
          <Route path="/MisMain" element={<MisMain />} />
          <Route path="/Customergreencell" element={<CustomerGreenCell />} />
          

        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default Main;
