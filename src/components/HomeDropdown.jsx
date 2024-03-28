import React from "react";
import { Link } from "react-router-dom";
function HomeDropdown({ loginData, setLoginData, userBtn, setUserBtn }) {
    const handleUser=()=>{
        setUserBtn(!userBtn);
      }
  return (
    <div className="w-[20vw] h-[25vh] flex flex-col justify-evenly items-start absolute bg-white mx-auto z-20 top-20 left-[30vw] shadow-lg rounded-md p-5">
      <div onClick={handleUser}>
        <Link
          to="/about"
          className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
        >
          About Us
        </Link>
      </div>
      <div onClick={handleUser}>
        {" "}
        <Link
          to="/ContactUs"
          className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
        >
          Contact Us
        </Link>
      </div>
      <div onClick={handleUser}>
        {" "}
        <Link
          to="/Customergreencell"
          className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
        >
          Customer Green Cell
        </Link>
      </div>
    </div>
  );
}

export default HomeDropdown;
