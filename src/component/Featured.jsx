import React from 'react'
import { useState } from 'react'
import img1 from '../assets/bibian couples.png'
import img2 from '../assets/writing community.png'
import img3 from '../assets/A beautiful hot mess.png'
import author1 from '../assets/Writer Image.png'
import author2 from "../assets/author2.png"
import author3 from '../assets/author3.png'
import { Link } from 'react-router-dom'
import Popular from './Popular'
import Latest from './Latest'

const Featured = () => {
    const latest = [
    {
        author: author1,
        img: img1,
        name:"Maryann",
        date:"25th April 2025",
        time:"5 mins read",
        title:"The forgotten art of slow writing",
        text:"In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts",
        tag:"creativity"
    },
    {
        author: author2,
        img: img2,
        name:"Bibian",
        date:"25th April 2025",
        time:"5 mins read",
        title:"Finding your writing community",
        text:"The transformative data of belonging to a circle of fellow writers who understand your struggle and celebrate your victories",
        tag:"writing"
    },
    {
        author: author3,
        img: img3,
        name:"Albert",
        date:"25th April 2025",
        time:"5 mins read",
        title:"A beautiful Hot Mess",
        text:"A raw story of personal growth, mental health, and becoming the best version of myself, one imperfect layer at a time",
        tag:"Self Love"
    }
]

const popular = [
    {
        author: author3,
        img: img3,
        name:"Albert",
        date:"25th April 2025",
        time:"5 mins read",
        title:"A beautiful Hot Mess",
        text:"A raw story of personal growth, mental health, and becoming the best version of myself, one imperfect layer at a time",
        tag:"Self Love"
    },
    {
        author: author1,
        img: img1,
        name:"Maryann",
        date:"25th April 2025",
        time:"5 mins read",
        title:"The forgotten art of slow writing",
        text:"In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts",
        tag:"creativity"
    },
    {
        author: author2,
        img: img2,
        name:"Bibian",
        date:"25th April 2025",
        time:"5 mins read",
        title:"Finding your writing community",
        text:"The transformative data of belonging to a circle of fellow writers who understand your struggle and celebrate your victories",
        tag:"writing"
    }
]
    const [toggle, setToggle] = useState(false)
     const handleToggle = () => {
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }
  return (
    <div className='w-full'>
        <div className='w-[95%] md:w-11/12 container mx-auto text-sm lg:text-lg flex flex-col'>
            <div id='upper' className='flex justify-between font-semibold pt-3 md:pt-5'>
                <h1 className='text-lg lg:text-2xl'>Featured List</h1>
                <div className='flex gap-1 md:gap-2 border border-gray-200 md:px-3 md:py-1 rounded-full bg-gray-200'>
                    <button className=' px-3 rounded-full border border-gray-200' style={{
                backgroundColor: toggle? 'white' : 'rgba(238, 238, 238, 1)'
            }} onClick={handleToggle}>Latest</button>
                    <button className='px-3 rounded-full border border-gray-200' style={{
                backgroundColor: toggle? 'rgba(238, 238, 238, 1)' : 'white'
            }} onClick={handleToggle}>Popular</button>
                </div>
            </div>
            <div>
                {toggle &&  <div id='lower' className='flex flex-col md:flex-row gap-4 lg:gap-6 text-sm py-5 lg:py-10'>
                    {
                        popular.map((items, index) => {
                            return <Popular {...items} key={index}/>
                        })
                    }
                </div>}
                {!toggle && <div id='lower' className='flex flex-col md:flex-row gap-4 text-sm py-5 lg:py-10'>
                    {
                        latest.map((item, index) => {
                            return <Latest key={index} {...item}/>
                        })
                    }    
                </div>}
            </div>
           <div className='flex justify-center text-sm md:text-md'>
             <Link to='/SignIn'><button className='border border-purple-500 px-2 py-1 w-[100%] rounded-sm mb-4 mx-auto'>View more stories</button></Link>
           </div>
        </div>
    </div>
  )
}

export default Featured