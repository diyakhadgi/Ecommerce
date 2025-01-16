import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ViewProduct = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar/>
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-5xl w-full top-10 rounded-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Product Image */}
        <div className="flex justify-center items-center w-full md:w-1/3">
          <img 
            src={singleProduct.image} 
            alt={singleProduct.title} 
            className="rounded-lg shadow-md w-full max-w-[250px] h-auto object-contain" 
            style={{ width: '250px', height: '250px' }}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">{singleProduct.title}</h3>
          <p className="text-xl text-gray-700 font-semibold mb-2">Price: ${singleProduct.price}</p>
          <p className="text-md text-gray-600 mb-4">Category: {singleProduct.category}</p>
          <p className="text-gray-500 mb-6">{singleProduct.description}</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
</>
  );
};

export default ViewProduct;
