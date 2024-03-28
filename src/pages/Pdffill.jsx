import React, { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "../components/qr-code.png"; // Import the QR code image
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoHome } from "react-icons/io5";
const Pdffill = () => {
  const [slectpart, setslectpart] = useState("Select");
  const [doc,setDoc]=useState("select");
  const [pdffram, setpdffram] = useState("");
  const [docNum,setDocNum]=useState("");

  const functionset = () => {
    if (slectpart === "Green From") {
      setpdffram("greenFormPdf(.pdf");
    } else if (slectpart === "TSL") {
      setpdffram("ewaygmn(.pdf");
    } else if (slectpart === "DPOD") {
      setpdffram("pg.pdf");
    } else if (slectpart === "GMN") {
      setpdffram("ewaygmn(_.pdf");
    } else if (slectpart === "Select") {
      setpdffram("");
    } else if (slectpart === "viewAll") {
      setpdffram("AllDoc.pdf");
    }
  };

  const handleChange = (e) => {
    setslectpart(e.target.value);
  };
  const handleDocChange=(e)=>{
    setDoc(e.target.value);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-white to-green-400">
      <div className="lg:justify-between mt-10 border-solid border-2 p-3 flex gap-2 rounded-lg bg-white h-[85%] lg:mt-[5%] w-[1500px]">
        <div className="lg:w-[40%]  flex flex-col gap-5 justify-center items-center">
          <div className="lg:flex lg:flex-col lg:h-full lg:justify-evenly lg:w-[100%]  p-5 overflow-y-auto">
            
            <div className="flex h-[80%] flex-col justify-evenly items-center">
              <select
                onClick={functionset}
                onChange={(e) => setslectpart(e.target.value)}
                className="bg-gray-200 lg:w-[50%] p-2 lg:font-semibold rounded-md outline-none border-transparent"
              >
                <option>Select</option>
                <option>Green From</option>
                <option>TSL</option>
                <option>DPOD</option>
                <option>GMN</option>
                <option value="viewAll">View All</option>
              </select>
              {slectpart==="TSL" &&
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={QRCode}
                    alt="QR Code"
                  />
                </div>
              </div>
              }
             
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 border-solid border-5 overflow-hidden w-[700px] border-2xl border-green-700 flex flex-col justify-center items-center rounded-lg">
          <div className="h-[10%]  w-full flex justify-between items-center px-5 mb-5">
          <h1 className="text-lg font-semibold">Document Number : {docNum}</h1>
          <div className="flex items-center gap-2">
          <IoMdCloseCircleOutline className="text-2xl text-black " onClick={()=>{setpdffram("")}}/>
          <Link to={"/dashboard"}>
               <IoHome className="text-2xl"/>
          </Link>
          </div>
          </div>
          <div className="h-[80%] w-full flex justify-center items-center mb-10">
          {pdffram ? (
            <iframe
              title="PDF Viewer"
              src={pdffram}
              className="h-[110%] w-full overflow-hidden border-2xl border-green-700"
            ></iframe>
          ) : (
            <button
              type="submit"
              className={`border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-9 py-2 inline-block font-semibold opacity-50 pointer-events-none ${
                slectpart === "Select" ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              Preview
            </button>
          )}
          </div>
          <div className="w-full h-[10%] flex justify-end mr-10 ">
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdffill;
