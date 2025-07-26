import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className='fixed z-10 w-full h-full bg-black/60 grid'>
      <form className="place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-6 md:p-7 rounded-lg text-sm animate-fadeIn">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
            className="w-4 cursor-pointer" 
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? null : (
            <input 
              type='text' 
              placeholder='Your Name' 
              required 
              className='outline-none border border-gray-300 p-2.5 rounded' 
            />
          )}
          <input 
            type='email' 
            placeholder='Your Email' 
            required 
            className='outline-none border border-gray-300 p-2.5 rounded' 
          />
          <input 
            type='password' 
            placeholder='Password' 
            required 
            className='outline-none border border-gray-300 p-2.5 rounded' 
          />
          <button className='border-none p-2.5 rounded text-white bg-red-500 text-sm cursor-pointer hover:bg-red-600 transition-colors'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="flex items-start gap-2 -mt-4">
          <input type='checkbox' required className="mt-1" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")} className="text-red-500 font-medium cursor-pointer">Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")} className="text-red-500 font-medium cursor-pointer">Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
