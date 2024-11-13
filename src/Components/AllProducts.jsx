import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map(product => (
        <ProductCard className="hover:border-4 border-black" key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
