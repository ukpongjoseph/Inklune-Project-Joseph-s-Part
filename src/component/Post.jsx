import React, { useContext } from 'react'
import writer from '../assets/Writer Image.png'
import { useState } from 'react'
import img from '../assets/Frame 21.png'
import postImage from '../assets/Post Image.png'
import SinglePost from './SinglePost'
import Nav from './Nav'
import Following from '../pages/Following'
import { Context } from './Context'


const Post = () => {
const{addFollowed, following} = useContext(Context)

    const data = [
    {
        id:1,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:2,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:3,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:4,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:5,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:6,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:7,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:8,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:9,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    },
        {
        id:10,
        img:img,
        name:"Bibian Okoro",
        title:"How do you overcome writer's block when on a deadline ? ",
        text:"I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community ? ",
        poster:postImage,
        date:"April 29"
    }
    ]
    const [show, setShow] = useState(false)
    const handleShow = () => {
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    const [follow, setFollow] = useState(false)
    const handleFollow = () => {
        if(follow){
            setFollow(false)
        }else{
            setFollow(true)
        }
    }
    const [follow1, setFollow1] = useState(false)
    const handleFollow1 = () => {
        if(follow1){
            setFollow1(false)
        }else{
            setFollow1(true)
        }
    }
    const [follow2, setFollow2] = useState(false)
    const handleFollow2 = () => {
        if(follow2){
            setFollow2(false)
        }else{
            setFollow2(true)
        }
    }

  return (
    <div className='w-full py-4 md:py-6'>
        <div className='w-[95%] md:w-11/12 container mx-auto flex flex-col md:flex-row-reverse'>
            <div id='tags' className='flex flex-col gap-5 lg:w-[30%] md:w-[40%]'>
                <div className='bg-gray-200 rounded-md p-2 md:p-5'>
                    <h1 className='font-bold text-lg lg:text-2xl'>Upgrade to Premium</h1>
                    <p className='py-3 text-sm md:text-md'>Want the full story? Become a member and explore all of Inklune</p>
                    <button className='text-white rounded-full px-3 bg-purple-500 py-1 text-sm md:text-md'>Upgrade</button>
                </div>
                <div id='featured' className='bg-gray-200 rounded-md p-2 md:p-5'>
                    <h1 className='font-bold text-lg lg:text-2xl pb-3'>Featured Writers</h1>
                   <div className='flex flex-col gap-2'>
                        <div className='flex justify-between text-sm md:text-[12px] lg:text-md'>
                            <div className='flex gap-2'>
                                    <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-bold text-lg'>Maryann</h1>
                                    <p className='text-[13px]'>Poetry & Memoir</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleFollow} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow?"Following":"Follow"}</button>
                            </div>
                        </div>
                        <div className='flex justify-between text-sm md:text-[12px] lg:text-md'>
                            <div className='flex gap-2'>
                                <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-bold text-lg'>Albert</h1>
                                    <p className='text-[13px]'>Literary Fiction</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleFollow1} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow1?"Following":"Follow"}</button>
                            </div>
                        </div>
                        <div className='flex justify-between text-sm md:text-[12px] lg:text-md'>
                            <div className='flex gap-2'>
                                <img className='w-[20%] md:w-[30%]' src={writer} alt="" />
                                <div>
                                    <h1 className='font-bold text-[16px]'>Korede</h1>
                                    <p className='text-[13px]'>Cultural Essay</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleFollow2} className='border rounded-full bg-gray-400 border-gray-400 px-4 py-1'>{follow2?"Following":"Follow"}</button>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='bg-gray-200 flex flex-col gap-2 md:gap-4 rounded-md p-3 md:p-5'>
                    <h1 className='font-bold text-lg lg:text-2xl'>Popular Tags</h1>
                    <div className='flex flex-wrap gap-2 text-sm md:text-md'>
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
            <div className='postPart md:w-[58%] lg:w-[68%] flex flex-col'>
                <button onClick={handleShow} className='mx-auto py-3 font-semibold'>Show {show?"less":"60 more post"}</button>
                <div className="first relative w-[90%] px-1 py-2 lg:px-3 lg:py-5 text-sm md:text-md   lg:text-[15px]">
                    {
                        data.map((item) => {
                            return <SinglePost key={item.id} {...item} addFollowed={addFollowed} item={item} following={following}/>
                        })
                    }
                </div>
                {
                    show &&  <div className="first relative w-[90%] px-1 py-2 lg:px-3 lg:py-5 text-sm md:text-md   lg:text-[15px]">
                    {
                        data.map((item) => {
                            return <SinglePost key={item.id} {...item} addFollowed={addFollowed} item={item} following={following}/>
                        })
                    }
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Post