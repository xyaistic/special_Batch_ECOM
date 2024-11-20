import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl, getCart } from "../Constant/Api";
import image from '../assets/Img/img.jpg'
export default function Cart() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" flex bg-gray-200 w-3/5 h-56 ">
        <img className="h-3/4 m-4" src={image} />
        <div className="flex-row mt-6">
        <h2 className="mt- ">hoodie</h2>
        <h3 className="m-" >size</h3>
        <h3 className="m-">quantity</h3>
        <h3 className="m-">price</h3>
        </div>
      
        </div>
      </div>
    </>
  );
}
