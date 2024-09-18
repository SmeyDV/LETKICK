"use client";
import React, { useState, useEffect } from "react";
import MenHiking from "../../components/menhiking";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ShoeCardSkeleton } from "../../components/ShoeCardSkeleton"; // Import the skeleton component

export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existingCart.length);
  };

  // On initial load, update the cart count from localStorage and set loading to false
  useEffect(() => {
    updateCartCount();
    setIsLoading(false); // Immediately set loading to false after updating cart count
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      {/* Show Skeleton while loading */}
      {isLoading ? (
        <div className="container mx-auto py-12 px-4">
          <ShoeCardSkeleton />
        </div>
      ) : (
        <MenHiking updateCartCount={updateCartCount} />
      )}
      <Footer />
    </div>
  );
}
