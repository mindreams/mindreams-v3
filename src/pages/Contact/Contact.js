import React from "react"
import MuiTextField from "./components/MuiTextField"
import MuiTextArea from "./components/MuiTextArea"
import { TEXT_FIELD_DATA } from "../../constants/contact_data"

const Contact = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <div className='px-[10%] xl:my-14 md:my-11 sm:my-8 my-5 '>
        <h1 className='text-[40px] text-[#000000] lg:mb-6 md:mb-4 sm:mb-3 mb-2'>
          Contact Us
        </h1>
        <p className='leading-loose xl:text-lg text-base text-gray-600 pt-3'>
          We appreciate your interest in our services. To assist us in serving
          you better, kindly furnish the following details regarding your
          business needs. This information will help us direct your inquiry to
          the appropriate individual. You can expect a response within 48 hours.
        </p>
      </div>

      <div className='px-[10%] lg:bg-right bg-center bg-no-repeat bg-custom-bg'>
        <div className='grid xl:gap-10 gap-2 md:gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:py-10 sm:py-8 py-6'>
          {TEXT_FIELD_DATA.map((data, index) => (
            <MuiTextField
              key={index}
              label={data.label}
              placeholder={data.placeholder}
              required={data.required}
            />
          ))}
        </div>

        <div className='py-[20px]'>
          <MuiTextArea />
        </div>

        <div className='py-[20px]'>
          <button className='gradient-background tracking-[1px] rounded text-sm md:px-[90px] px-[60px] py-[10px] sm:py-[14px] text-white '>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
