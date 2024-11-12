import React from "react"
import image from "../../../assets/images/bg.png"

const DreamToReality = () => {
  return (
    <div className='flex md:grid md:grid-cols-2 sm:px-[10%] px-[5%] md:py-20 sm:py-16 py-12'>
      <div className='w-full  flex flex-col items-center justify-center'>
        <h1 className='md:pb-0 pb-5 flex flex-col py-10 items-start w-full xl:text-[60px] lg:text-[50px] sm:text-[50px] text-[54px] text-[#333]  bg-contain bg-no-repeat bg-center bg-bg-md md:bg-none'>
          <h1>You Dream,</h1>
          <h1> We Build!</h1>
        </h1>
        <p className='lg:leading-loose md:leading-relaxed leading-loose'>
          Visualize your ideal product and bring it to life. Our methodology
          caters to companies seeking top-notch web development, assessing
          crucial product features, infusing innovative concepts, and
          strategizing the optimal launch approach for your project.
        </p>
      </div>

      <div className='hidden md:flex items-center justify-center'>
        <img src={image} alt='' width="80%"/>
      </div>
    </div>
  )
}

export default DreamToReality
