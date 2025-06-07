import React from 'react'
import { Link } from 'react-router-dom'

const News1 = () => {
  return (
    <div id='explore' className='w-full bg-purple-500'>
        <div className='w-[95%] md:w-11/12 container mx-auto text-white text-center py-5 text-sm md:text-md lg:text-[16px]'>
            <h1 className='font-bold lg:w-[40%] mx-auto text-xl md:text-xl lg:text-2xl'>Ready to Share Your Voice ?</h1>
            <p className='md:w-[75%] lg:w-[40%] mx-auto py-3'>Join a community of thoughtful writers and readers who value authentic connection and meaningful conversation</p>
            <Link to='SignUp'><button className='mr-2 border border-white rounded-md px-3 py-1 text-purple-500 bg-white'>Create Account</button></Link>
            <button className='ml-2 border border-white rounded-md px-3 py-1'>Learn more</button>
        </div>
    </div>
  )
}

export default News1