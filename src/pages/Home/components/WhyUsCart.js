import React from "react"

const WhyUsCart = ({ icon, paragraph, heading }) => {
  return (
    <div className='flex sm:flex-row flex-col items-start sm:gap-10 sm:px-0 px-6 py-8 '>
      <div className='flex gap-5 sm:flex-none'>
        <div className='flex items-center justify-center rounded-[20px] bg-white shadow-md w-[90px] h-[80px] sm:w-[140px] sm:h-[140px]'>
          <img
            src={icon}
            alt='Icon'
            className='w-[50px] h-[50px] mx-16 my-16 '
          />
        </div>
        <h2 className='text-[15px] font-semibold text-white sm:hidden flex'>
          {heading}
        </h2>
      </div>
      <div className='flex flex-col mt-3 sm:mt-0 text-white justify-center'>
        <h1 className='text-xl my-2 sm:flex hidden'>{heading}</h1>
        <p className='tracking-wide text-[14px] sm:text-[15px] font-medium leading-loose'>
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default WhyUsCart
