import React, { useEffect, useState } from 'react'
import img from "../assets/Img/img.png"
import { BaseUrl, Product ,getCategories} from "../assets/Constant/Api";
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
      let response = await axios.get(`${BaseUrl}${Product}${getCategories}`);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div>
      <section>
        <img src={img} className='h-full w-full	' />

        <a href='./cart'>
        <button className='border-2 rounded-lg bg-white p-1 font-semibold btn  mt-15 btn w-52 border-2 hover:border-black order-btn'> ORDER NOW</button>
        </a>

      </section>

      <section className=''>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold mx-20'>Categories</h1>
          <a href="allCategory">
          <p className='mx-20 border-2 rounded-lg bg-black text-white p-2 rounded-2xl font-semibold border-2 hover:border-black shadow-lg w-50 '>View More</p>

          </a>
          

        </div>
        <div className='mt-10 flex justify-evenly w-full gap-4'>

          {data.map((item) => (
            <>
              <HomeProduct item={item} />
            </>
          ))}
          </div>
      </section>

    </div>

  )

}
