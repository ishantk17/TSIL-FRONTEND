
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


const Otpverify = ({  mobile ,setmobile }) => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
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

    if (user) {
        setmobile(true);
    }
 
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
    localStorage.removeItem('dataKey');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }


  return (
   
    <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%]  ">
      <div className="w-80 flex flex-col gap-2 rounded-lg p-4 mr-2" >
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ?  (
          <>
                <div className="flex">
       <Lottie
        options={loginanimationOptions}
        height={50}
        width={50}
      />
      <h1 className="font-semibold ">Successfully Signed up</h1>
</div>
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
    <span>Get</span>
  )}
                </button> 
               
           </>
            )}
           </>
        )}
      </div>
    </section>
    
  );
};

export default Otpverify;






















// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
// // import "./index.css"
// import OtpInput from "otp-input-react";
// import { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { auth } from "./firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";
// import loginanimation from "../Animations/Animation - 1709015744141.json"

// import { Link, useNavigate } from "react-router-dom";
// import Lottie from "react-lottie";


// const Otpverifykk = ({  mobile ,setmobile }) => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

   

//     function createOptions(animationData,speed=3) {
//       return {
//         loop: true,
//         autoplay: true, 
//         animationData: animationData,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice'
//         },
//         speed: speed,
//       };
//     }

//     const loginanimationOptions = createOptions(loginanimation,1);


//   useEffect(() =>{
//     localStorage.setItem("dataKey", JSON.stringify(ph));
//   },[ph])


//  function setotpheadline() {
//     try {
//       const storedPh = localStorage.getItem('dataKey');
//       if (storedPh) {
//         const parsedPh = JSON.parse(storedPh);
//         setPhone(parsedPh);
//       }
//     } catch (error) {
//       console.error("Error parsing data from localStorage:", error);
//     }
//   };
  
//  console.log(phone);
// //  console.log("ff");


// useEffect(() => {

//     if (user) {
//     setmobile(true);
//     }
// console.log(mobile);
// }, [user]);


//   function onCaptchVerify() {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }

//   function onSignup() {
//     setLoading(true);
//     onCaptchVerify();
//     const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult ) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sended successfully!");
//         setotpheadline();
//       })
//       .catch((error) => {
        
//         console.log(error);
//         setLoading(false);
//       });
//   }
  
//   function resendfuntion(){
//     const storedph =  localStorage.getItem('dataKey');
//     if (storedph) {
//       setPh(JSON.parse(storedph));
//    }
//    onSignup();  
//   }


//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUser(res.user);
//         setLoading(false);  
//     localStorage.removeItem('dataKey');
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }


//   return (
   
//     <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%]  ">
//       <div className="w-100 flex flex-col gap-2 rounded-lg p-4 mr-2" >
//         <Toaster toastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {user ?  (
//           <>
//          <div  className="flex" >
//      <Lottie
//         options={loginanimationOptions}
//         height={40}
//         width={40}
    
//       />
// <h1 className="flex w-[95%] font-semibold text-black text-2xl  ml-10 " style={{ fontSize: '20px' }}>OTP Verified Sucessfully</h1>
//      </div>
//           </>
          
//         ) : (
//           <>
//           {showOTP ? (
//             <>
           
// <label
//            htmlFor="otp"
//            className="font-small text-1xl text-black text-center"
//          >
//           An OTP is sent to +{phone}
//          </label>
//             <OtpInput
//               value={otp}
//               onChange={setOtp}
//               OTPLength={6}
//               otpType="number"
//               disabled={false}
//               autoFocus
//               className="opt-container"
              
//             ></OtpInput>
//             <div className=" resendbutton text-aling flex lg:space-between lg:w-[150%]" >
//             <div className="resendbutton text-aling"  >
//             <label
//            htmlFor="otp"
//            className="font-small text-1xl text-black text-center"
//            style={{marginLeft:32}}
//          >
//         OTP Code?
//          </label>
//          <button
//               onClick={resendfuntion}
//               style={{marginLeft:4, color: "green"}}
//                >
//               <span>Resend</span>
//             </button>
//             </div>

//             <button
//               onClick={onOTPVerify}
//               className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
//                >
//                {loading ? ( 
//     <CgSpinner size={20} className="mt-1 animate-spin" />
//   ) : (
//     <span>Verify</span>
//   )}

//             </button>
//             </div>

//           </>
          
//             ) : (
//               <>

//            <div className="flex  w-[100%]">
                
//  <PhoneInput country={"in"} value={ph} onChange={setPh} className="" /> 
//                 <button
//                   onClick={onSignup}
                
//                   className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

//                 >

//          {loading ? ( 
//     <CgSpinner size={20} className="mt-1 animate-spin" />
//   ) : (
//     <span>Get</span>
//   )}
//                 </button> 
     
//                 </div>
//            </>

//             )}
//            </>
//         )}
//       </div>
//     </section>
    
//   );
// };

// export default Otpverifykk;






































// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
// // import "./index.css"
// import OtpInput from "otp-input-react";
// import { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { auth } from "./firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";
// import loginanimation from "../Animations/Animation - 1709015744141.json"

// import { Link, useNavigate } from "react-router-dom";
// import Lottie from "react-lottie";


// const Otpverify = ({mobile  ,  setmobile}) => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [userAuth, setUserAuth] = useState(null);
//   const navigate = useNavigate();

   

//     function createOptions(animationData,speed=3) {
//       return {
//         loop: true,
//         autoplay: true, 
//         animationData: animationData,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice'
//         },
//         speed: speed,
//       };
//     }

//     const loginanimationOptions = createOptions(loginanimation,1);


//   useEffect(() =>{
//     localStorage.setItem("dataKey", JSON.stringify(ph));
//   },[ph])



//   useEffect(() => {
//     if (userAuth) {
//     setmobile(true);
//       }
//   }, [userAuth]);


//  function setotpheadline() {
//     try {
//       const storedPh = localStorage.getItem('dataKey');
//       if (storedPh) {
//         const parsedPh = JSON.parse(storedPh);
//         setPhone(parsedPh);
//       }
//     } catch (error) {
//       console.error("Error parsing data from localStorage:", error);
//     }
//   };
  
//  console.log(phone);
// //  console.log("ff");

//   function onCaptchVerify() {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }



//   function onSignup() {
//     setLoading(true);
//     onCaptchVerify();
//     const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult ) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sended successfully!");
//         setotpheadline();
//       })
//       .catch((error) => {
        
//         console.log(error);
//         setLoading(false);
//       });
//   }
  
//   function resendfuntion(){
//     const storedph =  localStorage.getItem('dataKey');
//     if (storedph) {
//       setPh(JSON.parse(storedph));
//    }
//    onSignup();  
//   }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUserAuth(res.userAuth);
//         setLoading(false);  
//     localStorage.removeItem('dataKey');
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }


//   return (
   
//     <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%] lg:rounded-md   ">
//       <div className="w-100 flex flex-col gap-2 rounded-lg p-4 mr-2" >
//         <Toaster toastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {userAuth ?  (
//           <>
//           <Lottie
//         options={loginanimationOptions}
//         height={50}
//         width={50}
    
//       />

//           </>
          
//         ) : (
//           <>
//           {showOTP ? (
//             <>
           
// <label
//            htmlFor="otp"
//            className="font-small text-1xl text-black text-center"
//          >
//           An OTP is sent to +{phone}
//          </label>
//             <OtpInput
//               value={otp}
//               onChange={setOtp}
//               OTPLength={6}
//               otpType="number"
//               disabled={false}
//               autoFocus
//               className="opt-container"
              
//             ></OtpInput>
//             <div className=" resendbutton text-aling flex lg:space-between lg:w-[150%]" >
//             <div className="resendbutton text-aling"  >
//             <label
//            htmlFor="otp"
//            className="font-small text-1xl text-black text-center"
//            style={{marginLeft:32}}
//          >
//         OTP Code?
//          </label>
//          <button
//               onClick={resendfuntion}
//               style={{marginLeft:4, color: "green"}}
//                >
//               <span>Resend</span>
//             </button>
//             </div>

//             <button
//               onClick={onOTPVerify}
//               className=" logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
//                >
//                {loading ? ( 
//     <CgSpinner size={20} className="mt-1 animate-spin" />
//   ) : (
//     <span>Verify</span>
//   )}

//             </button>
//             </div>

//           </>
          
//             ) : (
//               <>

//                 <div className="flex  w-[80%]">
//                 <PhoneInput country={"in"} value={ph} onChange={setPh} className="" /> 
//                 <button
//                   onClick={onSignup}
                
//                   className="   w-[80%] logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

//                 >

//          {loading ? ( 
//     <CgSpinner size={20} className="mt-1 animate-spin" />
//   ) : (
//     <span>Get</span>
//   )}
//                 </button>
//                 </div>
//            </>
//             )}
//            </>
//         )}
//       </div>
//     </section>
    
//   );
// };

// export default Otpverify;












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


// // const Otpverify = ({userAuth, setUserAuth}) => {
// //   const [otp, setOtp] = useState("");
// //   const [ph, setPh] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showOTP, setShowOTP] = useState(false);
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



// // //   useEffect(() => {
// // //     if (userAuth) {
// // //     setmobile(true);
// // //       }
// // //   }, [userAuth]);


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
// //         setUserAuth(res.userAuth);
// //         setLoading(false);  
// //     localStorage.removeItem('dataKey');
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //         setLoading(false);
// //       });
// //   }


// //   return (
   
// //     <section className=" lg:bg-black lg:bg-opacity-10 flex items-center justify-center h-[45%] lg:rounded-md   ">
// //       <div className="w-100 flex flex-col gap-2 rounded-lg p-4 mr-2" >
// //         <Toaster toastOptions={{ duration: 4000 }} />
// //         <div id="recaptcha-container"></div>
// //         {userAuth ?  (
// //           <>
// //           <Lottie
// //         options={loginanimationOptions}
// //         height={50}
// //         width={50}
    
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

// //                 <div className="flex  w-[80%]">
// //                 <PhoneInput country={"in"} value={ph} onChange={setPh} className="" /> 
// //                 <button
// //                   onClick={onSignup}
                
// //                   className="   w-[80%] logingetstart border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"

// //                 >

// //          {loading ? ( 
// //     <CgSpinner size={20} className="mt-1 animate-spin" />
// //   ) : (
// //     <span>Get</span>
// //   )}
// //                 </button>
// //                 </div>
// //            </>
// //             )}
// //            </>
// //         )}
// //       </div>
// //     </section>
    
// //   );
// // };

// // export default Otpverify;





























