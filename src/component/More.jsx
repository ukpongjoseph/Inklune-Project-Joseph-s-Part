import React from 'react'
import { Share2 } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

const More = () => {
  return (
    <div>
        <div className='flex border border-gray-200 bg-white py-1 px-2 absolute z-1 bottom-14 lg:right-40 right-1 rounded-md flex-col gap-2 w-[80px] lg:w-[100px] shadow-2xl'>
             <button className='hover:text-gray-600'>
                <div className='flex gap-2'>
                    <Share2/>
                    <p>Share</p>
                </div>
            </button>
            <button className='hover:text-gray-600'>
                <div className='flex gap-2'>
                    <Pencil/>
                    <p>Edit</p>
                </div>
            </button>
            <button className='hover:text-gray-600'>
                <div className='flex gap-2'>
                    <Trash2/>
                    <p>Delete</p>
                </div>
            </button>
        </div>
    </div>
  )
}

export default More