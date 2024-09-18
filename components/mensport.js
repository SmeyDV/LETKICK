"use client";
import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";
import products from "../app/data/products"; // Ensure this path is correct

export default function MenSport() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client-side
    setIsClient(true);
  }, []);

  // Filter sport shoes from products data
  const sportShoes = products.filter((product) => product.type === "sport");

  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-16">
      <div className="container mx-auto mb-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sportShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
}
