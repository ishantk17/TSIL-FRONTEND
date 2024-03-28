import React from 'react'
import logo from "../Resources/icon.png"
import { Link } from 'react-router-dom'

export const FooterNew = () => {
  return (
    <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
    <div className='w-11/12 max-w-[1240px] flex  min-[320px]:flex-col sm:flex-row  items-center  justify-between gap-5 '>
    <div className='min-[320px]:w-full sm:w-1/3  flex items-center justify-center mb-5'><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
          <div className='w-2/3 flex justify-center sm:items-center  min-[320px]:flex-col sm:flex-row gap-5 min-[320px]:mb-5 sm:mb-2' >
            <div className='flex  justify-center sm:items-center  gap-10 h-28 mr-5'>
             {/* col1 */}
              <div className='text-white '>
                <div className='font-semibold  '>Home</div>
                <Link to="/Customergreencell" ><div>Customer Green Cell</div></Link>
                <Link to="/contactUs">Get In Touch</Link>
              </div>

              {/* col2 */}
              <div className='text-white '>
              <div className='font-semibold   '>Product</div>
                <Link to={"/product"}><div>Featured Product</div></Link>
              </div>

              {/* col 3 */}
              <div className='text-white '>
                <div className='font-semibold  '>Company</div>
                <Link to={"/"}>About us</Link>
                <div>Careers</div>
              </div>
              </div>
              {/* col4 -> buttons*/}
              <div className='flex min-[320px]:flex-row sm:flex-col items-center justify-center  gap-10 '>
                <button>Contact Us</button>
              </div>
          </div>
    </div>
    <div className='w-full rounded-md bg-[#57E226] h-[1px] '></div>

    </div>
  )
}
