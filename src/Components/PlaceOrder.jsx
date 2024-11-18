// import React, { useState } from 'react';

// function PlaceOrder() {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState(0);
//   const [productQuantity, setProductQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleProductNameChange = (e) => {
//     setProductName(e.target.value);
//   // };

//   const handleProductPriceChange = (e) => {
//     setProductPrice(parseFloat(e.target.value));
//   };

//   const handleProductQuantityChange = (e) => {
//     setProductQuantity(parseInt(e.target.value));
//   };

//   const calculateTotalPrice = () => {
//     setTotalPrice(productPrice * productQuantity);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Order placed!');
//     console.log(`Product Name: ${productName}`);
//     console.log(`Product Price: ${productPrice}`);
//     console.log(`Product Quantity: ${productQuantity}`);
//     console.log(`Total Price: ${totalPrice}`);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
//       <h2 className="text-lg font-bold mb-4">Place Order</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
//           <input
//             type="text"
//             className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={productName}
//             onChange={handleProductNameChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Product Price:</label>
//           <input
//             type="number"
//             step="0.01"
//             className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={productPrice}
//             onChange={handleProductPriceChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Product Quantity:</label>
//           <input
//             type="number"
//             className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={productQuantity}
//             onChange={handleProductQuantityChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Total Price:</label>
//           <input
//             type="number"
//             readOnly
//             className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={totalPrice}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PlaceOrder;

import React from 'react'

export default function PlaceOrder() {
  return (
    <div>
      
    </div>
  )
}
