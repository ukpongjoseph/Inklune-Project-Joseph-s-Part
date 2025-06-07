import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    // useState for values
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    // useState for errors
    const [error, setError] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:""         
    })
    // function to target form
    const handleSubmit = (e) => {
        e.preventDefault()
        // initializing error state
        let hasError = false
        // setting error variables
        const newError = {
            fullname:"",
            email:"",
            password:"",
            confirmPassword:""
        }
        // conditions for validation
        if(user.fullname === "" || user.fullname.length < 6){
            newError.fullname = "Invalid Name"
            hasError = true
        }
        if(user.email === "" || !user.email.includes("@")){
            newError.email = "Invalid email address"
            hasError = true
        }
        if(user.password.length < 6 || user.password === ""){
            newError.password = "Invalid Password"
            hasError = true
        }
        if(user.confirmPassword !== user.password || user.confirmPassword === ""){
            newError.confirmPassword = "Password mismatch"
            hasError = true
        }
        if(hasError){
            setError(newError)
            return
        }
        else{
            setUser({
                fullname:"",
                email:"",
                password:"",
                confirmPassword:""
            })
            setError({
                fullname:"",
            email:"",
            password:"",
            confirmPassword:""
            })
            navigate('/Landing')
        }
    }
    // function to accept input in the form
    const handleChange = (e) => {
        const {name, value} = e.target
       setUser({...user, [name]: value})
        setError({...error, [name]:""})
    }
  return (
    <div className='flex min-h-screen justify-center items-end container w-11/12 mx-auto pb-5'>
        <div className='mx-auto md:w-[60%] lg:w-[35%] p-1 md:p-5'>
            <h1 className='text-center font-bold text-2xl'>Create your Account</h1>
            <p className='text-center md:w-[90%] mx-auto py-3 text-sm'>Join INKLUNE and start sharing your stories with the world</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 border border-stone-300 rounded-md shadow-2xl px-3 md:px-7 py-5 md:py-7'>
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor="fullname">Full Name</label>
                    <input className='border rounded-md py-2 px-3' autoComplete='on' type="text" id='fullname' name='fullname' value={user.fullname} placeholder='John Doe' onChange={handleChange}/>
                </div>
                {error.fullname && <p className='text-red-900 text-sm'>{error.fullname}</p>}
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor="email">Email Address</label>
                    <input className='border rounded-md py-2 px-3' autoComplete='on' type="email" id='email' name='email' value={user.email} placeholder='Johndoe@example.com' onChange={handleChange}/>
                </div>
                {error.email && <p className='text-red-900 text-sm'>{error.email}</p>}
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor="password">Password</label>
                    <input className='border rounded-md py-2 px-3' autoComplete='on' type="password" id='password' name='password' value={user.password} placeholder='**********' onChange={handleChange}/>
                </div>
                {error.password && <p className='text-red-900 text-sm'>{error.password}</p>}
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className='border rounded-md py-2 px-3' autoComplete='on' type="password" id='confirmPassword' name='confirmPassword' value={user.confirmPassword} placeholder='**********' onChange={handleChange} />
                </div>
                {error.confirmPassword && <p className='text-red-900 text-sm'>{error.confirmPassword}</p>}
                <button className='w-[100%] border text-white rounded-md bg-purple-500 py-2 border-purple-500 text-sm'>Sign Up</button>
                <div className='text-center text-sm flex gap-1 mx-auto'>
                    <span>Already have an account?</span>
                    <Link to='/SignIn'><span className='text-fuchsia-800 text-sm'>Sign In</span></Link>
                </div>
            </form>
            <p className='py-10 text-center text-[10px]'>By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </div>
    </div>
  )
}

export default SignUp