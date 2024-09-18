export default function AddToCartButton({ handleAddToCart, shoe, disabled }) {
  const handleAddToCartClick = () => {
    handleAddToCart(shoe); 
  };

  return (
    <button
      onClick={handleAddToCartClick}
      disabled={disabled}
      className={`mt-8 w-full px-6 py-3 border text-xl rounded-md text-white ${
        disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
      }`}
    >
      Add to Cart
    </button>
  );
}
