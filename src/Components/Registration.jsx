import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl,createUser } from "../constant/Api";


const RegistrationPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const onSubmit = (data) => {

    console.log("Form Data:",);

      const userData = {
      username: data.username,
      email: data.email,
      password: data.password
     }  
  console.log(userData)
    reset();
    navigate('/login');
  };

  const registerUser = async ()=>{
    try{
    await axios.post(`${BaseUrl}${createUser}`)
    }  catch(error){
      console.log("error: ",error);
    }  
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}> 

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "Username must be at least 3 characters long" }
              })}
            />
            {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" }
              })}
            />
            {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div class="mb-6">                  
              <Link to="/login"><p >Already have an account ? <span className="text-indigo-500" >log in</span></p></Link>              
          </div>

          <button onClick={()=> registerUser()}
            type="submit" 
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

