import React from "react";
import img from "../assets/Img/thank-you.png";

export default function ConfirmedOrder() {
  return (
    <div className="flex justify-center ">
    <div className="h-3/4 w-3/5 mt-5 border flex bg-blue-200 flex-col ">

      <div className="flex items-center justify-center p-4">
        <img className="h-20 w-15 " src={img} alt="my image" />
      </div>

      <div  className="h-60 border items-center justify-center  text-center mt-12"> 
      <h1 className="text-4xl font-bold">Thanks for your order!</h1> <br />

        <p className="text-wrap my-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
          repellat dolore dolorum. Blanditiis minima quos, distinctio dolorum
          laudantium deleniti, recusandae unde vel quas numquam nihil et, in
          quia animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
          repellat dolore dolorum. Blanditiis minima quos, distinctio dolorum
          laudantium deleniti, recusandae unde vel quas numquam nihil et, in
          quia animi.
        </p>
      </div>

     <div className="w-full justify-center flex">
      <button className="h-12 w- px-6 m-2 text-lg py-2 ml-2 mt-5  bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          OK
      </button>
      </div>
      
    </div>
  </div>
  );
}
