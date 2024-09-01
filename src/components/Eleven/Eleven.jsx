import React from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import Mockup from './Mockup'
import Teams from './Teams'
import Footer from './Footer'
import Sponsors from './Sponsors'
import Slider from './Slider'

function Eleven() {
  return (
    <>
<div class="fixed inset-0 -z-10 min-h-full w-full bg-[white] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#4ade80,transparent_1px)] bg-[size:6rem_4rem]"></div>      
      <Nav />
      <Hero />
      <Mockup />
      
      <Teams />
      <Sponsors/>
      <Footer />
    </>
  )
}

export default Eleven
