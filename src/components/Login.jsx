// import React from "react";

// import Otpverify from "./Otpverifiy";
// const Login = ({userAuth, setUserAuth}) => {
 

//   return (
//     <div className="flex flex-col justify-center items-center">
//        <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
//    <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
//       <Otpverify />
// </div>

//   );
// };

// export default Login;

































// // import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// // import { CgSpinner } from "react-icons/cg";
// // // import "./index.css"
// // import OtpInput from "otp-input-react";
// // import { useEffect, useState } from "react";
// // import PhoneInput from "react-phone-input-2";
// // import "react-phone-input-2/lib/style.css";
// // import { auth } from "./firebase.config";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { toast, Toaster } from "react-hot-toast";
// // import loginanimation from "../Animations/Animation - 1709015744141.json"

// // import { Link, useNavigate } from "react-router-dom";
// // import Lottie from "react-lottie";



// // const Login = () => {
// //   const [otp, setOtp] = useState("");
// //   const [ph, setPh] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showOTP, setShowOTP] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

   

// //     function createOptions(animationData,speed=3) {
// //       return {
// //         loop: true,
// //         autoplay: true, 
// //         animationData: animationData,
// //         rendererSettings: {
// //           preserveAspectRatio: 'xMidYMid slice'
// //         },
// //         speed: speed,
// //       };
// //     }

// //     const loginanimationOptions = createOptions(loginanimation,1);


// //   useEffect(() =>{
// //     localStorage.setItem("dataKey", JSON.stringify(ph));
// //   },[ph])


// //  function setotpheadline() {
// //     try {
// //       const storedPh = localStorage.getItem('dataKey');
// //       if (storedPh) {
// //         const parsedPh = JSON.parse(storedPh);
// //         setPhone(parsedPh);
// //       }
// //     } catch (error) {
// //       console.error("Error parsing data from localStorage:", error);
// //     }
// //   };
  
// //  console.log(phone);
// // //  console.log("ff");


// // useEffect(() => {
// //   const timer = setTimeout(() => {
// //     if (user) {
// //       navigate("/dashboard");
// //     }
// //   }, 8000);
// // }, [user]);


// //   function onCaptchVerify() {
// //     if (!window.recaptchaVerifier) {
// //       window.recaptchaVerifier = new RecaptchaVerifier(
// //         "recaptcha-container",
// //         {
// //           size: "invisible",
// //           callback: (response) => {
// //             onSignup();
// //           },
// //           "expired-callback": () => {},
// //         },
// //         auth
// //       );
// //     }
// //   }

// //   function onSignup() {
// //     setLoading(true);
// //     onCaptchVerify();
// //     const appVerifier = window.recaptchaVerifier;

// //     const formatPh = "+" + ph;

// //     signInWithPhoneNumber(auth, formatPh, appVerifier)
// //       .then((confirmationResult ) => {
// //         window.confirmationResult = confirmationResult;
// //         setLoading(false);
// //         setShowOTP(true);
// //         toast.success("OTP sended successfully!");
// //         setotpheadline();
// //       })
// //       .catch((error) => {
        
// //         console.log(error);
// //         setLoading(false);
// //       });
// //   }
  
// //   function resendfuntion(){
// //     const storedph =  localStorage.getItem('dataKey');
// //     if (storedph) {
// //       setPh(JSON.parse(storedph));
// //    }
// //    onSignup();  
// //   }

// //   function onOTPVerify() {
// //     setLoading(true);
// //     window.confirmationResult
// //       .confirm(otp)
// //       .then(async (res) => {
// //         console.log(res);
// //         setUser(res.user);
// //         setLoading(false);  
// //     localStorage.removeItem('dataKey');
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //         setLoading(false);
// //       });
// //   }


// //   return (
// //     <div className="flex flex-col justify-center items-center">
// //        <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
// //    <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
// //     <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%]  ">
// //       <div className="w-80 flex flex-col gap-2 rounded-lg p-4 mr-2" >
// //         <Toaster toastOptions={{ duration: 4000 }} />
// //         <div id="recaptcha-container"></div>
// //         {user ?  (
// //           <>
// //           <Lottie
// //         options={loginanimationOptions}
// //         height={200}
// //         width={200}
    
// //       />
// //           </>
          
// //         ) : (
// //           <>
// //           {showOTP ? (
// //             <>
           
// // <label
// //            htmlFor="otp"
// //            className="font-small text-1xl text-black text-center"
// //          >
// //           An OTP is sent to +{phone}
// //          </label>
// //             <OtpInput
// //               value={otp}
// //               onChange={setOtp}
// //               OTPLength={6}
// //               otpType="number"
// //               disabled={false}
// //               autoFocus
// //               className="opt-container"
              
// //             ></OtpInput>
// //             <div className=" resendbutton text-aling flex lg:space-between lg:w-[150%]" >
// //             <div className="resendbutton text-aling"  >
// //             <label
// //            htmlFor="otp"
// //            className="font-small text-1xl text-black text-center"
// //            style={{marginLeft:32}}
// //          >
// //         OTP Code?
// //          </label>
// //          <button
// //               onClick={resendfuntion}
// //               style={{marginLeft:4, color: "green"}}
// //                >
// //               <span>Resend</span>
// //             </button>
// //             </div>

// //             <button
// //               onClick={onOTPVerify}
// //               className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
// //                >
// //                {loading ? ( 
// //     <CgSpinner size={20} className="mt-1 animate-spin" />
// //   ) : (
// //     <span>Verify</span>
// //   )}

// //             </button>
// //             </div>

// //           </>
          
// //             ) : (
// //               <>


// //                 <PhoneInput country={"in"} value={ph} onChange={setPh} className="" /> 
// //                 <button
// //                   onClick={onSignup}
                
// //                   className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

// //                 >

// //          {loading ? ( 
// //     <CgSpinner size={20} className="mt-1 animate-spin" />
// //   ) : (
// //     <span>Get OTP</span>
// //   )}
// //                 </button>
     
// //            </>
// //             )}
// //            </>
// //         )}
// //       </div>
// //     </section>
      
// // </div>

// //   );
// // };

// // export default Login;































// // import React from "react";
// // import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// // import { CgSpinner } from "react-icons/cg";
// // // import "./index.css"
// // import OtpInput from "otp-input-react";
// // import { useEffect, useState } from "react";
// // // import PhoneInput from "react-phone-input-2";
// // import "react-phone-input-2/lib/style.css";
// // import { auth } from "./firebase.config";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { toast, Toaster } from "react-hot-toast";

// // import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// // import PhoneInput from "react-phone-input-2";
// // import { CiMobile1 } from "react-icons/ci";
// // import { FaRegTimesCircle } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";


// // function Login({loginData, setLoginData,auth, setAuth}) {
// //   const navigate = useNavigate();
// //   const [btn,setBtn]=useState(false);
// //   const [otp, setOtp] = useState("");
// //   const [ph, setPh] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showOTP, setShowOTP] = useState(false);
// //   const [user, setUser] = useState(null);


// //       useEffect(() =>{
// //         localStorage.setItem("dataKey", JSON.stringify(ph));
// //       },[ph])
    
    
// //      function setotpheadline() {
// //         try {
// //           const storedPh = localStorage.getItem('dataKey');
// //           if (storedPh) {
// //             const parsedPh = JSON.parse(storedPh);
// //             setPhone(parsedPh);
// //           }
// //         } catch (error) {
// //           console.error("Error parsing data from localStorage:", error);
// //         }
// //       };
      
// //      console.log(phone);
// //     //  console.log("ff");
    
    
// //       function onCaptchVerify() {
// //         if (!window.recaptchaVerifier) {
// //           window.recaptchaVerifier = new RecaptchaVerifier(
// //             "recaptcha-container",
// //             {
// //               size: "invisible",
// //               callback: (response) => {
// //                 onSignup();
// //               },
// //               "expired-callback": () => {},
// //             },
// //             auth
// //           );
// //         }
// //       }
    
// //       function onSignup() {
// //         setLoading(true);
// //         onCaptchVerify();
// //         const appVerifier = window.recaptchaVerifier;
    
// //         const formatPh = "+" + ph;
    
// //         signInWithPhoneNumber(auth, formatPh, appVerifier)
// //           .then((confirmationResult ) => {
// //             window.confirmationResult = confirmationResult;
// //             setLoading(false);
// //             setShowOTP(true);
// //             toast.success("OTP sended successfully!");
// //             setotpheadline();
// //           })
// //           .catch((error) => {
            
// //             console.log(error);
// //             setLoading(false);
// //           });
// //       }
      
// //       function resendfuntion(){
// //         const storedph =  localStorage.getItem('dataKey');
// //         if (storedph) {
// //           setPh(JSON.parse(storedph));
// //        }
// //        onSignup();  
// //       }
    
// //       function onOTPVerify() {
// //         setLoading(true);
// //         window.confirmationResult
// //           .confirm(otp)
// //           .then(async (res) => {
// //             console.log(res);
// //             setUser(res.user);
// //             setLoading(false);  
// //         localStorage.removeItem('dataKey');
// //           })
// //           .catch((err) => {
// //             console.log(err);
// //             setLoading(false);
// //           });
// //       }
    




// //   const correctOTP = "931869";

// //   // const dashboardgo = () => {
// //   //   navigate("/dashboard");
// //   // };

// //   const handleButton=()=>{
// //     setBtn(true);
// //   }
// //   const handleOtpVerification = () => {
// //     if (JSON.stringify(loginData.MobileOtp) === JSON.stringify(correctOTP)) {
// //       setLoginData({ ...loginData, isVerified: true });
// //     } else {
// //       setLoginData({ ...loginData, isVerified: false });
// //     }
// //   };
// //   const handleChange = (e) => {
// //     // setUser({...user,[e.target.name]:e.target.value})
// //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
// //     setPh(e.target.value);
// //   };
// //   const handleAuth = () => {
// //     setLoginData({ ...loginData, auth: true });
// //   };
// //   const isDisabled = () => {
// //     return !loginData.isVerified;
// //   };
// //   return (
// //     <div className="flex flex-col justify-center items-center">
// //       <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
// //       <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
// //       <form action="" className="">
        
// //       <section className="bg-emerald-500 flex items-center justify-center h-[45%]  ">
// //       <div className="" >
// //         <Toaster toastOptions={{ duration: 4000 }} />
// //         <div id="recaptcha-container"></div>
// //         {user ?  (
// //           <>
// //               <Toaster toastOptions={{ duration: 4000 }} />             
// //           </>
          
// //         ) : (
// //           <div className="w-80 flex flex-col gap-2 rounded-lg p-4  ">
// //             {showOTP ? (
// //             <>
// //             <label
// //            htmlFor="otp"
// //            className="font-small text-1xl text-black text-center"
// //          >
// //           An OTP is sent to +{phone}
// //          </label>
// //             <OtpInput
// //               value={otp}
// //               onChange={setOtp}
// //               OTPLength={6}
// //               otpType="number"
// //               disabled={false}
// //               autoFocus
// //               className="opt-container"
              
// //             ></OtpInput>
// //             <div className=" resendbutton text-aling flex lg:space-between lg:w-[150%]" >
// //             <div className="resendbutton text-aling"  >
// //             <label
// //            htmlFor="otp"
// //            className="font-small text-1xl text-black text-center"
// //            style={{marginLeft:32}}
// //          >
// //           OTP ?
// //          </label>
// //          <button
// //               onClick={resendfuntion}
// //               style={{marginLeft:4, color: "green"}}
// //                >
// //               <span>Resend</span>
// //             </button>
// //             </div>

// //             <button
// //               onClick={onOTPVerify}
// //               className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
// //                >
// //               <span>Verify</span>
// //             </button>
// //             </div>
// //           </>
          
// //             ) : (
// //               <>
           
// //                 <PhoneInput country={"in"} value={ph} onChange={setPh} /> 
// //                 <button
// //                   onClick={onSignup}
                
// //                   className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

// //                 >
// //                   {loading && (
// //                     <CgSpinner size={20} className="mt-1 animate-spin" />
// //                   )}
// //                   <span>Get OTP</span>
// //                 </button>
          
// //            </>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //         <Link to={"/Dashboard"}>
// //           <button
// //             type="submit"
// //             disabled={isDisabled()}
// //             className={`border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold ${
// //               !isDisabled()
// //                 ? "text-white bg-green-600 hover:bg-green-700"
// //                 : "text-green-500 cursor-not-allowed"
// //             }`}
// //             onClick={handleAuth}
// //           >
// //             Login
// //           </button>
// //         </Link>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;








// // import React from "react";
// // import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// // import { CiMobile1 } from "react-icons/ci";
// // import { useState } from "react";
// // import { FaRegTimesCircle } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";
// // function Login({loginData, setLoginData,auth, setAuth}) {
// //   const navigate = useNavigate();
// //   const [btn,setBtn]=useState(false);
// //   const correctOTP = "931869";
// //   const dashboardgo = () => {
// //     navigate("/dashboard");
// //   };
// //   const handleButton=()=>{
// //     setBtn(true);
// //   }
// //   const handleOtpVerification = () => {
// //     if (JSON.stringify(loginData.MobileOtp) === JSON.stringify(correctOTP)) {
// //       setLoginData({ ...loginData, isVerified: true });
// //     } else {
// //       setLoginData({ ...loginData, isVerified: false });
// //     }
// //   };
// //   const handleChange = (e) => {
// //     // setUser({...user,[e.target.name]:e.target.value})
// //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
// //   };
// //   const handleAuth = () => {
// //     setLoginData({ ...loginData, auth: true });
// //   };
// //   const isDisabled = () => {
// //     return !loginData.isVerified;
// //   };

// //   return (
// //     <div className=" p-[20%] flex flex-col justify-center items-center">
// //       <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
// //       <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
// //       <form action="" className="">
// //         <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 rounded-md">
// //           <CiMobile1 className="text-gray-400 mr-2" />
// //           <input
// //             type="number"
// //             className="bg-gray-200 outline-none text-sm flex-1"
// //             name="Phone"
// //             placeholder="Enter Your Mobile Number"
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="flex items-centre mb-4">
// //           <div className="bg-gray-200  flex flex-row items-center mr-2 rounded-md">
// //             <input
// //               type="number"
// //               className="bg-gray-200 p-2 outline-none text-sm flex-1 rounded-lg"
// //               name="MobileOtp"
// //               onChange={handleChange}
// //               placeholder="Enter OTP"
// //               required
// //             />

// //             {/* <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/> */}
// //             {loginData.isVerified === true && (
// //               <IoIosCheckmarkCircleOutline className="mr-2 text-2xl text-green-500" />
// //             )}
// //             {loginData.isVerified === false && (
// //               <FaRegTimesCircle className="mr-2 text-2xl text-red-500" />
// //             )}
// //           </div>
// //           {!btn ?<button
// //             type="button"
// //             className="border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
// //             onClick={handleButton}
// //           >
// //             Get OTP
// //           </button> : <button
// //             type="button"
// //             className="border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
// //             onClick={handleOtpVerification}
// //           >
// //             Verify
// //           </button>}
          
// //         </div>
// //         <Link to={"/Dashboard"}>
// //           <button
// //             type="submit"
// //             disabled={isDisabled()}
// //             className={`border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold ${
// //               !isDisabled()
// //                 ? "text-white bg-green-600 hover:bg-green-700"
// //                 : "text-green-500 cursor-not-allowed"
// //             }`}
// //             onClick={handleAuth}
// //           >
// //             Login
// //           </button>
// //         </Link>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;

import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
// import "./index.css"
import OtpInput from "otp-input-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import loginanimation from "../Animations/Animation - 1709015744141.json"

import { Link, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import Otpverify from "./Otpverifiy";

const Login = ({userAuth, setUserAuth}) => {

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [maxLimitReached, setMaxLimitReached] = useState(false); // State to track if the maximum limit message has been shown

  const navigate = useNavigate();

   

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

    const loginanimationOptions = createOptions(loginanimation,1);


  useEffect(() =>{
    localStorage.setItem("dataKey", JSON.stringify(ph));
  },[ph])


 function setotpheadline() {
    try {
      const storedPh = localStorage.getItem('dataKey');
      if (storedPh) {
        const parsedPh = JSON.parse(storedPh);
        setPhone(parsedPh);
      }
    } catch (error) {
      console.error("Error parsing data from localStorage:", error);
    }
  };
  
 console.log(phone);
//  console.log("ff");


useEffect(() => {
  const timer = setTimeout(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, 8000);
}, [user]);


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult ) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
        setotpheadline();
      })
      .catch((error) => {
        if(!maxLimitReached){
          toast.error("Reached maximum limit. Try again after 10 minutes.");
        setMaxLimitReached(true);
      }
        console.log(error);
        setLoading(false);
      });
  }
  
  function resendfuntion(){
    const storedph =  localStorage.getItem('dataKey');
    if (storedph) {
      setPh(JSON.parse(storedph));
   }
   onSignup();  
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);  
        toast.success("Successfully Login");
    localStorage.removeItem('dataKey');
      })
      .catch((err) => {
        toast.error("Wrong Otp");
        console.log(err);
        console.log("3");
        setLoading(false);
      });
  }

 

  return (
    <div className="flex flex-col justify-center items-center">
       <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
   <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
   
   <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%]  ">
      <div className="w-80 flex flex-col gap-2 rounded-lg p-4 mr-2" >
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ?  (
          <>
          <Lottie
        options={loginanimationOptions}
        height={200}
        width={200}
    
      />
          </>
          
        ) : (
          <>
          {showOTP ? (
            <>
           
<label
           htmlFor="otp"
           className="font-small text-1xl text-black text-center"
         >
          An OTP is sent to +{phone}
         </label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container"
              
            ></OtpInput>
            <div className=" resendbutton text-aling flex lg:space-between lg:w-[150%]" >
            <div className="resendbutton text-aling"  >
            <label
           htmlFor="otp"
           className="font-small text-1xl text-black text-center"
           style={{marginLeft:32}}
         >
        OTP Code?
         </label>
         <button
              onClick={resendfuntion}
              style={{marginLeft:4, color: "green"}}
               >
              <span>Resend</span>
            </button>
            </div>

            <button
              onClick={onOTPVerify}
              className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
               >
               {loading ? ( 
    <CgSpinner size={20} className="mt-1 animate-spin" />
  ) : (
    <span>Verify</span>
  )}

            </button>
            </div>

          </>
          
            ) : (
              <>


                <PhoneInput country={"in"} value={ph} onChange={setPh} className="" /> 
                <button
                  onClick={onSignup}
                
                  className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

                >

         {loading ? ( 
    <CgSpinner size={20} className="mt-1 animate-spin" />
  ) : (
    <span>Get OTP</span>
  )}
                </button>
     
           </>
            )}
           </>
        )}
      </div>
    </section>
      
</div>

  );
};

export default Login;
