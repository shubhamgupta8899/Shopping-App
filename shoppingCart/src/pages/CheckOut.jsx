import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import OrderConfirmation from "./OrderConfirmation";
import { Package, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cartTotalPrice, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (
      !deliveryDetails.name ||
      !deliveryDetails.address ||
      !deliveryDetails.city ||
      !deliveryDetails.zip
    ) {
      alert("Please fill all fields");
      return;
    }

    clearCart(); // Clear cart
    setIsConfirmed(true); // Show confirmation page
  };

  if (isConfirmed)
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            {Object.keys(deliveryDetails).map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                >
                  {key == "zip" ? "pin Code" : key}
                </label>

                <input
                  text={key === "zip" ? "number" : "text"}
                  id={key}
                  name={key}
                  value={deliveryDetails[key]}
                  onChange={handleChange}
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
                <span>
                  ₹Pay and Confirm Order(₹{cartTotalPrice.toFixed(2)})
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* {order summery} */}
        <div
          className="lg:col-span-1  p-8 bg-gray-900 rounded-2xl shadow-2xl sticky top-20
          lg:sticky h-fit border border-gray-800"
        >
          <h3
            className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-5 border-b border-y-gray-700 pb-3 flex 
            items-center space-x-2"
          >
            <Package className="w-6 h-6 text-orange-400" />
            {/* <span className="w-6 h-6 text-orange-400">₹</span> */}
            <span>Order Total</span>
          </h3>

          <div className="space-y-4 text-gray-400">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-base border-b border-gray-800 pb-2"
              >
                <span className="trucate text-gray-300">{item.name}</span>
                <span className="font-medium text-orange-300">
                  ₹{item.price * item.quantity}.toFixed()
                </span>
              </div>
            ))}

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
                   Total Due :
                </span>
                <span className="sm:text-sm lg:text-xl md:text-xl font-bold text-orange-400">
                  ₹{cartTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            All transaction are encrypted and Secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
