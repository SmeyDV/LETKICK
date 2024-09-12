'use client';
import React, { useState, useEffect } from 'react';
import MenCasual from '../../components/mencasual'; // Assuming MenCasual component renders the shoes
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Page() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(existingCart.length);
  };

  // On initial load, update the cart count from localStorage
  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <div>
      {/* Pass cartCount and updateCartCount to Navbar */}
      <Navbar cartCount={cartCount} updateCartCount={updateCartCount} />

      {/* Pass updateCartCount to MenCasual */}
      <MenCasual updateCartCount={updateCartCount} />

      <Footer />
    </div>
  );
}
