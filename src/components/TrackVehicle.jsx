import React from "react";
import { Link } from "react-router-dom";
function TrackVehicle() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(https://img.freepik.com/premium-vector/location-tracks-dashboard-city-street-road-city-streets-data-path-turns-destination-mark_753943-140.jpg?w=996)] bg-contain bg-center">

      <div className="lg:bg-black lg:bg-opacity-50  lg:rounded-mx lg:w-[60%] lg:h-[40%] text-white h-1/3  p-5  flex flex-col items-center justify-evenly hover:w-screen  hover:transition-all hover:duration-500 hover:ease-in-out shadow-xl">
        <h2 className="font font-extrabold p-2 text-3xl text-center">
          Explore Track My Vehicle for real-time insights on the go!
        </h2>
        {/* <p className="text-center mb-4">
          Monitor your vehicle's location in
          real-time, get instant alerts, and access historical data. Start
          tracking now for peace of mind on  go!
        </p> */}
        <Link to={'/VehicleTracking'}>
        <button
          className="border-2 border-green-500 bg-green-500 text-[120%]  text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 ml-2"
          
        >
          Track My vehicle
        </button>
        </Link>
      </div>
    </div>
  );
}

export default TrackVehicle;
