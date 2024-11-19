import React from 'react';
import { useCart } from './CartContext';

const AddToCartButton = ({ shoe }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(shoe)}
      className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
