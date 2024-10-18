"use client";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productID === product.productID
    );

    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.productID === product.productID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    // Show toast notification
    toast.success(`${product.productName} added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to remove items from the cart
  const handleRemoveFromCart = (productID) => {
    setCartItems(cartItems.filter((item) => item.productID !== productID));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
