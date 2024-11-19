import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// CartProvider component to wrap the app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (shoe) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        // If item is already in the cart, update the quantity
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If item is not in the cart, add it
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  // Function to remove item from cart
  const removeFromCart = (shoeId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== shoeId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
