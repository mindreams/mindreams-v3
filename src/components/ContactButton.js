import React from "react"
import { Link } from "react-router-dom"

const ContactButton = () => {
  return (
    <Link to='/contact'>
      <button className='custom-gradient-border poppins-700 flex items-center justify-center font-medium rounded-md md:w-[160px] md:h-12 w-[120px] h-9 '>
        Contact Us
      </button>
    </Link>
  )
}

export default ContactButton
