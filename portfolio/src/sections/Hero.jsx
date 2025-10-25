import React from 'react'

const Hero = () => {
  return (
  <>
  <div>
    <div className='main-con h-screen w-full flex flex-col lg:justify-center items-start
    lg:py-40 max-lg:pt-40'>
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">Rihan Saifi</h1>
    <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">Web Developer <br/> & <span className='text-stroke'> Designer </span></h2>
      {/* <GradientButton text="Let's Talk" link="mailto:john@gmail.com" className="gradient-btn" /> */}
    </div>
  </div>
  </>
  )
}

export default Hero
