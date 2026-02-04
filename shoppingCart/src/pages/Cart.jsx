import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, cartTotalPrice, cartCount } = useCart();

  return (
    <>
      <div className="container max-w-7xl  mx-auto px-4 md:px-8 pt-8  ">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-400 transition
          duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        <h2
          className=" text-2xl md:text-3xl lg:text-4xl font-bold md:font-extrabold lg:font-extrabold text-white
        mb-10 tracking-tight"
        >
          Shopping Cart({cartCount}){" "}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div
            className="lg:col-span-1  p-8 bg-gray-900 rounded-2xl shadow-2xl sticky top-20
          lg:sticky h-fit border border-gray-800"
          >
            <h3
              className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-5 border-b border-y-gray-700 pb-3 flex 
            items-center space-x-2"
            >
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-400">₹</span>
                <span>Order Total</span>
              </div>
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-xl ">
                <span className="sm:text-sm lg:text-xl md:text-xl">
                  SubTotal :
                </span>
                <span className="font-semibold sm:text-sm lg:text-xl md:text-xl text-white">
                  ₹{cartTotalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-xl ">
                <span className="sm:text-sm lg:text-xl md:text-xl">
                  Shipping-Cost :
                </span>
                <span className="font-semibold text-green-400 sm:text-sm lg:text-xl md:text-xl">
                  Free
                </span>
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-700 ">
                <span className="sm:text-sm lg:text-xl md:text-xl font-bold text-white">
                  Estimated Total :
                </span>
                <span className="sm:text-sm lg:text-xl md:text-xl font-bold text-orange-400">
                  ₹{cartTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to={"/checkout"}
              className=" py-4 flex space-x-2 bg-orange-600 rounded-full mt-8 items-center justify-center
            hover:bg-orange-600/50 shadow-orange-800/50 shadow-lg transform uppercase hover:ring-4 hover:ring-orange-900/50"
            >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>
            <p className="text-xs text-gray-500 text-center mt-4">
              All transaction are encrypted and Secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
