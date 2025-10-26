import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Marquee from '../sections/Marquee'
import Work from '../sections/Work'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Work/>
      <Marquee/>
    </div>
  )
}

export default Home
