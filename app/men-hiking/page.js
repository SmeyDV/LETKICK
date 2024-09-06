'use client';
import React, { useState, useEffect } from 'react';
import MenHiking from '../../components/menhiking';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Page() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(existingCart.length);
  };

  // On initial load, update the cart count from localStorage
  useEffect(() => {
    updateCartCount(); // This updates the cart count when the page first loads
  }, []);

  return (
    <div>
      {/* Pass cartCount to Navbar to display the count */}
      <Navbar cartCount={cartCount} />

      {/* Pass the updateCartCount function to MenHiking */}
      <MenHiking updateCartCount={updateCartCount} />

      <Footer />
    </div>
  );
}
