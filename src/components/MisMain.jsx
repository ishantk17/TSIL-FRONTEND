import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function MisMain() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://img.freepik.com/premium-photo/business-people-meeting-office-writing-memos-sticky-notes-planning-strategy-brainstorming-colleagues-thinking-concept_1423-3766.jpg?w=1060)] bg-cover bg-center">
    <div className=" lg:bg-black lg:bg-opacity-50  lg:rounded-mx lg:w-[40%] lg:h-[35%] text-white h-1/3  p-5  flex flex-col items-center justify-evenly hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out ">

      <h2 className="font font-extrabold p-2 text-3xl text-center">
         Warp to MIS Reports Universe
      </h2>
      {/* <p className="text-center mb-4">
        Monitor your vehicle's location in
        real-time, get instant alerts, and access historical data. Start
        tracking now for peace of mind on  go!
      </p> */}
      <Link to={'/Existinguser'}>
      <button
        className="border-2 border-green-500 bg-green-500 text-[120%]  text-white  rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
        
      >
        Begin Your Data Journey
      </button>
      </Link>
    </div>
    <Footer/>
  </div>
  )
}

export default MisMain

// 