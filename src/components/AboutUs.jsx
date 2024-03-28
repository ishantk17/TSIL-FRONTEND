import React from 'react';

function AboutUs() {
  return (
    <div className='bg-gradient-to-tr from-white to-green-400 h-screen flex justify-center items-center'>
             <div  className="  lg:mt-20 w-3/5 h-[80%]" style={{ overflowY: 'auto' }} >
      <div className='flex flex-col justify-center items-center align-middle bg-white rounded-md shadow-sm shadow-gray-300 p-5' >
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          About Us
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block"></div>
        <div className='my-2 p-5 bg-gray-200'>
          <p> Transvue Solution Software is a forward-thinking technology company dedicated to revolutionizing the transportation sector. Our mission is to provide comprehensive system support for GreenEco, a cutting-edge initiative aimed at minimizing paperwork and maximizing efficiency. With a strong focus on digital solutions, we empower our clients to streamline their processes while prioritizing environmental sustainability. Through innovative software solutions and strategic partnerships, we are driving positive change in the industry, paving the way for a greener and more efficient future.
          </p>
        </div>

        <div className='my-2 p-5 bg-gray-200'>
          <p> Transvue Solution Software is a forward-thinking technology company dedicated to revolutionizing the transportation sector. Our mission is to provide comprehensive system support for GreenEco, a cutting-edge initiative aimed at minimizing paperwork and maximizing efficiency. With a strong focus on digital solutions, we empower our clients to streamline their processes while prioritizing environmental sustainability. Through innovative software solutions and strategic partnerships, we are driving positive change in the industry, paving the way for a greener and more efficient future.
          </p>
        </div>
        <div className='my-2 p-5 bg-gray-200'>
          <p>At Transvue Solution Software, we offer a wide range of digital services tailored to meet the specific needs of GreenEco and its stakeholders. Our comprehensive suite of tools enables seamless management and transfer of paperwork associated with transporting goods. From electronic documentation and digital signatures to real-time tracking and analytics, our software facilitates the transition from outdated paper-based systems to efficient digital formats. By leveraging the latest technologies, we help our clients reduce time, resources, and environmental impact, while enhancing overall operational efficiency and compliance.</p>
        </div>
        <div className='my-2 p-5 bg-gray-200'>
          <p>Currently, Transvue Solution Software serves a diverse clientele base, with numerous clients utilizing our services for their transportation paperwork management needs.</p>
          <p> The types of users currently benefiting from our services include government entities involved in the transportation sector, as well as drivers tasked with transferring port-related goods for clients.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
