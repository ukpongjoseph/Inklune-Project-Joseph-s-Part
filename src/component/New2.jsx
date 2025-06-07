import React from 'react'
import { useState  } from 'react'
import { Link } from 'react-router-dom'

const New2 = () => {
    const [user, setUser] = useState({
        email:""
    })
    const [error, setError] = useState({
        email:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
        setError({...error, [name]:""})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let hasError = false
        const newError = {
            email:""
        }
        if(user.email === "" || !user.email.includes("@")){
            newError.email = "Invalid Email address"
            hasError = true
        }   
        if(hasError){
            setError(newError)
            return
        }else{
            setError({
                email:""
            })
            setUser({
                email:""
            })
        }      
    }
  return (
    <div className='w-full flex mx-auto py-3 relative bg-gray-100'>
        <div className='w-[95%] md:w-[70%] container mx-auto text-center py-3 md:py-5'>
            <h1 className='font-bold text-2xl lg:text-3xl'>Stay Inspired</h1>
            <p className='text-sm py-3 lg:text-md'>Receive weekly writing prompts, featured stories, and community highlightd directly in your inbox</p>
            <form onSubmit={handleSubmit} className='md:w-[70%] mx-auto'>
                <input type="email" id='email' name='email' placeholder='Your email address' value={user.email} onChange={handleChange} className='border py-1 px-3 border-gray-400 rounded-sm mr-2 w-[60%] md:w-[75%] lg:w-[85%]' />
                <button className='text-white bg-purple-500 px-2 py-1 rounded-sm'>Subscribe</button>
                {error.email && <p className='text-red-600 text-start '>{error.email}</p>}
            </form>
            <span className='text-[10px]'>By subscribing, you agree to our Privacy Policy and to recieve our emails.</span>
        </div>
    </div>
  )
}

export default New2