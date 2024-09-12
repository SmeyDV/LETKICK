import React, { useState, useEffect } from "react";

export default function AddToCart({ shoe, updateCartCount }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    setIsClient(true);
  }, []);

  const addToCart = () => {
    if (!isClient) return; // Prevent interaction with localStorage on the server

    try {
      let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the shoe is already in the cart
      const isItemInCart = existingCart.some((item) => item.id === shoe.id);

      if (!isItemInCart) {
        existingCart.push(shoe);
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // Update cart count
        if (updateCartCount) {
          updateCartCount(existingCart.length);
        } else {
          console.warn("updateCartCount function not provided");
        }

        // Show a success message
        alert(`${shoe.name} has been added to your cart!`);
      } else {
        alert(`${shoe.name} is already in your cart!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("An error occurred while adding the item to your cart. Please try again.");
    }
  };

  return (
    <button
      onClick={addToCart}
      disabled={!isClient} // Disable button until the component is fully loaded on the client side
      className={`px-4 py-2 bg-indigo-600 text-white rounded-md ${
        !isClient ? "cursor-not-allowed bg-gray-400" : "hover:bg-indigo-700"
      }`}
    >
      {isClient ? "Add to Cart" : "Loading..."}
    </button>
  );
}
