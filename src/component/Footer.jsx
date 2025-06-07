import React from 'react'
import logo from '../assets/Inklune logo.png'
import twitter from '../assets/Twitter Icon.png'
import instagram from '../assets/Instagram Icon.png'
import facebook from '../assets/Facebook Icon.png'
import medium from '../assets/Medium Icon.png'

const Footer = () => {
  const Foot = [
    {
        head:"Explore",
        first:"Featured Stories",
        second:"Categories",
        third:"Community Discussions",
        fourth:"Writing Resources",
        fifth:"Events & Workshops"
    },
    {
        head:"Company",
        first:"About Us",
        second:"Our Team",
        third:"Career",
        fourth:"Press",
        fifth:"Contact"
    },
    {
        head:"Legal",
        first:"Terms of Service",
        second:"Privact Policy",
        third:"Cookie Policy",
        fourth:"Content Guidlines",
        fifth:"Accessibility"
    }
]
  return (
    <div className='w-full'>
        <div className=' w-[95%] md:w-11/12 container mx-auto text-gray-500'>
          <div className='border border-r-0 border-l-0 border-t-0 border-gray-500 flex flex-col md:flex-row text-center md:text-start gap-10 py-5 text-sm'>
            <div className='md:w-[30%] my-auto'>
              <span><img className='w-[40%] mx-auto md:mx-0' src={logo} alt="" /></span>
              <p className='py-3'>A living archive of voices where ideas are planted, conversations bloom, and communities grow</p>
              <div className='flex w-[50%] gap-2 mx-auto md:mx-0'>
                <span><img src={twitter} alt="" /></span>
                <span><img src={instagram} alt="" /></span>
                <span><img src={facebook} alt="" /></span>
                <span><img src={medium} alt="" /></span>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:w-[70%] gap-5 md:justify-between py-4 md:py-8'>
              {
                Foot.map((item, index) => {
                  return (
                    <div key={index} className='flex flex-col'>
                      <h1 className='text-black font-bold py-3 text-xl'>{item.head}</h1>
                      <a href="#">{item.first}</a>
                      <a href="#">{item.second}</a>
                      <a href="#">{item.third}</a>
                      <a href="#">{item.fourth}</a>
                      <a href="#">{item.fifth}</a>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-center md:text-start md:justify-between text-sm gap-2 py-4'>
              <h1>© 2025 Inklune. All rights reserved</h1>
              <h1>Write Under the Moon. Shine beyond the Stars</h1>
          </div>
        </div>
    </div>
  )
}

export default Footer