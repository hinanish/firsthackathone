import React from 'react'
import Header from './components/header'
import Nav from './components/nav'
import HeroSection from './components/hero'
import PopularCars from './components/popular'
import Cars from './components/third'

function Home() {
  return (
    <div><Header/>
    <Nav/>
    <HeroSection/>
    <PopularCars/>
    <Cars/>
    </div>
  )
}

export default Home