import React from 'react'
import { useState } from 'react'
import logo from '../assets/Inklune logo.png'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';
import '../style sheet/nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // function to toggle between mobile and desktop view
    const changeView = () => {
        if(!isOpen){
            setIsOpen(true)
        }
        else{
            setIsOpen(false)
        }
    }
  return (
   <div id='nav' className='w-full fixed border border-t-0 border-l-0 border-r-0 border-gray-200 text-sm md:text-[13px] lg:text-lg py-5 z-1'>
        <div className='w-[95%] md:w-11/12 container mx-auto text-gray-500 flex gap-4'>
            <div className='md:w-[50%] my-auto flex gap-2 lg:gap-7'>
                <span><img className='w-[50%] md:w-[100%] lg:w-[80%]' src={logo} alt="" /></span>
                <Link to='/'><p className='hidden md:block'>Home</p></Link>
                <a href="#explore"><p className='hidden md:block'>Explore</p></a>
                <a href="#category"><p className='hidden md:block'>Categories</p></a>
                <a href="#community"><p className='hidden md:block'>Communities</p></a>
            </div>
            <div className='hidden md:flex relative w-[50%] justify-end my-auto gap-4 md:w-[50%]'>
                <div>
                    <Search size={15} className='lg:size-5 absolute md:left-13 lg:left-54 left-15 top-1 text-gray-400'/>
                    <input className='bg-gray-200 rounded-2xl md:pl-6 lg:pl-10 outline-none py-[2px] lg:py-0' type="text" placeholder='   search stories' />
                </div>
                <div className='flex gap-2'>
                    <Link to='/SignIn'><button className='text-black border px-1 rounded-md border-purple-500'>Sign In</button></Link>
                    <Link to='/SignUp'><button className='text-white bg-purple-500 rounded-md py-[1] px-1'>Sign Up</button></Link>
                </div>
            </div>
            <button onClick={changeView} className='block md:hidden'>{isOpen? <X/> : <Menu/>}</button>
        </div>
        {isOpen && <div className='flex flex-col text-center md:hidden py-3 gap-1 transition-[transform 30s ease-in]'>
                    <div className='relative'>
                        <Search size={15} className='text-gray-500 absolute left-25 top-1'/>
                        <input className='border border-gray-400 outline-none bg-gray-200 rounded-md w-[80%] text-center' type="text" placeholder='search stories'/>
                    </div>
                    <h1>Home</h1>
                    <h1>Explore</h1>
                    <h1>Categories</h1>
                    <h1>Communities</h1>
                    <Link to='/SignIn'><button className='border border-purple-500 hover:bg-purple-500 hover:text-white w-[80%] mx-auto'>Sign In</button></Link>
                    <Link to='/SignUp'><button className='bg-purple-500 text-white w-[80%] mx-auto'>Sign Up</button></Link>
                </div>}
   </div>
  )
}

export default Navbar