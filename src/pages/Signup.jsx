import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import illustration from "../assets/images/illustration.png"
import { Link } from 'react-router-dom'
const Signup = () => {
    const [confirmPassword,setConfirmPassword]=useState()
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword
  });

  const [error, setError] = useState(null);
 const navigate=useNavigate()
  const handlesignup=async(e)=>{
   e.preventDefault();
    
   try {
    
    const res=await axios.post("/api/auth/register" ,form , {withCredentials:true})
    console.log(res.data)
   navigate("/")
   } catch (error) {
    setError(error.response.data.message)
    console.log(error)
    console.log(error.response.data)
   }
  }

  return (
    <div className="w-full flex h-auto min-h-screen items-center justify-center overflow-x-hidden bg-accent-content bg-cover bg-center bg-no-repeat py-10 ">
        
        <div className='h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  bg-indigo-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 shadow-base-300/20 z-1 space-y-6  p-6 shadow-md sm:min-w-md lg:p-8 '>
            <img src={illustration} alt="" width={500}/>
        </div>
  <div className=" flex items-center justify-center   " >
    
    <div className="bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 shadow-base-300/20 z-1 w-full space-y-6  p-6 shadow-md sm:min-w-md lg:p-8 h-screen">

      <div>
          {error && <p className="text-red-500 mb-4 "> {error} </p>}
        <h3 className="text-base-content mb-1.5 text-2xl font-semibold">
          Sign Up 
        </h3>
        <p className="text-base-content/80">Create a new account.</p>
      </div>
      <div className="space-y-4">
        <form className="mb-4 space-y-4" onSubmit={handlesignup}>
          <div>
            <label className="label-text" htmlFor="userName">
              Username*
            </label>
            <input
            value={form.name}
              type="text"
              placeholder="Enter your username"
          className="input focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              id="userName"
              required=""
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>
          <div>
            <label className="label-text" htmlFor="userEmail">
              Email address*
            </label>
            <input
            value={form.email}
              type="email"
              placeholder="Enter your email address"
              className="input focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent "
              id="userEmail"
              required=""
              onChange={(e)=>setForm({...form,email:e.target.value})}
            />
          </div>
          <div>
            <label className="label-text" htmlFor="userPassword">
              Password*
            </label>
            <div className="input focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
              <input
                id="userPassword"
                value={form.password}
               type={showPassword ? "text" : "password"}
                placeholder="············"
                required=""
                onChange={(e)=>setForm({...form,password:e.target.value})}
              />
              <button
                type="button"
                className="block cursor-pointer"
                aria-label="userPassword"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="icon-[tabler--eye] password-active:block hidden size-5 shrink-0" />
                <span className="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0" />
              </button>
            </div>
          </div>
          <div >
            <label className="label-text" htmlFor="userConfrimPassword">
              Confirm Password*
            </label>
            <div className="input focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
              <input
                id="userConfrimPassword"
             type={showConfirmPassword ? "text" : "password"}
                placeholder="············"
                required=""
                value={confirmPassword}
                onChange={(e)=>setShowPassword(e.target.value)}
              />
              <button
                type="button"
                className="block cursor-pointer"
                aria-label="userConfrimPassword"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <span className="icon-[tabler--eye] password-active:block hidden size-5 shrink-0" />
                <span className="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0" />
              </button>
            </div>
          </div>

          <button  className="btn btn-lg btn-accent btn-gradient btn-block border-0">
            Sign Up 
          </button>
        </form>
        <p className="text-base-content/80 mb-4 text-center">
          Already have an account?
          <Link to={"/"} className="link link-animated link-accent font-normal">
            Sign in instead
          </Link>
        </p>
   
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup
