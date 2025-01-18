import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    getSingleProduct();
  }, []);

  const addToCartHandler = () => {
    if (localStorage.getItem("accessTokenApi")) {
      const initialCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      initialCart.push(singleProduct);
      localStorage.setItem("cart", JSON.stringify(initialCart));

      toast.success("Added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.error("You must login first!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-5xl w-full top-10 rounded-lg p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex justify-center items-center w-full md:w-1/3">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="rounded-lg shadow-md w-full max-w-[250px] h-auto object-contain"
              style={{ width: "250px", height: "250px" }}
            />
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-semibold text-brown-900 mb-11">
              {singleProduct.title}
            </h3>
            <p className="text-xl text-gray-700 font-semibold mb-11">
              Price: ${singleProduct.price}
            </p>
            <p className="text-md text-gray-600 mb-4">
              Category: {singleProduct.category}
            </p>
            <p className="text-blue-gray-900 mb-6">
              Description: {singleProduct.description}
            </p>
            <button
              style={{
                marginTop: "10px",
                border: "1px solid ",
                backgroundColor: "#6F8FAF",
                color: "white",
                padding: "7px",
                borderRadius: "7px",
              }}
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default ViewProduct;
