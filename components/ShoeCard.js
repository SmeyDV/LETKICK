import React from "react";
import ShoeCard from "./ShoeCard";  
import products from "../app/data/products";

export default function MenCasual({ updateCartCount }) {
  // Filter casual shoes from products data
  const casualShoes = products.filter((product) => product.type === "casual");

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto m-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {casualShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} updateCartCount={updateCartCount} />
          ))}
        </div>
      </div>
    </div>
  );
}
