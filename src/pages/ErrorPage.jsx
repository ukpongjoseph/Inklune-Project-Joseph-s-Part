import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full bg-gray-300'>
        <div className='w-[95%] md:w-11/12 container mx-auto h-screen flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-purple-500'>ERROR 404</h1>
            <p className='text-md md:text-xl font-bold lg:text-2xl text-white'>Page Not Found</p>
            <Link to='/'><button className='px-3 py-1 rounded-md bg-purple-500 text-white font-bold text-md md:text-lg'>Go Back Home</button></Link>
        </div>
    </div>
  )
}

export default ErrorPage