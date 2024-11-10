import React from "react"

const ProjectIntro = () => {
  return (
    <section id='contact-us'>
      <div className='lg:px-[10%] sm:px-[5%] px-[3%] sm:py-20 py-10'>
        <h1 className='flex sm:flex-row gap-5 flex-col sm:pb-10 pb-6 sm:text-[40px] text-[35px] '>
          <h1>Got a project ?</h1>
          <h1 className='gradient-text'>Let's talk.</h1>
        </h1>
        Write to us at <a
          href="mailto:contact@mindreams.com"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04238] to-[#4d5fea] hover:bg-none hover:text-[#4d5fea] "
        >
            contact@mindreams.com
        </a>
        <p className='sm:pt-10 pt-7'>
          Please tell us about your project and we will get back to you as early as possible. Make sure to include your contact details along with a brief description of what you are looking for.
        </p>
      </div>
    </section>
  )
}

export default ProjectIntro
