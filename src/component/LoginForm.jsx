import React, { useState } from "react";
import {FaEyeSlash,FaEye} from 'react-icons/fa6';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function LoginForm({setIsLoggedIn}){
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        email:"",
        password:"",
    })


    function changHandler(e){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [e.target.name]:e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

    return(
        <form action="" onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label htmlFor="" className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Adsress
                    <sup className="text-pink-200">*</sup>
                </p>

                <input 
                    required 
                    className="text-black rounded-[0.75rem] w-full p-[12px]"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={changHandler}
                />
            </label>

            <label htmlFor="" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200">*</sup>
                </p>

                <input 
                    required 
                    className="text-black rounded-[0.75rem] w-full p-[12px]"
                    type={showPassword ? ("text") : ("password")} 
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={changHandler}
                    name="password"
                />

                <span onClick={ () => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? (<FaEye fontSize={24} fill='#AFB2BF'/>) : (<FaEyeSlash fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forget Password?</p>
                </Link>
            </label> 

            <button className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                Sign In
            </button>   
        </form>
    )
}

export default LoginForm