import React, { useState } from "react"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import ContactButton from "./ContactButton"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=' custom-shadow sticky top-0 z-10  bg-[#ededf0] '>
      <div className='flex justify-around items-center py-4 '>
        <Link
          to='/'
          className='md:h-[50px] md:w-[250px] sm:h-[45px] sm:w-[200px] h-[35px] w-[180px] flex items-center justify-center'>
          <img src={logo} alt='' />
        </Link>

        <div className='hidden md:flex'>
          <a
            href='#why-us'
            className='custom-gradient-text poppins-700 text-[17px] px-2 mx-2 py-2 border-bottom-gradient'>
            Why Us
          </a>
          <a
            href='#service'
            className='custom-gradient-text poppins-700 text-[17px] px-2 mx-2 py-2 border-bottom-gradient '>
            Service
          </a>
          <a
            href='#solution'
            className='custom-gradient-text poppins-700 text-[17px] px-2 mx-2 py-2 border-bottom-gradient'>
            Solution
          </a>
        </div>

        <div className='md:flex hidden '>
          <ContactButton />
        </div>

        {/* Mobile view */}

        <button
          className={` md:hidden block navbar-toggler ${
            isMenuOpen ? "" : "collapsed"
          }`}
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls='navbarDefault'
          aria-expanded={!isMenuOpen}
          aria-label='Toggle navigation'>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`absolute md:hidden bg-[#ededf0] py-4 custom-shadow top-[67px] flex flex-col w-full items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "block" : "hidden"
          } `}
          style={{ transition: "transform 0.3s  ease, opacity 0.3s ease " }}>
          <li
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='list-none w-full text-center transition-all cursor-pointer  '>
            <a href='#why-us' className='gradient-text'>
              Why Us
            </a>
          </li>
          <li
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='list-none gradient-text w-full text-center transition-all cursor-pointer  '>
            <a href='#service' className='gradient-text'>
              Service
            </a>
          </li>
          <li
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='list-none gradient-text w-full text-center transition-all cursor-pointer  '>
            <a href='#solution' className='gradient-text'>
              Solution
            </a>
          </li>
          <li
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='list-none gradient-text w-full text-center transition-all cursor-pointer  '>
            <Link className='gradient-text' to='/contact'>
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
