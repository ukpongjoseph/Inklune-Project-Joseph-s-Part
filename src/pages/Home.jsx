import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import News1 from '../component/News1'
import New2 from '../component/New2'
import Community from '../component/Community'
import Categories from '../component/Categories'
import Featured from '../component/Featured'
import Hero from '../component/Hero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Categories/>
      <Community/>
      <News1/>
      <New2/>
      <Footer/>
    </div>
  )
}

export default Home