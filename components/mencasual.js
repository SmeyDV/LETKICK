"use client";
import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";  // Import the ShoeCard component
import products from "../app/data/products";

export default function MenCasual() {
  // Local state to ensure localStorage is only accessed on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark the component as client-side once it's mounted
    setIsClient(true);
  }, []);

  // Filter casual shoes from products data
  const casualShoes = products.filter((product) => product.type === "casual");

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto m-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {casualShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
}
