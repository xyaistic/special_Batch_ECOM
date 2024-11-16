import React, { useEffect, useState } from 'react'
import img from "../assets/Img/img.png"
import { BaseUrl, getAllProduct ,getCategories} from "../Constant/Api.js";
import axios from "axios";
import HomeProduct from "./HomeProduct.jsx";
import "./Style.css"


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);


  const fetchData = async () => {
    try {
      let response = await axios.get(`${BaseUrl}${getAllProduct}`);
      console.log(response.data);
      // setData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  return (
<div>
  <section>
    <div className="relative flex">
      <img src={img} className="h-[90vh] w-full object-cover" />
    </div>

    <div>
      <a href='./cart'>
        <h1 className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl font-bold ">
          Up to 50% Off Best-Selling Fashion Items
          <br /> Deep Discounts on Past Seasons Clothing
        </h1>

        <button className="border-2 rounded-lg bg-white p-2 hover:border-orange-500 absolute bottom-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-bold ">
          ORDER NOW
        </button>
      </a>
    </div>
  </section>

  <section>
    <div className='flex justify-between'>
      <h1 className='text-2xl font-bold mx-20'>Categories</h1>
      <a href="allCategory">
        <p className='mx-20 border-2 rounded-lg bg-black text-white p-2 rounded-2xl font-semibold border-2 hover:border-black shadow-lg w-50 '>
          View More
        </p>
      </a>
    </div>

    <div className='mt-10 flex justify-evenly w-full gap-4'>
      {data.map((item) => (
        <HomeProduct item={item} key={item.id} /> 
      ))}
    </div>
  </section>
</div>


  )

}


