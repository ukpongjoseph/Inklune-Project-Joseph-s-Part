import React, {useState} from 'react'
import { Heart } from 'lucide-react';
import comment from '../assets/coment.png'
import { Link } from 'react-router-dom';

const SingleCommunity = ({img, name, text, time, tag, topic, button}) => {
    const [modal, setModal] = useState(false)
    const handleModal = () => {
        if(!modal){
            setModal(true)
        }
    }
    const closeModal = () => {
        setModal(false)
    }
  return (
    <div style={{
        backgroundColor:modal? "rgba(0,0,0,0.7) " : "#f4f4f4"
    }} className='rounded-md w-[100%] bg-white mx-auto flex gap-2 px-2 py-5 text-sm relative'>
        <div className='w-[50%] md:w-[30%] lg:w-[10%]'>
            <span><img src={img} alt="" /></span>
        </div>
        <div className='w-[90] flex flex-col gap-2'>
            <div className='flex gap-10 justify-between'>
                <div>
                    <h1 className='font-bold'>{name}</h1>
                    <p className='text-gray-400'>{time}</p>
                </div>
                <div>
                    <span className='border rounded-full px-1 bg-gray-200 border-gray-200'>{tag}</span>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-md md:text-lg'>{topic}</h1>
                <p className='py-1'>{text}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-2 md:gap-4'>
                        <div className='flex'>
                            <button disabled={true} style={{cursor:"not-allowed"}} className='text-gray-400'><Heart size={20}/></button>
                            <span><sub className='text-gray-400 text-[9px] lg:text-[12px]'>242</sub></span>
                        </div>
                        <div className='flex my-auto'>
                            <span disabled={true} style={{cursor:"not-allowed"}}><img className='w-[50%]' src={comment} alt="" /></span>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleModal} className='text-[12px] md:text-sm lg:text-[16px]'>{button}</button>
                        {modal && <div className=' bg-white rounded-md text-center p-3 absolute z-1 top-10 left-7 lg:top-5 lg:left-20 w-[80%]'>
                            <h1 className='font-bold'>Want to join the conversation ?</h1>
                            <p className='text-sm py-1 md:py-2'>Create a free account to like posts, reply, and meet other thoughtful writers</p>
                            <div className='flex justify-center gap-3 py-2'>
                            <Link to='/SignUp'><button className='bg-purple-500 text-white md:px-2 py-1 rounded-sm border border-purple-500 text-sm'>Create Account</button></Link> 
                                <Link to='/SignIn'><button className='text-purple-500 border border-purple-500 rounded-sm py-1 px-3 md:px-7 text-sm'>Sign In</button></Link>
                            </div>
                            <button onClick={closeModal} className='text-sm'>Maybe Later</button>
                </div>}
                    </div>
                </div>  
            </div>
        </div>
    
    </div>
  )
}

export default SingleCommunity