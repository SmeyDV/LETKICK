import React from "react";
import Link from "next/link";

const shoesData = [
  {
    id: 1,
    name: "Air Jordan",
    price: "$299.99",
    description: "Perfect for running and everyday casual wear.",
    image:
      "https://ir.ebaystatic.com/pictures/aw/pics/sneakers/s_l640_c46b85470d.png",
  },
  {
    id: 2,
    name: "Classic Loafers",
    price: "$99.99",
    description: "Elegant loafers for formal and semi-formal occasions.",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/764/478/original/casual-shoes-isolated-3d-png.png",
  },
  {
    id: 3,
    name: "Salomon X Ultra 3",
    price: "$150",
    description:
      "A lightweight, durable hiking shoe designed for all-terrain adventures.",
    image:
      "https://outdoorguru.com/wp-content/uploads/2020/04/Salomon_X_Ultra_3_GTX_Cover.jpg",
  },
  {
    id: 4,
    name: "Converse All-Stars",
    price: "$199.99",
    description: "Comfortable flip flops for a relaxed day out.",
    image: "https://pngimg.com/d/converse_PNG66.png",
  },
];

export default function Featured() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 pt-2 mb-8">
          Featured Shoes
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {shoesData.map((shoe) => (
            <div key={shoe.id} className="w-full md:w-1/2 lg:w-1/4 px-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-52 object-contain mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {shoe.name}
                </h3>
                <p className="text-gray-600 mb-2">{shoe.price}</p>
                <p className="text-gray-600 mb-4">{shoe.description}</p>
                <Link href="/men-casual">
                  <span className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300 cursor-pointer">
                    Buy Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
