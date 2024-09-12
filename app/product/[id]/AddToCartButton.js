export default function AddToCartButton({ handleAddToCart, disabled }) {
  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled}
      className={`mt-8 w-full px-6 py-3 border rounded-md text-white ${
        disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
      }`}
    >
      Add to Cart
    </button>
  );
}
