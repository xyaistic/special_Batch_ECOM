import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { BaseUrl, getAllProduct } from '../Constant/Api.js';
import axios from 'axios';
import { CgLaptop } from 'react-icons/cg';

function AllProducts() {
  const [products, setData] = useState([]);

 const fetchData = async () =>{
  try{
    let response = await axios.get(`${BaseUrl}${getAllProduct}`);
    console.log(response.data)
    setData(response.data)
  } catch(error){
    console.log(error)
  }
 }

  // console.log(products);

  useEffect(() => {

    fetchData()
   
  }, []);

  return (
    // <></>
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map(product => (
        <ProductCard className="hover:border-4 border-black" key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
