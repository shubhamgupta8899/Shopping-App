import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

import { InitialProducts } from "../data/product";

import React from "react";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const products = InitialProducts;

  //Add item into the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // remove item from card
  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  //clear all cart
  const clearCart = () => setCart([]);

  // count 
  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  //calculate price
  const cartTotalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        clearCart,
        cartCount,
        cartTotalPrice,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
