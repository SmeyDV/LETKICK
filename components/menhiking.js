"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const hikingShoes = [
  {
    id: 1,
    name: "Salomon X Ultra 3",
    price: "$150",
    description:
      "A lightweight, durable hiking shoe designed for all-terrain adventures.",
    image:
      "https://outdoorguru.com/wp-content/uploads/2020/04/Salomon_X_Ultra_3_GTX_Cover.jpg",
  },
  {
    id: 2,
    name: "Merrell Moab 2",
    price: "$120",
    description:
      "Comfortable and supportive, perfect for long hikes and rough terrain.",
    image:
      "https://www.switchbacktravel.com/sites/default/files/Merrell%20Moab%202%20shoes%20%28m%29.jpg",
  },
  {
    id: 3,
    name: "Columbia Newton Ridge",
    price: "$110",
    description:
      "Waterproof construction and superior cushioning for mountain trails.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZy_L9a1NTZ70J_miijgC8W9RofsylQzHJrQ&s",
  },
  {
    id: 4,
    name: "La Sportiva Nucleo High GTX",
    price: "$200",
    description:
      "High-performance hiking boot with GORE-TEX for ultimate protection.",
    image:
      "https://www.switchbacktravel.com/sites/default/files/images/articles/La%20Sportiva%20Nucleo%20High%20II%20GTX%20%28standing%20on%20log%20by%20water%29_0.jpg",
  },
  {
    id: 5,
    name: "Keen Targhee III",
    price: "$140",
    description:
      "Known for its comfort and versatility on various hiking paths.",
    image:
      "https://d1nymbkeomeoqg.cloudfront.net/photos/28/66/408164_29823_XXL.jpg",
  },
];

export default function MenHiking({ updateCartCount }) {
  const [isClient, setIsClient] = useState(false);

  // Ensure localStorage only accessed on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto m-16">
          {/* Shoe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hikingShoes.map((shoe) => (
              <div
                key={shoe.id}
                className="bg-white pb-4 mx-auto rounded-sm  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between w-[300px] max-w-sm h-full  shadow-custom hover:cursor-pointer"
              >
                <div>
                  <img
                    src={shoe.image}
                    alt={`${shoe.name} hiking shoe`}
                    className="w-full h-48 object-cover  mb-4"
                  />
                  <h2 className="mx-2 text-xl font-semibold text-gray-800">
                    {shoe.name}
                  </h2>
                  <p className="mx-2 font-extrabold text-xl  text-blue-600">
                    {shoe.price}
                  </p>
                  <p className="mt-2 mx-2 text-gray-500">{shoe.description}</p>
                </div>
                <div className="mt-4 justify-between">
                  <button
                    onClick={() => addToCart(shoe)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mx-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
