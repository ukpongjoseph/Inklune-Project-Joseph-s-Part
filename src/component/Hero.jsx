import React from 'react'
import heroImg from '../assets/Hero Image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full pt-15'>
      <div className='w-[100%] md:w-11/12 container mx-auto flex flex-col md:flex-row-reverse gap-2'>
        <div className='md:flex-1 md:w-[40%]'><img src={heroImg} alt="" /></div>
        <div className='md:flex-1 md:w-[60%] md:my-auto w-[90%] mx-auto'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl pb-1 md:pb-2 lg:pb-3'>Write Under the Moon.</h1>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl'>Shine Beyond the Stars.</h1>
          <p className='py-3 lg:py-4 text-sm md:text-md lg:text-lg'>A living archive of voices where ideas are planted, conversations bloom, and communities grow. Join the writers and thinkers who value connection over noise</p>
          <div className='flex gap-3 py-2 md:py-3 lg:py-4'>
           <Link to='/SignIn'> <button className='text-white bg-purple-500 border border-purple-500 rounded-md py-1 md:py-2 px-4'>Start Writing</button></Link>
            <a href="#category"><button className='border border-purple-500 px-3 py-1 md:py-2 rounded-md'>Explore Stories</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero