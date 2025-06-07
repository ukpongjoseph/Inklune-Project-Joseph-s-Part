import React, { useContext } from 'react'
import Nav from '../component/Nav'
import { Context } from '../component/Context'
import SingleFollow from '../component/SingleFollow'
import { Link } from 'react-router-dom'




const Following = () => {
  const{following, remove} = useContext(Context)
  return (
    <div className='w-full'>
        <Nav/>
        <div className='w-[95%] md:w-11/12 container mx-auto pt-5 lg:pt-8'>
          {
            following.length === 0 && <div className='flex flex-col justify-center gap-7 items-center'>
              <h1 className='text-purple-500 font-bold text-lg md:text-2xl lg:text-4xl'>You are Yet to follow an Author or a Post</h1>
              <Link to='/Landing'><button className='bg-purple-500 text-white font-bold px-3 py-1 rounded-md'>Go back Home</button></Link>
            </div>
          }
            {
                following.map((item) => {
                   return <SingleFollow key={item.id} {...item} following={following} remove={remove} item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default Following