import React from "react";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <div className="flex bg-white justify-between items-center h-[10vh]">
        <h1 className="text-orange-600 m-10 text-2xl font-bold ">Navbar</h1>
        <ul className=" flex font-400 text-black gap-10 mr-9 text-[17px]  ">
          <Link to="/">
            <li className="hover:text-orange-500">Home</li>
          </Link>
          <Link to="/product">
            <li className="hover:text-orange-500">Product</li>
          </Link>
          
          
          <Link to="/allCategory">
            <li className="hover:text-orange-500">All Category</li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center gap-2 hover:text-orange-500 ">
              <IoCart className="size-7 h" />
            </li>
          </Link>
          <Link to="/wishlist">
            <li className="hover:text-orange-500">
              <CiHeart className="size-7" />
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex items-center gap-2 hover:text-orange-500 ">
              <CgProfile className="size-7" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
