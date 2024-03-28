import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import {
  FaUserCircle,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  // const handleUser = () => {
  //   setUserBtn(!userBtn);
  // };

  return (
    <div className="w-full p-2 fixed bottom-0 z-20 bg-white shadow-gray-500 shadow-md z-10">
      <div className=" flex justify-between p-2 lg:w-full lg:items-center">
        <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://e7.pngegg.com/pngimages/327/982/png-clipart-government-of-india-startup-india-startup-company-entrepreneurship-india-company-text.png"
              alt="AatmaNirbhar Bharat"
              className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://seeklogo.com/images/A/aatmanirbhar-bharat-logo-224D708C71-seeklogo.com.png"
              alt="AatmaNirbhar Bharat"
              className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://assets.mspimages.in/gear/wp-content/uploads/2023/09/make-in-india.jpg"
              alt="Make in India"
              className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://uxdt.nic.in/wp-content/uploads/2020/06/Digital-india-black.jpg?x58648"
              alt="Digital India"
              className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static.wixstatic.com/media/1149db_7831c0d69f0946ca810114b93991fafe~mv2.png/v1/fit/w_2500,h_1330,al_c/1149db_7831c0d69f0946ca810114b93991fafe~mv2.png"
              alt="Digital India"
              className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
        </div>

        <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
          <Link to="/ContactUs" className="lg:text-bold text-xl text-black ">
            Contact Us
          </Link>
          <Link to="/about" className="lg:text-bold text-xl text-black ">
            About Us
          </Link>
          <Link to="/Customergreencell" className="lg:text-bold text-xl text-black ">
            Customer Green Cell
          </Link>
        </div>
        <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#3F51B5"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <radialGradient
              id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
              cx="32"
              cy="32.5"
              r="31.259"
              gradientTransform="matrix(1 0 0 -1 0 64)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#efdcb1"></stop>
              <stop offset="0" stop-color="#f2e0bb"></stop>
              <stop offset=".011" stop-color="#f2e0bc"></stop>
              <stop offset=".362" stop-color="#f9edd2"></stop>
              <stop offset=".699" stop-color="#fef4df"></stop>
              <stop offset="1" stop-color="#fff7e4"></stop>
            </radialGradient>
            <path
              fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
              d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
            ></path>
            <radialGradient
              id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
              cx="18.51"
              cy="66.293"
              r="69.648"
              gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".073" stop-color="#eacc7b"></stop>
              <stop offset=".184" stop-color="#ecaa59"></stop>
              <stop offset=".307" stop-color="#ef802e"></stop>
              <stop offset=".358" stop-color="#ef6d3a"></stop>
              <stop offset=".46" stop-color="#f04b50"></stop>
              <stop offset=".516" stop-color="#f03e58"></stop>
              <stop offset=".689" stop-color="#db359e"></stop>
              <stop offset=".724" stop-color="#ce37a4"></stop>
              <stop offset=".789" stop-color="#ac3cb4"></stop>
              <stop offset=".877" stop-color="#7544cf"></stop>
              <stop offset=".98" stop-color="#2b4ff2"></stop>
            </radialGradient>
            <path
              fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
              d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
            ></path>
            <path
              fill="#fff"
              d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
            ></path>
            <path
              fill="#fff"
              d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
            ></path>
            <circle cx="41" cy="25" r="2" fill="#fff"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4caf50"
              d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
            ></path>
            <path
              fill="#1e88e5"
              d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
            ></path>
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            ></polygon>
            <path
              fill="#c62828"
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            ></path>
            <path
              fill="#fbc02d"
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;







// import React, { useState } from "react";
// import UserDropDown from "./UserDropDown";
// import {
//   FaUserCircle,
//   FaInstagram,
//   FaFacebook,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// function Footer({ userBtn, setUserBtn }) {
//   const handleUser = () => {
//     setUserBtn(!userBtn);
//   };

//   return (
//     <div className="w-full p-2 fixed bottom-0 z-20 bg-white shadow-gray-500 shadow-md">
//       <div className="flex justify-between p-2 lg:w-full lg:items-center">
//         <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://e7.pngegg.com/pngimages/327/982/png-clipart-government-of-india-startup-india-startup-company-entrepreneurship-india-company-text.png"
//               alt="AatmaNirbhar Bharat"
//               className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
//             />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://seeklogo.com/images/A/aatmanirbhar-bharat-logo-224D708C71-seeklogo.com.png"
//               alt="AatmaNirbhar Bharat"
//               className="h-15 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
//             />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://assets.mspimages.in/gear/wp-content/uploads/2023/09/make-in-india.jpg"
//               alt="Make in India"
//               className="h-20 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
//             />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://uxdt.nic.in/wp-content/uploads/2020/06/Digital-india-black.jpg?x58648"
//               alt="Digital India"
//               className="h-20 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
//             />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://static.wixstatic.com/media/1149db_7831c0d69f0946ca810114b93991fafe~mv2.png/v1/fit/w_2500,h_1330,al_c/1149db_7831c0d69f0946ca810114b93991fafe~mv2.png"
//               alt="Digital India"
//               className="h-20 w-auto scale-[0.8] hover:scale-[1] cursor-pointer"
//             />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer"></a>
//         </div>

//         <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
//           <Link to="/ContactUs" className="lg:text-bold text-xl text-black ">
//             Contact Us
//           </Link>
//           <Link to="/ContactUs" className="lg:text-bold text-xl text-black ">
//             About Us
//           </Link>
//           <Link to="/ContactUs" className="lg:text-bold text-xl text-black ">
//             Customer feedback
//           </Link>
//         </div>
//         <div className="flex space-x-8 lg:w-[30%] lg:justify-between lg:items-center ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="48"
//             height="48"
//             viewBox="0 0 48 48"
//           >
//             <path
//               fill="#3F51B5"
//               d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
//             ></path>
//             <path
//               fill="#FFF"
//               d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
//             ></path>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//           >
//             <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="48"
//             height="48"
//             viewBox="0 0 48 48"
//           >
//             <path
//               fill="#fff"
//               d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
//             ></path>
//             <path
//               fill="#fff"
//               d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
//             ></path>
//             <path
//               fill="#cfd8dc"
//               d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
//             ></path>
//             <path
//               fill="#40c351"
//               d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
//             ></path>
//             <path
//               fill="#fff"
//               fill-rule="evenodd"
//               d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="64"
//             height="64"
//             viewBox="0 0 64 64"
//           >
//             <radialGradient
//               id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
//               cx="32"
//               cy="32.5"
//               r="31.259"
//               gradientTransform="matrix(1 0 0 -1 0 64)"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop offset="0" stop-color="#efdcb1"></stop>
//               <stop offset="0" stop-color="#f2e0bb"></stop>
//               <stop offset=".011" stop-color="#f2e0bc"></stop>
//               <stop offset=".362" stop-color="#f9edd2"></stop>
//               <stop offset=".699" stop-color="#fef4df"></stop>
//               <stop offset="1" stop-color="#fff7e4"></stop>
//             </radialGradient>
//             <path
//               fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
//               d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
//             ></path>
//             <radialGradient
//               id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
//               cx="18.51"
//               cy="66.293"
//               r="69.648"
//               gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop offset=".073" stop-color="#eacc7b"></stop>
//               <stop offset=".184" stop-color="#ecaa59"></stop>
//               <stop offset=".307" stop-color="#ef802e"></stop>
//               <stop offset=".358" stop-color="#ef6d3a"></stop>
//               <stop offset=".46" stop-color="#f04b50"></stop>
//               <stop offset=".516" stop-color="#f03e58"></stop>
//               <stop offset=".689" stop-color="#db359e"></stop>
//               <stop offset=".724" stop-color="#ce37a4"></stop>
//               <stop offset=".789" stop-color="#ac3cb4"></stop>
//               <stop offset=".877" stop-color="#7544cf"></stop>
//               <stop offset=".98" stop-color="#2b4ff2"></stop>
//             </radialGradient>
//             <path
//               fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
//               d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
//             ></path>
//             <path
//               fill="#fff"
//               d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
//             ></path>
//             <path
//               fill="#fff"
//               d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
//             ></path>
//             <circle cx="41" cy="25" r="2" fill="#fff"></circle>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="48"
//             height="48"
//             viewBox="0 0 48 48"
//           >
//             <path
//               fill="#0288D1"
//               d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
//             ></path>
//             <path
//               fill="#FFF"
//               d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
//             ></path>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="48"
//             height="48"
//             viewBox="0 0 48 48"
//           >
//             <path
//               fill="#4caf50"
//               d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
//             ></path>
//             <path
//               fill="#1e88e5"
//               d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
//             ></path>
//             <polygon
//               fill="#e53935"
//               points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
//             ></polygon>
//             <path
//               fill="#c62828"
//               d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
//             ></path>
//             <path
//               fill="#fbc02d"
//               d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
