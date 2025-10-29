import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Marquee from '../sections/Marquee'
import Work from '../sections/Work'
import CTA from '../components/Cta'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Work/>
      <Marquee/>
      <CTA/>
    </div>
  )
}

export default Home
