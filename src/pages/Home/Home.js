import React, { useEffect } from "react"
import DreamToReality from "./components/DreamToReality"
import WhyUsCart from "./components/WhyUsCart"
import ServiceCart from "./components/ServiceCart"
import OurSolution from "./components/OurSolution"
import ProjectIntro from "./components/ProjectIntro"
import Footer from "./components/Footer"
import smoothScroll from "../../utils/smoothScroll"
import { WHY_US_DATA, SERVICE_DATA } from "../../constants/home_data"
import Animation1 from "./components/Animation_web_tab"
import { useMediaQuery } from "@mui/material";

const Home = () => {
  useEffect(() => {
    smoothScroll()
  }, [])

  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <DreamToReality />

      {/* WhyUs Section */}
      <section
        id='why-us'
        className='bg-[#2F3183] w-full sm:px-[10%] md:py-20 sm:py-16 py-12'>
        <h1 className='flex items-center justify-center text-white sm:pb-10 pb-6 text-[40px] '>
          Why Us?
        </h1>
        <div>
          {WHY_US_DATA.map((data, index) => (
            <WhyUsCart
              key={index}
              icon={data.icon}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section
        id='service'
        className='w-full flex md:flex-none flex-col justify-center items-center md:items-start md:px-[5%] sm:px-[5%] md:py-20 sm:py-16 py-12 bg-custom-bg bg-no-repeat bg-center md:bg-right'>
        <h1 className='flex items-center w-full justify-center pb-10 text-[40px] '>
          Our Services
        </h1>
        <div className="w-full block lg:flex lg:justify-between" >
        <div
          // style={{
          //   position: 'relative',
          //   zIndex: 1, // bring this div to the front
          // }}
          
        >
        <div className='flex md:flex-row flex-col gap-5 md:gap-7 items-center' >
          {SERVICE_DATA[0].map((data, index) => (
            <ServiceCart
              key={index}
              icon={data.icon}
              bg={data.bg}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          ))}
        </div>
        <div className='flex md:flex-row flex-col gap-5 xl:ml-14 lg:ml-10 md:mt-14 mt-7 md:gap-7 items-center'>
          {SERVICE_DATA[1].map((data, index) => (
            <ServiceCart
              key={index}
              icon={data.icon}
              bg={data.bg}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          ))}
        </div>
        </div>
        {/* Only show Animation1 on Tablet or larger screens */}
        {isTabletOrLarger && (
            <div className='flex justify-center w-full mt-16 md:mt-20 lg:mt-0 md:mb-0 ml-0 mb-0'>
              <Animation1 />
            </div>
          )}
        </div>
      </section>

      {/* Our Solution Section */}
      <OurSolution />

      {/* Got a project */}
      <ProjectIntro />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
