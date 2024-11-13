import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = (props) => {
  const [data,setData]=useState('')
  const navigate = useNavigate();
  const fEmail = "rehan@gmail.com";
  const fPass = "123456";
  const token = "token";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 
  const onSubmit = (data) => {
    console.log(data);
    if(data.email == fEmail && data.password == fPass){
      console.log('verified');
      sessionStorage.setItem("token",token );
     navigate("/home");
    } else{
      alert("invalid credential");
    }

  };
  console.log(sessionStorage.getItem("token"))

// console.log(email,pass)
//   const auth = () => {
   
//     if(email === fEmail && pass === fPass){
//       console.log('verified');
//     } else{
//       console.log("invalid")
//     }
//   }
  return (
    <> 
    <form  onSubmit={handleSubmit(onSubmit)}> 
      <div>
        <div class="container mx-auto my-4 w-1/2">
          <div class="flex justify-center">
            <div class="w-full max-w-md">
              <h4 class="text-center text-lg font-semibold mt-5">Login</h4>
              
            <div class="mt-5">
            <label class="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register('email', {
              required: true,
              pattern: {
                message: 'Invalid email format'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
                {/* <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                /> */}
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                placeholder="Enter password"
                {...register('password', {
                 required: true,
                minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
                }
                })}
              />
          {errors.password && <span className="error">{errors.password.message}</span>}
                {/* <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                /> */}
              </div>

              <div class="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="remember"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-900">
                  Remember Me
                </label>
              </div>

              <div class="mt-6">
                <button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};

export default Login;
