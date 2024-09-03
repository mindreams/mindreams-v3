import React from "react"

const Footer = () => {
  return (
    <div className='flex items-center flex-col bg-[#040422] '>
      <div className='lg:px-[10%] flex md:flex-row flex-col md:justify-between md:gap-0 gap-10 items-start w-[250px] sm:w-[300px] md:w-full px-auto md:items-start py-10 sm:px-[5%] px-[3%] bg-[#040422] text-white '>
        <div className='space-y-4'>
          <h1 className='md:pb-3'>
            <strong className='text-xl  font-semibold'>Our Services</strong>
          </h1>
          <div className='space-y-2 text-white'>
            <p className='pb-2 cursor-pointer '>Web App Development</p>
            <p className='pb-2 cursor-pointer '>Mobile App Development</p>
            <p className='pb-2 cursor-pointer '>E-commerce Portal</p>
            <p className='pb-2 cursor-pointer '>Software Testing</p>
            <p className='pb-2 cursor-pointer '>UX/UI Design</p>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='md:pb-3'>
            <strong className='text-xl  font-semibold'>Our Solution</strong>
          </h1>
          <div className='space-y-2 text-white'>
            <p className='pb-2 cursor-pointer '>E-commerce Solutions</p>
            <p className='pb-2 cursor-pointer '>Education Management</p>
            <p className='pb-2 cursor-pointer '>Financial Solutions</p>
          </div>
        </div>

        <div className='space-y-4 text-white'>
          <h1 className='md:pb-3'>
            <strong className='text-xl  font-semibold'>Head Office:</strong>
          </h1>
          <address className='leading-relaxed'>
            <div className='mb-1'>Mindreams Infotech</div>
            <div className='mb-1'>#StartudivHuts, 1st Floor</div>
            <div className='mb-1'>108, 27th Main, HSR Layout</div>
            <div className='mb-1'>Sector-2, Bangalore, India</div>
            <div>560102</div>
          </address>
          <div className='flex flex-col pt-7 space-y-4'>
            <h1 className=''>
              <strong className='text-xl font-semibold'>Email Us:</strong>
            </h1>
            <a
              href='mailto:contact@mindreams.com'
              className='underline decoration-[#adacc0] underline-offset-4 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#f04238] hover:to-[#4d5fea]'>
              contact@mindreams.com
            </a>
          </div>
        </div>
      </div>
      <div className='bg-[#161734] py-4 w-full text-white lg:px-[10%] sm:px-[5%] px-[3%]'>
        <p> &copy; 2023 Mindreams Infotech</p>
      </div>
    </div>
  )
}

export default Footer
