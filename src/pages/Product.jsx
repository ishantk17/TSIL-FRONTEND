import React from "react";
import heroImg from "../Resources/heroImg.png";
import NavbarNew from '../components/NavbarNew';
import { FooterNew } from "../components/FooterNew";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className=" w-full overflow-x-hidden    ">
        <NavbarNew/>
      {/* hero page */}
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <img src={heroImg} className="w-screen h-screen" loading="lazy" />
        <h1 className="absolute text-white font-extrabold text-4xl">Transforming Industries with Expert IT Support</h1>
        <p className="absolute top-[19%] w-[80%] text-white text-lg text-center">Welcome to Transvue Solutions, where we redefine IT support for industries. Dive into our product page to discover how our top-tier solutions can empower your business in the digital age. Whether you're a small startup or a large enterprise, our team is dedicated to understanding your unique needs and providing tailored IT services to help you achieve your goals. Join us in transforming industries through innovative technology solutions. Explore our product page now.</p>
      </div>

      <div className="md:h-1/2 sm:pt-[4%] sm:pb-[4%] mt-10  classproduct w-full  flex flex-col    justify-center relative items-center   z-10 ">
        <div className="  classproductinner flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5 bg-black bg-opacity-10 mb-5 lg:max-w-[50%]   ">
          <div className="md:text-[200%] sm:text-4xl sm:h-1/2   text-4xl font-bold text-center  ">
            PRODUCT{" "}
          </div>
          <div className=" text-center max-w-[100%] min-[320px]:text-lg min-[320px]:leading-6">
            We at KGV, are developing a product that is customer oriented and
            manufactured with a vision of solving the problem of high
            transportation cost by converting currently available conventional
            two-wheeler into a plug in hybrid EV. We want to expose our product
            to the international market and the ASEAN summit is the perfect
            platform to showcase our product to the world
          </div>
        </div>
      </div>

      <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#419116e0]  relative z-10 p-5 md:h-100 my-10 ">
        <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-white text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
          OUR PRODUCTS
        </div>
        <div className="flex justify-evenly w-full h-full">
          <div className="flex flex-col justify-evenly items-center bg-gray-200 w-[45%] p-8 rounded-lg gap-3">
            <h1 className="font-bold text-2xl text-black">GREEN LOGISTICS</h1>

            <p>
            We, the tech company under the flagship of TWI GROUP (since
1956), have developed a sustainable road transport solution facilitating
entire movement of cargo in digital mode/Paperless along with clear
transparency and real-time visibility termed as “GREEN LOGISTICS”
which is not only eco-friendly and time-saving but also pocket-friendly
and sustainable drive to reduce carbon footprints.
            </p>
            <Link to="/LoadingPage">
            <button className="bg-black text-white p-3 rounded-lg">View Product</button>
            </Link>
          </div>
          {/* <div className="flex flex-col justify-evenly items-center bg-gray-200 w-[45%] p-8 rounded-lg gap-3">
            <h1 className="font-bold text-2xl">TWI EXCHANGE</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laudantium a ea, doloribus labore illum! Consequuntur totam, unde
              suscipit dicta voluptatibus quo dolore officiis nihil aut
              repudiandae necessitatibus quam commodi quas placeat dolorum
              aliquid corrupti labore atque, nulla, ullam esse repellat! Ad quae
              accusamus adipisci distinctio eius vitae sint omnis, modi a sequi
              in aut doloremque harum doloribus, vel atque earum repellendus
              nesciunt, nemo iure corrupti explicabo officia perferendis
              debitis! At cumque ipsa optio fugit, maxime consequuntur libero
              architecto accusantium debitis aspernatur tempore quas aliquid
              temporibus illum molestiae. Sed modi at ipsam neque amet! Delectus
              a illum dolor minus omnis.
            </p>

            <button className="bg-green-600 text-white p-3 rounded-lg">View Product</button>
          </div> */}
          
        </div>
      </div>
      <FooterNew/>
    </div>
  );
}

export default Product;
