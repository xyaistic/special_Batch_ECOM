import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl, createUser } from "../constant/Api";


const RegistrationPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const onSubmit = async (data) => {
try {
  console.log("Form Data:",);

    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      contact: data.phone_number,
      address: data.address,
      first_name: data.first_name,
      last_name: data.last_name,
    }
    console.log('datttttaa',userData)
    reset();
    const res = await axios.post(`${BaseUrl}${createUser}`,userData)
    console.log(res)
    navigate('/login');
} catch (error) {
  console.log(error)
}
    
  };

  // const registerUser = async () => {
  //   try {
  //     await axios.post(`${BaseUrl}${createUser}`)
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="first_name"
              type="first_name"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("first_name", {
                required: "first_name is required",
                minLength: { value: 3, message: "First Name must be at least 3 characters long" }
              })}
            />
            {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>}
          </div>



          <div className="mb-4">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="last_name"
              type="last_name"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("last_name", {
                required: "last_name is required",
                minLength: { value: 3, message: "last_name must be at least 3 characters long" }
              })}
            />
            {/* {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>} */}
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="username"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("username", {
                required: "username is required",
                minLength: { value: 3, message: "username must be at least 3 characters long" }
              })}
            />
            {/* {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>} */}
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone_number "
              type="phone_number"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("phone_number", {
                required: "phone_numbe is required",
                minLength: { value: 3, message: "Phone Number must be at least 3 characters long" }
              })}
            />
            {/* {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>} */}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              id="address"
              type="address"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register("address", {
                required: "address is required",
                minLength: { value: 3, message: "Address must be at least 3 characters long" }
              })}
            />
            {/* {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>} */}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register("email", {
                required: "email is required",
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
                required: "password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" }
              })}
            />
            {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div class="mb-6">
            <Link to="/login"><p >Already have an account ? <span className="text-indigo-500" >log in</span></p></Link>
          </div>

          <button onClick={() => registerUser()}
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

