import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeDropdown from "./HomeDropdown";
import { RiLogoutCircleRLine } from "react-icons/ri";
function Navbar({userBtn,setUserBtn,loginData, setLoginData,user, userCollection}) {
  const handleUser=()=>{
    setUserBtn(!userBtn);
  }
  const handleAuth = () => {
    setLoginData({ ...loginData,isVerified:null, auth: false });
    setUserBtn(false);
  };
  return (
    <div className="w-full p-2 fixed top-0 z-20 bg-white shadow-gray-500 shadow-md">
      <nav className="flex justify-between p-2">
        <div className="">
          <Link to="/dashboard" className="text-3xl font-bold text-gray-700 pl-4">
            Transvue Soultions
          </Link>
        </div>
        <ul className="flex justify-evenly items-center w-[40%]">
          <li onClick={handleUser}>
            <Link
              to="/dashboard"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
              onMouseEnter={(handleUser)}
              
            >
              Home
            </Link>
          </li>
         
          <li>
            <Link
              to="/Trackvehicle"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
              onMouseEnter={()=>setUserBtn(false)}
            >
              Wheel-On-Drive
            </Link>
          </li>
          <li>
            <Link
              to="/Documentlibrary"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
              onMouseEnter={()=>setUserBtn(false)}
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/MisMain"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
              onMouseEnter={()=>setUserBtn(false)}
            >
              Info-Desk
            </Link>
          </li>
          {/* <li>
            <Link
              to="/temp2"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Fill e-way Bill
            </Link>
          </li> */}
        </ul>
        <div className="flex items-center gap-5">
          <h2 className="text-md font-bold text-green-500  ">Welcome {user.username} !!</h2>
          <Link to={"/Auth"}>
          <RiLogoutCircleRLine className="text-xl text-black mr-3" onClick={handleAuth}/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
