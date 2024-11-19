import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {

  // const [token,setToken] = useState()
  // console.log(token)

  // const access = localStorage.getItem("accessToken")
  // setToken(access)
  // console.log(access,'kkkkk')
  // // setToken(access);

  const deleteToken = () => {
    localStorage.removeItem("accessToken")
    alert('deleted token')
    // setToken("");
  }

 const token = localStorage.getItem("accessToken")


  return (
    <>
      <div className="flex bg-white justify-between items-center h-[8vh]">
        <Link to="/"><h1 className="text-orange-600 m-10 text-2xl font-bold ">Amazon</h1></Link>
        <ul className=" flex font-400 text-black gap-10 mr-9 text-[17px]  ">
          <Link to="/home">
            <li className="underline-offset-[3px] hover:text-orange-500">Home</li>
          </Link>
          <Link to="/product">
            <li className="hover:text-orange-500">Product</li>
          </Link>
          {/* <li className="  border-2-black rounded-xl hover:border-orage-600  p-1 f-w-">
            <input type="text" placeholder="Search Here" />
          </li> */}

          <Link to="/allCategory">
            <li className="hover:text-orange-500">All Category</li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center gap-2 hover:text-orange-500 ">
              <IoCart className="size-6 " />
            </li>
          </Link>
          <Link to="/wishlist">
            <li className="hover:text-orange-500">
              <CiHeart className="size-6" />
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex items-center gap-2 hover:text-orange-500 ">
              <CgProfile className="size-6" />
            </li>
          </Link>
          {/* <Link to="/registration">
            <li className="hover:text-orange-500">Registration</li>
          </Link> */}
          {token != null ? (
            <>
              <li className="hover:text-orange-500-xl" onClick={() => deleteToken()}>
                Log out
              </li>
            </>
          ) : (<>
              <Link to="/login">
               <li className="hover:text-orange-500">Login</li>
            </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
