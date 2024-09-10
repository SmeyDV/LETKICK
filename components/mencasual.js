"use client";
import React, { useState, useEffect } from "react";

const casualShoes = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: "$120",
    description: "Classic and versatile, perfect for everyday casual wear.",
    image:
      "https://sneakcenter.com/cdn/shop/products/nike-air-force-1-low-white-supreme-sneakcenter-1-34784981156107.webp?v=1701593817",
  },
  {
    id: 2,
    name: "Adidas Stan Smith",
    price: "$80",
    description: "A timeless sneaker for a clean and simple look.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4GnyXzPVPagWPI2kTttFw_bBZ_EEyJXDZw&s",
  },
  {
    id: 3,
    name: "Vans Old Skool",
    price: "$60",
    description:
      "The classic skate shoe with a casual twist for everyday wear.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ual9GAEJIn7eBsB2yOXCfcg2-Ji7tHAlQQ&s",
  },
  {
    id: 4,
    name: "Puma Suede Classic",
    price: "$70",
    description: "Retro-inspired sneakers for a stylish casual look.",
    image:
      "https://i5.walmartimages.com/seo/Puma-Mens-Suede-Classic-XXI-Sneakers-Black-White-11-US_c089bb1c-a199-4fe4-9987-2ff66f9cd859.d48a1eac667747ed6f53b7504bf79460.jpeg",
  },
  {
    id: 5,
    name: "New Balance 574",
    price: "$85",
    description: "Comfortable and stylish, ideal for casual outings.",
    image:
      "https://i5.walmartimages.com/seo/New-Balance-574-Men-s-Running-Shoes-Size-9-5D_f4f85206-a6eb-40e5-9025-b2162a4d3ac4_1.1193d5f2132b5553def5b4b69ac09fcb.jpeg",
  },
  {
    id: 6,
    name: "Air Jordan",
    price: "$299.99",
    description: "Perfect for running and everyday casual wear.",
    image:
      "https://ir.ebaystatic.com/pictures/aw/pics/sneakers/s_l640_c46b85470d.png",
  },
  {
    id: 7,
    name: "Classic Loafers",
    price: "$99.99",
    description: "Elegant loafers for formal and semi-formal occasions.",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/764/478/original/casual-shoes-isolated-3d-png.png",
  },
  {
    id: 8,
    name: "Converse All-Stars",
    price: "$199.99",
    description: "Comfortable flip flops for a relaxed day out.",
    image: "https://pngimg.com/d/converse_PNG66.png",
  },
];

export default function MenCasual({ updateCartCount }) {
  // Local state to ensure localStorage is only accessed on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark the component as client-side once it's mounted
    setIsClient(true);
  }, []);

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
            <div
              key={shoe.id}
              className="bg-white pb-4 mx-auto rounded-sm  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between w-[300px] max-w-sm h-full  shadow-custom hover:cursor-pointer"
            >
              <div>
                <img
                  src={shoe.image}
                  alt={`${shoe.name} casual shoe`}
                  className="w-full h-48 object-contain mb-4"
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
  );
}
