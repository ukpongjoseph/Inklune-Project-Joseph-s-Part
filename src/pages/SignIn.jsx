import React from 'react'
import inklune from '../assets/Inklune logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignIn = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    // setting state for error
    const [error, setError] = useState({
        email:"",
        password:""        
    })
    // function for form validation
const handleSubmit = (e) => {
    e.preventDefault()
    // initializing error state
    let hasError = false
    // setting variable to store errors
    const newError = {
        email:"",
        password:""
    }
    // conditions for validation
    if(user.email === "" || !user.email.includes("@")){
        newError.email = "Invalid email address"
        hasError = true
    }
    if(user.password.length < 6 || user.password === ""){
        newError.password = "Invalid password"
        hasError = true
    }
    if(hasError){
        setError(newError)
        return
    }
    else{
        setError({
            email:"",
            password:""
        })
        setUser({
            email:"",
            password:""
        })
        navigate('/Landing')
    }
}
    // function to allow input fields accept values
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
        setError({...error, [name]:""})
    }
  return (
    <div className='w-11/12 mx-auto container h-screen flex justify-center items-center'>
        <div className='w-[95%] md:w-[60%] lg:w-[30%]'>
            <Link to='/'><span><img className='md:w-[40%] w-[50%] mx-auto pb-7' src={inklune} alt="" /></span></Link>
            <h1 className='text-center font-bold py-2 text-xl md:text-2xl'>Welcome Back</h1>
            <p className='text-center text-sm md:text-md'>Sign In to continue your writing journey</p>
            <div className='py-2'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 border border-stone-300 rounded-md shadow-2xl px-3 md:px-7 py-5 md:py-7 text-sm md:text-md'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email Address</label>
                        <input className='border px-3 py-1 rounded-md' type="email" id='email' name='email' autoComplete='on' placeholder='Johndoe@example.com' value={user.email} onChange={handleChange}/>
                    </div>
                    {error.email && <p className='text-red-900 text-sm'>{error.email}</p>}
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <label htmlFor="password">Password</label>
                            <a className='text-purple-500' href="#">Forgot Password</a>
                        </div>
                        <input className='border px-3 py-1 rounded-md' type="password" id='password' autoComplete='on' name='password' placeholder='**********' value={user.password}  onChange={handleChange}/>
                    </div>
                    {error.password && <p className='text-red-900 text-sm'>{error.password}</p>}
                    <button className='text-white w-[100%] rounded-md py-2 bg-purple-500 border border-purple-500'>Sign In</button>
                    <div className='text-center flex gap-1 mx-auto'>
                        <p>Don't have an account yet?</p>
                        <Link to='/SignUp'><span className='text-purple-500'>Sign Up</span></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn