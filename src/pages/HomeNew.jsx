import React from 'react'
import heroImg from "../Resources/heroImg.png"
import { Link } from 'react-router-dom';
import NavbarNew from '../components/NavbarNew';
import { FooterNew } from "../components/FooterNew";
import Expert from "../Resources/expert.png"
import Innovation from "../Resources/innovation.png"
import Security from "../Resources/security.png"
function HomeNew() {
    return (
        <div className="w-screen  overflow-hidden  min-[320px]:w-full z-40">
          {/* Hero section */}
          <NavbarNew/>
          <div className="w-screen h-full flex flex-col items-center justify-center">
            <img src={heroImg} className="w-screen h-screen" loading="lazy" />
             <h1 className='absolute text-5xl font-extrabold text-white'>TRANSVUE SOULTIONS INDIA LLP</h1>
          </div>
          {/* About Us */}
          <div className="about-us w-screen  flex flex-col my-10 justify-center relative items-center   z-10 ">
            <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
              <div className="text-4xl font-bold text-center">About us </div>
              <div className="w-full text-center  sm:text-xl  min-[320px]:leading-6">
              With a unique blend of 67 years of expertise, our IT startup, a part of the TWI Group of Companies, serves as a trusted IT outsourcing partner for a wide range of clients, including MSMEs and MNCs. We offer customer-centric solutions, providing 24/7 customer assistance and specializing in software development, customization, and scalable design. Our services are tailored to meet the diverse needs of our clients, leveraging our extensive technological expertise.
              </div>
              
            </div>
          </div>
          {/* Key benefits sections */}
          <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#419116e0]  relative z-10 p-5 md:h-100 ">
            <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
              Key Features
            </div>
            <div className='flex justify-evenly w-full items-center gap-3'>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Expert} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>Tailored Solutions for Every Need </h1>
              <p>TSIL understands that every client is unique, with specific requirements and challenges. That's why we offer customized solutions that are tailored to meet the individual needs of each client. Our approach ensures that our clients receive solutions that are perfectly suited to their business goals and objectives.</p>
              </div>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Innovation} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>Cutting-edge Technology </h1>
              <p>TSIL stays at the forefront of technological advancements, ensuring that our clients benefit from the latest innovations. We employ state-of-the-art tools and methodologies to deliver solutions that are efficient, reliable, and future-proof.</p>
              </div>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Security} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>Deep-rooted Expertise </h1>
              <p>With a heritage of 67 years within the TWI Group of Companies, TSIL brings a wealth of experience to the table. This extensive background allows us to provide insightful solutions and cater to the diverse needs of our clients, including MSMEs and MNCs.</p>
              </div>
            </div>
          </div>
          {/* Vision and mission */}
          <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
            <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[70%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
              <div className="text-2xl font-bold uppercase mt-2 text-center">
                {" "}
                Vision{" "}
              </div>
    
              <div>
              Our vision is to propel India to the forefront of the digital revolution, making it a global leader in technology. We envision a future where every Indian has the opportunity to leverage technology to its fullest potential, regardless of their background or location. By bridging the digital divide and fostering innovation, we aim to create a more inclusive and connected society, where technology is a driver of economic growth and social progress.
              </div>
              
            </div>
            <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[70%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
              <div className="text-2xl font-bold uppercase mt-5 text-center">
                {" "}
                Mission{" "}
              </div>
              <div>
              Our mission is to democratize technology in India, making it affordable and accessible to all. We believe that technology should not be a privilege for a few but a tool that empowers every individual and business to thrive in the digital age. By making technology more accessible, we aim to enable people from all walks of life to harness its power and create a meaningful impact in their communities and the global market.
              </div>
            </div>
          </div>
          {/* services provided */}
          <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#419116e0]  relative z-10 p-5 md:h-100 ">
            <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
              Services Provided By Us
            </div>
            <div className='flex justify-evenly w-full items-center gap-3'>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Expert} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>Customer-Centric Approach </h1>
              <p>Our approach revolves around understanding and meeting the unique needs of each customer. We prioritize customer satisfaction and strive to tailor our solutions to their specific requirements, ensuring a personalized and effective service experience.</p>
              </div>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Innovation} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>24/7 Customer Assistance </h1>
              <p>We provide round-the-clock customer support to address any queries, concerns, or technical issues our clients may encounter. Our dedicated support team is available at all times to ensure a seamless and uninterrupted service experience.</p>
              </div>
              <div className='bg-gray-300 p-8 rounded-lg flex flex-col items-center justify-center gap-3'>
              <img src={Security} className="w-20 h-20" loading="lazy" />
              <h1 className='font-bold text-2xl'>Software Development </h1>
              <p>Leveraging our technical expertise, we offer comprehensive software development and customization services. Whether it's developing new software solutions or customizing existing ones, we ensure scalability, efficiency, and reliability in every project.</p>
              </div>
            </div>
          </div>
          <FooterNew/>
        </div>
      );
}

export default HomeNew