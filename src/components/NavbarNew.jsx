import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeDropdown from "./HomeDropdown";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../Resources/icon.png"
function NavbarNew() {
  
  return (
    <div className="w-full p-2 fixed top-0 z-20 bg-white shadow-gray-500 shadow-md">
      <nav className="flex justify-between p-2">
        <div className="">
          <Link to="/" >
            <div className="flex justify-center items-center h-full ">
            <img src={logo} className='w-8 h-8 flex justify-center items-center'/>
            <p className="text-3xl font-bold text-gray-700 pl-4 text-center relative bottom-[3px]">Transvue Soultions</p>
            </div>
          </Link>
        </div>
        <ul className="flex justify-evenly items-center w-[40%]">
          <li >
            <Link
              to="/"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
             
              
            >
              Home
            </Link>
          </li>
         
          <li>
            <Link
              to="/Product"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
           
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"

            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/Customergreencell"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"

            >
              Customer Green Cell
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarNew;
