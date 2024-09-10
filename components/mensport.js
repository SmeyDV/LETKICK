"use client";
import React, { useState, useEffect } from "react";

const sportShoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    price: "$120",
    description:
      "A versatile and comfortable shoe perfect for running and training.",
    image: "https://i.ebayimg.com/images/g/ozkAAOSwnMtidUSn/s-l500.jpg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$180",
    description: "Boost your performance with exceptional energy return.",
    image:
      "https://images.prismic.io/sportsshoesprod/732c2c21-da0e-498a-8603-563a9bec5409_adidas-ultraboost-light-article1.jpg?auto=compress,format",
  },
  {
    id: 3,
    name: "Under Armour HOVR Phantom",
    price: "$150",
    description:
      "High-performance shoe with HOVR technology for a zero-gravity feel.",
    image:
      "https://cdn.runrepeat.com/storage/gallery/product_primary/39388/under-armour-hovr-phantom-3-21232010-main.jpg",
  },
  {
    id: 4,
    name: "Puma Speed 500",
    price: "$100",
    description: "Lightweight shoe designed for maximum speed and agility.",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/192253/08/fnd/PNA/fmt/png/SPEED-500-Mens-Running-Shoes",
  },
  {
    id: 5,
    name: "Reebok Nano X",
    price: "$130",
    description: "Engineered for high-intensity workouts with maximum support.",
    image:
      "https://www.hoylesfitness.com/wp-content/uploads/2021/01/IMG_1910-scaled.jpeg",
  },
  {
    id: 6,
    name: "New Balance Fresh Foam",
    price: "$140",
    description: "Ultimate comfort and cushioning for long-distance running.",
    image:
      "https://www.runningshoesguru.com/wp-content/uploads/2022/09/New-Balance-Fresh-Foam-X-1080-v12-14.jpeg",
  },
  {
    id: 7,
    name: "ASICS Gel-Kayano",
    price: "$160",
    description: "Premium stability shoe with advanced GEL cushioning.",
    image:
      "https://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/8N0AAOSwfXBluyZc/$_57.JPG?set_id=8800005007",
  },
  {
    id: 8,
    name: "Mizuno Wave Rider",
    price: "$130",
    description: "Responsive and smooth ride for everyday runs.",
    image:
      "https://www.blueridgeoutdoors.com/wp-content/uploads/2012/07/MizunoWave15.jpg",
  },
  {
    id: 9,
    name: "Saucony Kinvara",
    price: "$110",
    description: "Lightweight and fast shoe with a natural feel.",
    image:
      "https://cdn.fleetfeet.com/a:1.7777777777778-f:cover-w:1600/assets/Saucony-Kinvara-11-Masthead.png?s=aad42b49",
  },
  {
    id: 10,
    name: "Brooks Ghost 13",
    price: "$150",
    description: "Balanced, soft cushioning for a smooth ride.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Xg2d7ZC8C9Ijjy1V_olCohuGheX7sfwWpw&s",
  },
];

export default function MenSport({ updateCartCount }) {
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
    <div className="bg-gray-100 min-h-screen py-12 mt-16">
      <div className="container mx-auto  mb-16">
        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sportShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-white pb-4 mx-auto rounded-sm  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between w-[300px] max-w-sm h-full  shadow-custom hover:cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-52 object-cover mb-4"
                />
              </div>
              <div>
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
