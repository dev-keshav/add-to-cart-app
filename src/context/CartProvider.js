import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};




const getLocalItems = () => {
  let list = localStorage.getItem("cart");
  // console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem("cart"));
  }
  else {
    return [];
  }
}



// --------------Provider-----------

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalItems());
  const numberOfItems = cartItems.length;


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (cart) => {
    const newItem = { ...cart}
    setCartItems((prevCart) => [...prevCart, newItem]) 
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Calculate total price to all the added products 
  const totalCartPrice = cartItems.reduce((total, item) => total + item.price, 0);
 

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, numberOfItems, totalCartPrice }}>
      {children}
    </CartContext.Provider>
  );
};
