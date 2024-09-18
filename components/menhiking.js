"use client";
import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard"; // Reusing the ShoeCard component
import products from "../app/data/products";

export default function MenHiking() {
  const [isClient, setIsClient] = useState(false);

  // Ensure localStorage only accessed on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter hiking shoes from products data
  const hikingShoes = products.filter((product) => product.type === "hiking");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto m-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hikingShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
}
