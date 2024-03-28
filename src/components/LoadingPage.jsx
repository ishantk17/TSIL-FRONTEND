import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import Truck from "../Animations/truck.json"
import Earth from "../Animations/earth.json"
import Factory from "../Animations/Factory.json"
import Warehouse from "../Animations/Warehouse.json"
import CargoTruck from "../Animations/CargoTruck.json"
import Location from "../Animations/Location.json"
import "../css/LoadingPage.css"
function LoadingPage() {
  
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 500);
    if(counter === 0) {
      navigate('/Auth'); // replace '/next-page' with the path of the page you want to redirect to
    }
    return () => clearInterval(timer);
  }, [counter, navigate]);

  function createOptions(animationData,speed=3) {
    return {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
      speed: speed,
    };
  }

  const TruckOptions = createOptions(Truck,1);
  const CargoTruckOptions = createOptions(CargoTruck,1);

  const FactoryOptions = createOptions(Factory,1);
  const WarehouseOptions = createOptions(Warehouse, 4);
  const LocationOptions = createOptions(Location, 4);

  return (
    <div className="w-screen h-screen bg-[url(https://img.freepik.com/free-photo/aerial-view-winding-road-surrounded-by-greens-trees_181624-38224.jpg?w=1060&t=st=1708156294~exp=1708156894~hmac=83c0f67f0bf8210a4782851395afd2b6ba245aa9b3cceaebfd97ef5c652c6e5a)] bg-cover bg-center p-5 absolute z-40" >
      <div className="w-full h-[15%] flex flex-col items-center justify-evenly">
         <h1 className="text-white font-extrabold text-3xl">Welcome To Green Logistics </h1>
         <p className="text-white text-5xl">Let's Join Hands To make Earth Green </p>
         <div className="absolute top-0 right-0 p-4 text-white text-2xl">{counter}</div>
      </div>
      <div className="w-full h-[75%] flex items-center justify-between">
      <Lottie
        options={FactoryOptions}
        height={300}
        width={300}
      />
      <Lottie
        options={CargoTruckOptions}
        height={200}
        width={200}
        style={{
          transform: "translateX(-40%)",
          animation: "moveTruck 5s infinite linear",
        }}
      />
      <Lottie
        options={WarehouseOptions}
        height={300}
        width={300}
      />
      </div>
      <div className="w-full flex justify-center h-[10%]">
        <Link to={'/Auth'}>
        <button className="px-7 py-2 bg-green-600 text-white font-semibold text-lg rounded-md shadow-lg">Skip</button>
        </Link>
      </div>
    </div>
  );
}

export default LoadingPage;
