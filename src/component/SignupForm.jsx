import React, { useState } from "react";
import {FaEyeSlash,FaEye} from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function SignupForm({setIsLoggedIn}){

    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();
    const [accountType, setAccountType] = useState("student");

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    function changeHandler(e){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [e.target.name]:e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.success("Passoword do not match");
        }
        setIsLoggedIn(true);
        toast.success("Account create successfully");
        const accountData = {
            ...formData,
        };

        navigate("/dashboard");
    }

    return(
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
                <button onclick={() => setAccountType("student")}
                    className={`${
                    accountType === "student"
                        ? "bg-black-900 text-black-5"
                        : "bg-transparent text-black-200 "
                    } py-2 px-5 rounded-full transition-all`}
                    >
                    Student
                </button>
                <button  onclick={() => setAccountType("instructor")}
                    className={`${
                        accountType === "instructor"
                        ? "bg-black-900 text-black-5"
                        : "bg-transparent text-black-200 "
                    } py-2 px-5 rounded-full transition-all`}             
                    >
                    Instructor
                </button>
            </div>

            <form action="" onSubmit={submitHandler}>
                <div className="flex gap-x-4">
                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First name <sup>*</sup></p>

                        <input 
                            className="text-black rounded-[0.75rem] w-full p-[12px] "
                            type="text" 
                            placeholder="Enter First Name"
                            name="firstName"
                            onChange={changeHandler}
                            value={formData.firstName}
                        />
                    </label>

                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last name <sup className="text-pink-200">*</sup></p>

                        <input 
                            className="text-black rounded-[0.75rem] w-full p-[12px]"
                            type="text" 
                            placeholder="Enter Last Name"
                            name="lastName"
                            onChange={changeHandler}
                            value={formData.lastName}
                        />
                    </label>
                </div>

                <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">E-mail Address <sup className="text-pink-200">*</sup></p>

                    <input 
                        required 
                        className="text-black rounded-[0.75rem] w-full p-[12px]"
                        type="text" 
                        placeholder="Enter E-mail"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </label>

                <div className="flex gap-x-4">
                    <label htmlFor="">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Passoword<sup className="text-pink-200">*</sup></p>

                        <input 
                            required
                            className="text-black rounded-[0.75rem] w-full p-[12px]"
                            type={showPassword ? ("text") : ("password")} 
                            placeholder="Enter Password"
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer z-10"
                            onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<FaEye fontSize={24} fill='#AFB2BF'/>) : (<FaEyeSlash fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>


                    <label htmlFor="" className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Passoword<sup className="text-pink-200">*</sup></p>

                        <input 
                            required
                            className="text-black rounded-[0.75rem] w-full p-[12px]"
                            type={showPassword ? ("text") : ("password")} 
                            placeholder="Enter confirm Password"
                            name="confirmPassword"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer z-10"
                            onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<FaEye fontSize={24} fill='#AFB2BF'/>) : (<FaEyeSlash fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-500 rounded-[8px] mt-6 font-medium  w-full">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm