import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import { Package, MapPin } from "lucide-react";
const CheckOut = () => {
  const {cartTotalPrice} = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-10 tracking-tight ">
        Finilize Order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
          className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800
        "
        >
          <h3
            className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b 
          border border-gray-700 pb-4 "
          >
            <MapPin className="w-7 h-7 text-orange-400" />
            <span>Shipping Information</span>
          </h3>

          <form className="space-y-6 ">
            {Object.keys(deliveryDetails).map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                >
                  {key == "zip" ? "pin Code" : key}
                </label>

                <input text={key === "zip" ? "number":"text"}
                id={key}
                name={key}
                value={deliveryDetails[key]}
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800
                placeholder-gray-500"
                />
              </div>
            ))}

            <div className="pt-6">

              <button
              type="submit"
              className=" w-full py-4 flex space-x-2 text-xl font-bold cursor-pointer bg-orange-600 rounded-full items-center justify-center
            hover:bg-orange-600/50 shadow-orange-800/50 shadow-lg transform uppercase hover:ring-4 hover:ring-orange-900/50"
            >
              {/* <Zap className="w-6 h-6" /> */}
              <span>₹Pay and Confirm Order(₹{cartTotalPrice.toFixed(2)})</span>
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
