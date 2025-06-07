import React from 'react'
import img from '../assets/Frame 21.png'
import { useState } from 'react';
import writer from '../assets/Writer Image.png'
import SingleCommunity from './SingleCommunity';


const Community = () => {
    const data = [
    {
        img: img,
        name:"Bibian",
        time:"2 hours ago",
        tag:"Craft & Technique",
        topic:"How do you overcome writer's block when on a deadline ?",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniquesfrom the community ? ",
        button:"Join Discussion"
    }
]
    const [follow1, setFollow1] = useState(false)
    const handleFollow1 = () => {
        if(follow1){
            setFollow1(false)
        }
        else{
            setFollow1(true)
        }
    }
    const [follow2, setFollow2] = useState(false)
    const handleFollow2 = () => {
        if(follow2){
            setFollow2(false)
        }
        else{
            setFollow2(true)
        }
    }
    const [follow3, setFollow3] = useState(false)
    const handleFollow3 = () => {
        if(follow3){
            setFollow3(false)
        }
        else{
            setFollow3(true)
        }
    }


  return (
    <div className='w-full'>
        <div id='community' className='w-[95%] md:w-11/12 container mx-auto py-5 md:py-7'>
            <h1 className='text-center font-bold py-3 text-lg lg:text-2xl'>Community Voices</h1>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='md:w-[60%] lg:w-[65%] rounded-md flex flex-col bg-gray-200 px-4 py-5 gap-3'>
                    <h1 className='font-bold text-lg'>Trending Discussions</h1>
                    <div className='rounded-md w-[100%] bg-white mx-auto flex gap-2 px-2 py-5 text-sm'>
                        {
                            data.map((item, index) => {
                                return <SingleCommunity key={index} {...item}/>
                            })
                        }
                    </div>
                    
                    <div className='rounded-md w-[100%] bg-white mx-auto flex gap-2 px-2 py-5 text-sm'>
                        {
                            data.map((item, index) => {
                                return <SingleCommunity key={index} {...item}/>
                            })
                        }
                    </div>
                </div>
                <div className='md:w-[40%] lg:w-[35%] rounded-md p-2 lg:p-3 bg-gray-200'>
                    <h1 className='py-1 font-bold text-lg'>Featured Writers</h1>
                    <div id='upper' className='py-2'>
                        <div className='flex justify-between text-sm lg:text-md'>
                            <div className='flex gap-2'>
                                <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-semibold'>Maryann</h1>
                                    <p>Poetry & Memoir</p>
                                </div>
                            </div>
                           <div>
                             <button onClick={handleFollow1} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow1? "Following":"Follow"}</button>
                           </div>
                        </div>
                        <div className='flex justify-between text-sm lg:text-md py-1'>
                            <div className='flex gap-2'>
                                <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-semibold'>Albert</h1>
                                    <p>Literary Fiction</p>
                                </div>
                            </div>
                           <div>
                             <button onClick={handleFollow2} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow2? "Following":"Follow"}</button>
                           </div>
                        </div>
                            <div className='flex justify-between text-sm lg:text-md'>
                            <div className='flex gap-2'>
                                <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-semibold'>Korede</h1>
                                    <p>Cultural Essay</p>
                                </div>
                            </div>
                           <div>
                             <button onClick={handleFollow3} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow3? "Following":"Follow"}</button>
                           </div>
                        </div>
                    </div>
                    <div id='lower' className='text-sm lg:text-md'>
                        <h1 className='font-bold text-lg py-2'>Popular Tags</h1>
                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#WritingLife</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#CreativeProcess</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#Poetry</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#Love</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#VentureCapital</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#WritingCommunity</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#Inspiration</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#LiteraryLife</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#TraumaHealing</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#Gaming</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#WritingTips</span>
                            <span className='bg-gray-400 border border-gray-400 rounded-full px-2 py-1'>#Fiction</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community