"use client";
import React, { useState, useEffect } from 'react';
import MenSport from '../../components/mensport';
import Navbar from '../../components/NavBar'; 
import Footer from '../../components/Footer'; 

export default function Page() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count based on localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existingCart.length); // Update the state with the number of items in cart
  };
  // On initial load, update the cart count based on localStorage
  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <div>
      {/* Pass the cartCount to Navbar and updateCartCount to MenSport */}
      <Navbar cartCount={cartCount} />
      <MenSport updateCartCount={updateCartCount} />
      <Footer />
    </div>
  );
}
