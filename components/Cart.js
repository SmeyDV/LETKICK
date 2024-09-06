import { useState, useEffect } from "react";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [randomLink, setRandomLink] = useState("");

  useEffect(() => {
    // Fetch cart items from local storage when the page loads
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);

    // Set a random link for the "Continue Shopping" button
    setRandomLink(getRandomRoute());
  }, []);

  const handleRemoveItem = (index) => {
    // Remove item from cart by index
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleClearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const calculateTotalPrice = () => {
    // Calculate the total price by summing the prices of all items in the cart
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace("$", ""));
      return total + priceNumber;
    }, 0);
  };

  // Function to select a random route
  const getRandomRoute = () => {
    const routes = ["/men-sport", "/men-casual", "/men-hiking"];
    const randomIndex = Math.floor(Math.random() * routes.length);
    return routes[randomIndex];
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 my-16 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b-2 border-gray-200"
              >
                <div className="flex items-center">
                  {/* Updated image with circular styling */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-auto h-32 object-cover  mr-8"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-gray-600">Price: {item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Total: ${calculateTotalPrice().toFixed(2)}
            </h2>

            <div className="flex space-x-4 mt-4">
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
                onClick={() => {
                  // Redirect to the checkout page
                  window.location.href = "/myCart/checkout";
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Continue Shopping Link */}
      <div className="mt-9 text-center">
        <Link
          href={randomLink}
          className="inline-block bg-green-500 text-white text-lg font-bold px-6 py-3 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg transition duration-200 ease-in-out"
        >
          Continue Shopping 🛍️
        </Link>
      </div>
    </div>
  );
};

export default Cart;
