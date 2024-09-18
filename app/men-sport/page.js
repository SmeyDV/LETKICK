"use client";
import React, { useState, useEffect } from "react";
import MenSport from "../../components/mensport";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ShoeCardSkeleton } from "../../components/ShoeCardSkeleton"; // Import the skeleton

export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // Function to update cart count based on localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existingCart.length);
  };

  useEffect(() => {
    updateCartCount();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {/* Pass the cartCount to Navbar */}
      <Navbar cartCount={cartCount} />
      {/* Show Skeleton while loading */}
      {isLoading ? (
        <ShoeCardSkeleton />
      ) : (
        <MenSport updateCartCount={updateCartCount} />
      )}
      <Footer />
    </div>
  );
}
