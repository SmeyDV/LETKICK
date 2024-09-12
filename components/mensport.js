"use client";
import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";
import products from "../app/data/products";

export default function MenSport({ updateCartCount }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter sport shoes from products data
  const sportShoes = products.filter((product) => product.type === "sport");

  const addToCart = (shoe) => {
    try {
      if (!isClient) return;

      let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      const isItemInCart = existingCart.some((item) => item.id === shoe.id);

      if (!isItemInCart) {
        existingCart.push(shoe);
        localStorage.setItem("cart", JSON.stringify(existingCart));

        if (updateCartCount) {
          updateCartCount(existingCart.length);
        }

        alert(`${shoe.name} has been added to your cart!`);
      } else {
        alert(`${shoe.name} is already in your cart!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-16">
      <div className="container mx-auto mb-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sportShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
