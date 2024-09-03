import React from "react"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import ContactButton from "./ContactButton"

const Navbar = () => {
  return (
    <div className=' custom-shadow sticky top-0 z-10  bg-[#ededf0] '>
      <div className='flex justify-around items-center md:py-6 py-4 '>
        <Link
          to='/'
          className='md:h-[50px] md:w-[250px] sm:h-[45px] sm:w-[200px] h-[35px] w-[180px] flex items-center justify-center'>
          <img src={logo} alt='' />
        </Link>

        <div className='hidden md:flex'>
          <a
            href='#why-us'
            className='custom-gradient-text text-[17px] px-2 mx-2 py-2 border-bottom-gradient'>
            Why Us
          </a>
          <a
            href='#service'
            className='custom-gradient-text text-[17px] px-2 mx-2 py-2 border-bottom-gradient '>
            Service
          </a>
          <a
            href='#solution'
            className='custom-gradient-text text-[17px] px-2 mx-2 py-2 border-bottom-gradient'>
            Solution
          </a>
        </div>
        <ContactButton />
      </div>
      {/* Mobile view */}
      <div className='md:hidden flex sm:text-base text-[15px] justify-center items-center pb-5 '>
        <div className=''>
          <a
            href='#why-us'
            className='custom-gradient-text sm:px-2 px-1 mx-2 py-2 border-bottom-gradient'>
            Why Us
          </a>

          <a
            href='#service'
            className='custom-gradient-text sm:px-2 px-1 mx-2 py-2 border-bottom-gradient'>
            Service
          </a>
          <a
            href='#solution'
            className='custom-gradient-text sm:px-2 px-1 mx-2 py-2 border-bottom-gradient '>
            Solution
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
