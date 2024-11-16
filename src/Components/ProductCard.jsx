import React from 'react';
import {useNavigate} from "react-router-dom"

import { Link } from 'react-router-dom';
import { BaseUrl } from '../Constant/Api';
// const navigate = useNavigate()

function ProductCard({ product }) {
  const handleAddToCart = () => {

  };
  let token = "token"

  return (
    <>

      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-between">
        <div className='justify-center items-center'>
          <img src={`${BaseUrl}${product.image}`} alt={product.title} className="w-full h-32 object-cover mb-4 rounded" />
          <h2 className="text-sm text-left w-full font-semibold mb-2">{product.title}</h2>
          {/* <p className="text-gray-500 text-left w-full mb-4">${product.price}</p> */}
          <h1>{product.product_name}</h1>
          {/* <h1>{product.product_description}</h1> */}
          <h1>{product.price}</h1>
        </div>
        <Link to="/SingleProduct">
        <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Details
      </button> 
      </Link>

        {/* {
          token !== null ? (<>navigate("/cart")
          </>) : (<>
            navigate("/login")
          
          </>)} */}
      </div>
    </>
  );
}

export default ProductCard;