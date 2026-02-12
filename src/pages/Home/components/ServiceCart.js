import React from "react"

const ServiceCart = ({ icon, heading, bg, paragraph }) => {
  return (
    <div className='sm:w-[340px] lg:w-[320px] sm:h-[250px] w-[300px] h-[265px] lg:h-[250px] service-cart-shadow p-4 rounded-[20px] bg-[#FFFFFF] transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-xl'>
      <div
        className={`h-12 w-12 flex items-center justify-center rounded-[50%] ${bg}`}>
        <img src={icon} alt='' className='' />
      </div>
      <h1 className='text-[#2F3183] text-xl my-5 '>{heading}</h1>
      <p className='text-[#2F3183]'>{paragraph}</p>
    </div>
  )
}

export default ServiceCart
