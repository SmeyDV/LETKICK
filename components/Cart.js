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
    <div className="container mx-auto p-6 mt-20 max-w-3xl">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 my-16 text-2xl">Your cart is empty.</p>
          <Link
            href={randomLink}
            className="inline-block bg-green-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-green-600 shadow-lg transition duration-200 ease-in-out"
          >
            Continue Shopping 🛍️
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: {item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price Section */}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Total: ${calculateTotalPrice().toFixed(2)}
            </h2>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-200"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-200"
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
    </div>
  );
};

export default Cart;
