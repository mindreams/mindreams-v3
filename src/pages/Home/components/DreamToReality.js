import React from "react"
import image from "../../../assets/images/image.png"

const DreamToReality = () => {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 sm:px-[10%] px-[5%] md:py-20 sm:py-16 py-12'>
      <div className='md:mt-0 mt-10 w-full  flex flex-col items-center'>
        <h1 className='md:pb-0 pb-5 flex md:flex-col flex-row py-10 items-start w-full xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[24px]'>
          <h1>You Dream</h1>
          <h1 className="md:ml-0 ml-2"> We Build!</h1>
        </h1>
        <p className='lg:leading-loose md:leading-relaxed leading-loose'>
          Visualize your ideal product and bring it to life. Our methodology
          caters to companies seeking top-notch web development, assessing
          crucial product features, infusing innovative concepts, and
          strategizing the optimal launch approach for your project.
        </p>
      </div>

      <div className='bg-custom-bg flex items-center bg-no-repeat bg-center bg-cover'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default DreamToReality
