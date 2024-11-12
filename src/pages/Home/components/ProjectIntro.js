import React from "react"
import ContactButton from "../../../components/ContactButton"

const ProjectIntro = () => {
  return (
    <div className='lg:px-[10%] sm:px-[5%] px-[3%] sm:py-20 py-10'>
      <h1 className='flex sm:flex-row gap-5 flex-col sm:pb-10 pb-6 sm:text-[40px] text-[35px] '>
        <h1>Got a project ?</h1>
        <h1 className='gradient-text'>Let's talk.</h1>
      </h1>
      <ContactButton />
      <p className='sm:pt-10 pt-7'>
        We are a collective of creative minds passionate about original
        concepts. Specializing in digital and fintech domains, we collaborate
        with companies to sculpt remarkable identities through exceptional UI/UX
        design.
      </p>
    </div>
  )
}

export default ProjectIntro
