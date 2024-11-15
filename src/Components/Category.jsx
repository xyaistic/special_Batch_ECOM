import React ,  { useEffect, useState } from 'react';
import HomeProduct from "./HomeProduct.jsx";
import axios from "axios";
import { BaseUrl, Product ,getCategories} from "../assets/Constant/Api";



const Category = () => {
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
  return (
    <div className='mt-10 flex justify-evenly w-full gap-4'>

          {data.map((item) => (
            <>
              <HomeProduct item={item} />
            </>
          ))}
          </div>
  )
}

export default Category
