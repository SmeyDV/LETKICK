"use client";
import React, { useState, useEffect } from "react";
import MenCasual from "../../components/mencasual"; // Assuming MenCasual component renders the shoes
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ShoeCardSkeleton } from "../../components/ShoeCardSkeleton"; // Import the skeleton

export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existingCart.length);
  };

  // On initial load, update the cart count from localStorage and set loading to false
  useEffect(() => {
    updateCartCount();
    setIsLoading(false); // Immediately set loading to false
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} updateCartCount={updateCartCount} />
      {/* Show Skeleton while loading */}
      {isLoading ? (
        <ShoeCardSkeleton />
      ) : (
        <MenCasual updateCartCount={updateCartCount} />
      )}
      <Footer />
    </div>
  );
}
