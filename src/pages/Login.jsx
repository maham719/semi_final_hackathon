import React, { useState } from 'react'
import illustration from "../assets/images/illustration.png"
import { Link, useNavigate } from 'react-router-dom'
import ToggleTheme from '../components/ToggleTheme.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import axios from "../api/axios.js";
const Login = () => {
   const {setAuth}=useAuth()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
 const navigate=useNavigate()
  const handlelogin=async(e)=>{
   e.preventDefault();
   try {
    const res=await axios.post("/api/auth/login" ,form , {withCredentials:true})
    setAuth({ accessToken: res.data.accessToken, role: res.data.user.role })
    console.log(res.data)
  
      navigate("/")
      
   } catch (error) {
    setError(error.response.data.message)
    console.log(error)
   }
  }
  return (
    <div className="flex h-auto min-h-screen items-center justify-center overflow-x-hidden bg-accent-content bg-cover bg-center bg-no-repeat py-10 dark:bg-black">
    


    <div className='h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  bg-indigo-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100  shadow-base-300/20 z-1 space-y-6  p-6 shadow-md sm:min-w-md lg:p-8 dark:bg-black'>
            <img src={illustration} alt="" width={500}/>
        </div>

  <div className="relative flex items-center justify-center ">
   
    <div className="bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 shadow-base-300/20 z-1 w-full space-y-6 -xl p-6 shadow-md sm:min-w-md lg:p-8 h-screen">

      <div>
         {error && <p className="text-red-500 mb-4 "> {error} </p>}
        <h3 className="text-base-content mb-1.5 text-2xl font-semibold">
          Login
        </h3>
        <p className="text-base-content/80">login to your account</p>
      </div>
    
      {/* <div className="flex flex-wrap gap-4 sm:gap-6">
        <a href="#" className="btn btn-outline btn-primary grow">
          Login as User
        </a>
        <a href="#" className="btn btn-outline btn-primary grow">
          Login as Admin
        </a>
      </div> */}
      <div className="space-y-4">
        <form className="mb-4 space-y-4" onSubmit={handlelogin}>
          <div>
            <label className="label-text" htmlFor="userEmail">
              Email address*
            </label>
            <input
            onChange={(e)=>setForm({...form,email:e.target.value})}
              type="email"
              placeholder="Enter your email address"
               className="input focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              id="userEmail"
              required=""
            />
          </div>
          <div >
            <label className="label-text" htmlFor="userPassword">
              Password*
            </label>
            <div className="input focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
              <input
                id="userPassword"
                type="password"
                placeholder="············"
                required=""
                onChange={(e)=>setForm({...form,password:e.target.value})}
              />
              <button
                type="button"
                data-toggle-password='{ "target": "#userPassword" }'
                className="block cursor-pointer"
                aria-label="userPassword"
              >
                <span className="icon-[tabler--eye] password-active:block hidden size-5 shrink-0" />
                <span className="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0" />
              </button>
            </div>
          </div>
        
          <button className="btn btn-lg btn-accent btn-gradient btn-block">
            Login
          </button>
        </form>
        <p className="text-base-content/80 mb-4 text-center">
          New on our platform?
          <Link to={"/register"} className="link link-animated link-primary font-normal">
            Create an account
          </Link>
        </p>
    
      </div>
    </div>
  </div>
</div>

  )
}

export default Login
