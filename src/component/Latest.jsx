import React from 'react'
import { Heart } from 'lucide-react'
import comment from '../assets/coment.png'

const Latest = ({author, img, date, time, tag, name, text, title}) => {
  return (
    <div className='lg:w-[33%] min-h-[100%]'>
        <div id='first' className='flex flex-col flex-1 border rounded-3xl border-gray-200'>
            <div className='flex-1 h-[100%]'>
                <img className='w-[100%]' src={img} alt="" />
            </div>
            <div id='second' className='flex-1 p-3 relative h-[50%]'>
                <div id='top' className='flex gap-2'>
                    <img className='w-[20%] md:w-[30%] lg:w-[20%]' src={author} alt="" /> 
                    <div className='my-auto'>
                        <h1 className='font-bold text-lg lg:text-xl'>{name}</h1>
                        <p className='text-[12px] lg:text-sm'>{date} <span className='pl-3'>{time}</span></p>
                    </div>
                </div>
                <div id='mid'>
                    <h1 className='font-bold py-2 lg:text-lg'>{title}</h1>
                    <p className='lg:text-md py-2'>{text}</p>
                </div>
                <div id='bottom' className='flex justify-between gap-2'>
                    <p className=' border bg-gray-200 rounded-full border-gray-200 px-2 md:px-1 lg:px-2 md:text-[12px] lg:text-[14px]'>{tag}</p> 
                    <div className='flex gap-1'>
                        <button disabled={true} style={{cursor:"not-allowed"}}>
                            <div className='flex'>
                                <Heart size={20}  className='text-gray-200 lg:size-6'/> 
                                <sub className='text-[9px] lg:text-[12px] pt-2 text-gray-400'>242</sub> 
                            </div>
                        </button>
                            <button disabled={true} style={{cursor:"not-allowed"}}><img className='w-[50%]' src={comment} alt="" /></button>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Latest