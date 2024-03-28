import React from "react";
import { TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import HomeDropdown from '../components/HomeDropdown';
import Footer from "./Footer";
function GreenLogistic() {
  const [eye,setEye]=useState({
    left:false,
    right:false
  })
const handleEye = (num) => {
  if(num === 0) setEye({...eye, left: !eye.left});
  else if(num === 1) setEye({...eye, right: !eye.right});
};


  return (
    <div className=" flex  h-screen relative p-36  justify-center items-center bg-[url(https://cdn.pixabay.com/photo/2016/11/17/10/04/road-1831154_1280.jpg)] bg-cover bg-center ">
      <div className=" lg:bg-black lg:bg-opacity-50  lg:rounded-mx lg:w-[80%] text-white  p-5  flex flex-col items-center justify-evenly hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out">
       
      <div className=" mt-[2%]  flex flex-col justify-evenly items-center gap-5">
        <h2 className="font font-extrabold p-2 text-[200%] text-center">
          Experience the Paperless and secure-digital green logistics !
        </h2>
        <Link to={"/ewayauth"}>
        <button
          className="border-2 border-green-500 text-[120%] bg-green-500 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2 mb-16"
          
        >
          Green Logistics
        </button>
        </Link>
        </div>
        <div className="  flex flex-col justify-center items-center gap-2 ">
          <div>
            <h2 className="font-extrabold text-2xl text-green-600">Historical Statistical Data</h2>
          </div>
          <div className="flex justify-center items-center gap-10">
               <h3 className="font-semibold text-2xl text-gray-300">In-Transit</h3>
               <h3 className="font-semibold text-2xl text-gray-300">Delivered</h3>
          </div>

          <div className="  flex justify-center items-center gap-5 mt-[-5%]">
            {eye.left?<div className="relative">
      <div onClick={() => handleEye(0)} className="flex justify-center items-center relative">
        <MdRemoveRedEye className="text-[8rem] text-white" />
        <p className="absolute  text-black text-lg font-bold">1</p>
      </div>
    </div> : <TbEyeClosed className="text-[8rem] text-white" onClick={()=>handleEye(0)}/> }
            {eye.right?  <div className="relative">
      <div onClick={() => handleEye(1)} className="flex justify-center items-center relative">
        <MdRemoveRedEye className="text-[8rem] text-white" />
        <p className="absolute text-black text-lg font-bold">6</p>
      </div>
    </div>   : <TbEyeClosed className="text-[8rem] text-white" onClick={()=>handleEye(1)}/>}
          </div>
           
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default GreenLogistic;
