// import React, { createContext } from "react";
// const Cart = createContext();

// const Context = ({ children }) => {
//   return <Cart.Provider>{children}</Cart.Provider>;
// };

// export default Context;





import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const getLocalItems = () => {
  let list = localStorage.getItem("cart");
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem("cart"));
  }
  else {
    return [];
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalItems());

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   console.log(savedCart)
  //   setCartItems(savedCart)
  // }, [])



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (cart) => {
    const newItem = { ...cart}
    // setCartItems([...cartItems, newItem]);
    setCartItems((prevCart) => [...prevCart, newItem])
    // console.log("Hello", newItem) 
    // console.log(cartItems.length) 
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
