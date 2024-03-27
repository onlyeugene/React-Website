import React from 'react'
import Hero from './HomeComponents/HeroSection/Hero'
import Trade from './HomeComponents/TradeSection/Trade'
import SecondHero from './HomeComponents/SecondHero/SecondHero'
import ThirdHero from './HomeComponents/ThirdHero/ThirdHero'
import FourthHero from './HomeComponents/FourthHero/FourthHero'

const HomeIndex = () => {
  return (
  <div>
    <Hero/>
    <Trade/>
    <SecondHero/>
    <ThirdHero/>
    <FourthHero/>
  </div>
    

  )
}

export default HomeIndex