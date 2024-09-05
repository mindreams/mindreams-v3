import React from "react"
import shop_icon from "../../../assets/images/shop_icon.png"
import cart_icon from "../../../assets/images/cart_icon.png"

const OurSolution = () => {
  return (
    <section id='solution'>
      <div className='flex flex-col items-center justify-center md:py-16 sm:py-12 py-10 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-6'>
        <h1 className='text-white text-[40px] md:mb-12'>Our Solutions</h1>
        <div className='flex flex-col md:flex-row items-center mt-5 justify-between gap-12 w-full max-w-5xl'>
          <div className='flex flex-col items-center text-center w-full md:w-1/2 sm:py-8 py-6 lg:px-8 '>
            <div className='flex items-center justify-center w-20 h-20 mb-6'>
              <img
                src={cart_icon}
                alt='E-Commerce Icon'
                className='w-full h-full'
              />
            </div>
            <h1 className='text-xl text-white font-semibold mb-4'>
              E-Commerce
            </h1>
            <p className='text-white'>
              Our E-commerce development services can help you build an online
              store that drives sales and revenue.We have experience with
              various e-commerce platforms and we can help you choose the best
              for your business.We know that having a fast, secure and scalable
              hosting solution is vital for your eCommerce platform. That's why
              our cloud experts work with eCommerce companies to help you
              deliver a seamless experience for your customers.
            </p>
          </div>
          {/* Diveder */}
          <div className='h-[200px] border-l-2 border-white hidden md:flex rounded-md'></div>
          <div className='w-[200px] border-t-2 border-white md:hidden flex rounded-md'></div>

          <div className='flex flex-col items-center text-center w-full md:w-1/2 py-8 lg:px-8 '>
            <div className='flex items-center justify-center w-20 h-20 mb-6'>
              <img
                src={shop_icon}
                alt='Franchise Management Icon'
                className='w-full h-full'
              />
            </div>

            <h1 className='text-xl font-semibold text-white mb-4'>
              Franchise Management
            </h1>

            <p className='text-white'>
              All your business requirements, in one place, up to date &
              completely digital. Consolidating all your processes, admin,
              reporting and payments into one user-friendly platform, our
              product makes running a business more efficient,effective, and
              profitable. It would be a game-changer for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSolution
