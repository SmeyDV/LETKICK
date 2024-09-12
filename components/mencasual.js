"use client";
import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";  // Import the ShoeCard component
import products from "../app/data/products";

export default function MenCasual({ updateCartCount }) {
  // Local state to ensure localStorage is only accessed on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark the component as client-side once it's mounted
    setIsClient(true);
  }, []);

  // Filter casual shoes from products data
  const casualShoes = products.filter((product) => product.type === "casual");

  // Add to Cart function with try-catch for error handling
  const addToCart = (shoe) => {
    try {
      if (!isClient) return; // Prevent any interaction with localStorage on the server

      let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the shoe is already in the cart
      const isItemInCart = existingCart.some((item) => item.id === shoe.id);

      if (!isItemInCart) {
        existingCart.push(shoe);
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // Update cart count based on the items in the cart
        if (updateCartCount) {
          updateCartCount(existingCart.length);
        } else {
          console.warn("updateCartCount function not provided");
        }

        // Show an alert when the item is successfully added
        alert(`${shoe.name} has been added to your cart!`);
      } else {
        alert(`${shoe.name} is already in your cart!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto m-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {casualShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
