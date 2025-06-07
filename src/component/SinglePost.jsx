import React, {useState} from 'react'
import { Heart } from 'lucide-react'
import comment from '../assets/coment.png'
import action from '../assets/Action Icon.png'
import bookmark from '../assets/bookmark.png'
import dot from '../assets/dot.png'
import More from './More'

const SinglePost = ({img, name, title, text, poster, date, item, addFollowed, following}) => {
        const [addComment, setAddComment] = useState(false)
        const handleComment = () => {
            if(!addComment){
                setAddComment(true)
            }
            else{
                setAddComment(false)
            }
        }
        const closeComment = () => {
            if(addComment){
                setAddComment(false)
            }
        }
    const [more, setMore] = useState(false)
    const handleMore = () => {
        if(!more){
            setMore(true)
        }
        else{
            setMore(false)
        }
    }
    const [follow, setFollow] = useState(false)
    const handleFollow = () => {
        if(!follow){
            setFollow(true)
            addFollowed(item)
        }else{
            setFollow(false)
            following.pop()

        }
    }
    const [count, setCount] = useState(242)
    const [reaction, setReaction] = useState(false)
    const handleReaction = () => {
        if(!reaction){
            setReaction(true)
            setCount(count + 1)
        }else{
            setReaction(false)
            setCount(count - 1)
        }
    }
  return (
    <div className="first relative border border-r-0 border-l-0 border-gray-200 w-[90%] px-1 py-2 lg:px-3 lg:py-5 text-sm md:text-md   lg:text-[15px]">
        <div id='top' className='w-[80%] flex justify-between pb-1'>
            <div className='flex gap-2 lg:gap-4 lg:w-[40%]'>
                <span><img className='w-[30px] lg:w-[50px]' src={img} alt="" /></span>
                <h1 className='lg:w-[50%] my-auto'>{name}</h1>
            </div>
            <button onClick={handleFollow} className='bg-gray-200 px-2 py-1 rounded-full lg:px-4 my-auto'>{follow? "Following" : "Follow"}</button>
        </div>
        <div id='mid' className='w-[100%] flex gap-2 lg:gap-5 lg:my-auto'>
            <div className='w-[80%] lg:text-[15px]'>
                <h1 className='font-bold py-1 lg:py-2 md:text-lg lg:text-xl'>{title}</h1>
                <p className='text-gray-500'>{text}</p>
            </div>
            <span className='w-[20%]'><img src={poster} alt="" /></span>
        </div>
        <div id='bottom' className='lg:w-[80%] flex md:justify-between py-3 lg:py-0'>
            <div className='flex text-gray-500 w-[80%] md:w-[50%] lg:w-[40%] md:gap-3 gap-2'>
                <p className='text-[12px] lg:text-[14px] lg:pt-1'>{date}</p>
                <div className='flex'>
                    <Heart style={{
                        color:reaction? "red" : "gray",
                        fill: reaction? "red" : "white"
                    }} size={20} onClick={handleReaction} className='text-gray-200 lg:size-6'/>
                    <sub className='text-[8px] lg:text-[12px] pt-2'>{count}</sub>
                </div>
                <span onClick={handleComment}><img className='lg:w-[60%] w-[50%]' src={comment} alt="" /></span>
            </div>
            <div className='flex w-[30%] md:w-[35%] lg:w-[20%]'>
                <span><img className='w-[80%] md:w-[50%] lg:w-[60%]' src={action} alt="" /></span>
                <span><img className='w-[80%] md:w-[50%] lg:w-[60%]' src={bookmark} alt="" /></span>
                <span className='hover:cursor-pointer' onClick={handleMore}><img className='w-[80%] md:w-[50%] lg:w-[60%]' src={dot} alt="" /></span>
                {more && <More/>}
            </div>
        </div>
            {addComment && <div className='flex gap-3 my-1'>
                <input className='px-3 py-1 rounded-sm border border-gray-300 outline-none' type="text" />
                <button onClick={closeComment}  className='bg-purple-500 text-white text-sm px-2 py-1 rounded-sm'>Send</button>
            </div>}
    </div>
  )
}

export default SinglePost