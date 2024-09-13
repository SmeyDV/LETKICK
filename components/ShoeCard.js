import React from "react";
import { useRouter } from "next/navigation";  // Next.js router for navigation

export default function ShoeCard({ shoe }) {
  const router = useRouter();

  const goToDetails = () => {
    // Navigate to the details page using the shoe ID
    router.push(`/product/${shoe.id}`);
  };

  return (
    <div
      key={shoe.id}
      className="bg-white pb-4 mx-auto rounded-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between w-[300px] max-w-sm h-full shadow-custom hover:cursor-pointer"
      onClick={goToDetails} 
    >
      <div className="overflow-hidden">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-52 object-contain mb-4"
        />
      </div>
      <div>
        <h2 className="mx-2 text-xl font-semibold text-gray-800">
          {shoe.name}
        </h2>
        <p className="mx-2 font-extrabold text-xl text-blue-600">
          {shoe.price}
        </p>
        <p className="mt-2 mx-2 text-gray-500">{shoe.description}</p>
      </div>
      <div className="mt-4 justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();  // Prevent event bubbling to parent
            alert(`${shoe.name} added to cart!`);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mx-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}