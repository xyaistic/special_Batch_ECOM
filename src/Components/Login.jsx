import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const [reg,setReg] = useState([]);
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
    setReg(data)
    
  };

  const login = () =>{
    const email = reg.email;
    const pass = reg.password;
    
    if (email == fEmail && pass == fPass ) {
      console.log("verified");
      navigate("/");
    } else {
      console.log("invalid credential");
    }
  }


  return (
    <>
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">        
              <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6"> Log in</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4">

                  <label
                    class="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
                <div class="mb-4">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="error">{errors.password.message}</span>
                  )}
                </div>

                <div class="flex items-center mt-4">
                  { 
                   <Link to="/registration"><p >Create a new account? <span className="text-indigo-500" >Click here</span></p></Link>
                  }
                </div>

                <div class="mt-6">
                  <button onClick={()=> login()}
                    type="submit"
                    class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
                  </button>
                </div>
               </form>
            </div>
          </div>
        
    </>
  );
};

export default Login;

