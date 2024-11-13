import React from 'react';

function ProductCard({ product }) {
  const handleAddToCart = () => {
    
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-500 mb-4">${product.price}</p>
    <a href='Cart'>  <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add to Cart
      </button> </a>
    </div>
  );
}

export default ProductCard;

