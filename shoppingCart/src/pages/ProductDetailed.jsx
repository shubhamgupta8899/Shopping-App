import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { InitialProducts } from "../data/product";
import { ChevronLeft, ShoppingCart, Tag, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetailed = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const found = InitialProducts.find((data) => data.id == id);
    setProduct(found);
  }, [id]);

  if (!product) {
    return <div className="text-white text-center mt-20">Loding...</div>;
  }

  return (
    <>
      <div
        className="container mx-auto px-4 md:px-8  bg-gray-900 min-h-screen rounded-2xl shadow-2xl
      my-8 p-6 md:p-12 lg:p-16 border border-gray-800 w-11/12"
      >
        <Link to={"/"}>
          <button
            className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 
          mb-12 font-semibold text-lg cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Home</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ">
          <div className="w-full flex items-center justify-center rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]  h-auto object-contain
                rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800/50"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4
                    leading-tight tracking-tighter"
              >
                {product.name}
              </h1>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-orange-400 mb-4">
              ₹{product.price.toFixed(2)}
            </p>

            <h2
              className="text-lg sm:text-xl  font-bold text-gray-200 mb-2 border-b border-e-orange-900/50
                pb-2 flex items-center space-x-2"
            >
              <Tag className="w-5 h-5 text-orange-500" />
              <span>Product Overview</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg  leading-relaxed mb-3">
              {product.description}
            </p>

            <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700 ">
              <li className="flex items-center space-x-3 text-sm md:text-lg lg:text-lg">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span> High-Quality, Professional Grade Materials</span>
              </li>

              <li className="flex items-center space-x-3 text-sm md:text-lg lg:text-lg">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span> Shopping with less price.</span>
              </li>

              <li className="flex items-center space-x-3 text-sm md:text-lg lg:text-lg">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span> High-Quality, Professional Grade Materials</span>
              </li>
            </ul>

            <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
              <button
                onClick={() => addToCart(product)}
                className="flex items-center  justify-center w-full sm:w-3/4 lg:w-full py-3 space-x-2 bg-orange-600 rounded-full
             hover:bg-orange-700 transition duration-200 font-bold shadow-lg shadow-orange-800/50 cursor-pointer 
             transform hover:ring-4 hover:ring-orange-600/5 uppercase tracking-wider"
              >
                <ShoppingCart h-5 w-5 />
                <span>Add to Cart</span>
              </button>

              <Link
                to={"/"}
                className="w-full sm:w-3/4 lg:w-full border-2 border-orange-600 py-3 text-orange-500
              rounded-full hover:bg-orange-900/50 flex items-center justify-center uppercase
              cursor-pointer transform hover:ring-orange-900 tracking-wider"
              >
                Keep Shoping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;
